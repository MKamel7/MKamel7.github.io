import assert from 'node:assert/strict'
import { existsSync, readdirSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import path from 'node:path'
import test from 'node:test'
import { content } from '../src/content.ts'
import { projects } from '../src/data/projects.ts'

const publicDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', 'public')

// Every media path referenced by a project must exist on disk.
//
// This is the test that would have caught six orphaned GIFs (rov, dms,
// digital-twin, fire-robot, smart-home, warehouse) sitting in public/media
// referenced by nothing, and it catches the more damaging direction too: a
// project pointing at a file that was renamed or never committed renders as a
// broken tile on the live site, and nothing else here would notice.
test('every media reference resolves to a file that exists', () => {
  const missing: string[] = []

  const check = (ref: string | undefined, where: string) => {
    if (!ref) return
    if (!ref.startsWith('/')) {
      missing.push(`${where}: ${ref} is not an absolute public path`)
      return
    }
    if (!existsSync(path.join(publicDir, ref))) missing.push(`${where}: ${ref}`)
  }

  for (const project of projects) {
    check(project.media, `${project.id} media`)
    check(project.poster, `${project.id} poster`)
    for (const [index, shot] of (project.shots ?? []).entries()) {
      check(shot.src, `${project.id} shot[${index}]`)
    }
  }

  assert.deepEqual(missing, [], `media references with no file:\n${missing.join('\n')}`)
})

// Nothing may sit in public/media that no card points at.
//
// This is the direction the test above does not cover, and it has gone wrong
// twice. Six orphaned GIFs accumulated once and were cleaned up by hand. Then
// p2.mp4 and its poster and thumbnail sat unreferenced for a month, shipped in
// every build, and were still drawing the pre-correction numbers 27 and 204
// while the card said 29 and 323. That is the real cost of an orphan: it is
// not the bytes, it is that nothing checks a file nobody renders, so it goes
// quietly stale and is then the wrong thing to reach for when someone wires it
// in.
//
// Delete the file, or point a card at it. Keeping it "for later" is the state
// this test exists to refuse.
test('no media file sits in public/media unreferenced', () => {
  const mediaDir = path.join(publicDir, 'media')

  const referenced = new Set<string>()
  for (const project of projects) {
    for (const ref of [project.media, project.poster, ...(project.shots ?? []).map((s) => s.src)]) {
      if (ref) referenced.add(path.basename(ref))
    }
    // The marquee derives a thumbnail name from the poster rather than storing
    // one, so a thumbnail is referenced without ever appearing in the data.
    if (project.poster?.endsWith('-poster.jpg')) {
      referenced.add(path.basename(project.poster).replace(/-poster\.jpg$/, '-thumb.jpg'))
    }
  }

  const orphans = readdirSync(mediaDir)
    .filter((name) => name !== '.gitkeep')
    .filter((name) => !referenced.has(name))

  assert.deepEqual(
    orphans,
    [],
    `media files nothing points at, so delete them or wire them into a card:\n${orphans.join('\n')}`,
  )
})

// Both languages must describe the same site.
//
// content.ts is hand-maintained with `en` and `de` as separate object
// literals, so a key added to one and forgotten in the other is a silent
// regression: the German visitor gets `undefined` or a blank section, and the
// build still succeeds because both sides satisfy the same interface only
// structurally. Comparing the actual key trees is what catches drift.
test('the English and German content trees have the same shape', () => {
  const keysOf = (value: unknown, prefix = ''): string[] => {
    if (value === null || typeof value !== 'object') return []
    if (Array.isArray(value)) {
      return value.flatMap((item, index) => keysOf(item, `${prefix}[${index}]`))
    }
    return Object.entries(value).flatMap(([key, child]) => {
      const here = prefix ? `${prefix}.${key}` : key
      return [here, ...keysOf(child, here)]
    })
  }

  const en = new Set(keysOf(content.en))
  const de = new Set(keysOf(content.de))

  const missingInDe = [...en].filter((key) => !de.has(key))
  const missingInEn = [...de].filter((key) => !en.has(key))

  assert.deepEqual(missingInDe, [], `present in EN, missing in DE:\n${missingInDe.join('\n')}`)
  assert.deepEqual(missingInEn, [], `present in DE, missing in EN:\n${missingInEn.join('\n')}`)
})

// A translated string that is still the English one is usually an oversight
// rather than a decision. Proper nouns and technical terms legitimately match,
// so this only asserts that the two languages are not wholesale identical,
// which is the failure mode worth catching (a copy-paste of `en` into `de`).
test('the German content is actually translated', () => {
  assert.notDeepEqual(content.de, content.en)
})
