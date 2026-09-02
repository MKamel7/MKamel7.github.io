import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import test from 'node:test'
import { displayMetricValue, partitionSkillGroups } from '../src/portfolioContent.ts'
import { content } from '../src/content.ts'
import { projects } from '../src/data/projects.ts'

test('displays the metric value for the active language', () => {
  const value = { en: '68.7%', de: '68,7 %' }

  assert.equal(displayMetricValue(value, 'en'), '68.7%')
  assert.equal(displayMetricValue(value, 'de'), '68,7 %')
})

test('partitions skill groups without hiding or duplicating them', () => {
  const groups = [
    { label: 'Robotics', tier: 'core' as const, items: ['ROS 2'] },
    { label: 'Simulation', tier: 'additional' as const, items: ['Simscape'] },
    { label: 'Safety', tier: 'core' as const, items: ['Fault injection'] },
  ]

  const result = partitionSkillGroups(groups)

  assert.deepEqual(result.core.map((group) => group.label), ['Robotics', 'Safety'])
  assert.deepEqual(result.additional.map((group) => group.label), ['Simulation'])
  assert.equal(result.core.length + result.additional.length, groups.length)
})

test('keeps public-facing copy focused on capability rather than limitations', () => {
  const publicCopy = [
    content.en.about.paragraph,
    content.de.about.paragraph,
    ...projects.flatMap((project) => [project.desc.en, project.desc.de]),
    ...projects.flatMap((project) => project.highlights?.flatMap((line) => [line.en, line.de]) ?? []),
    ...projects.flatMap((project) => project.metrics.flatMap((metric) => [metric.label.en, metric.label.de])),
    ...projects.flatMap((project) => project.shots?.flatMap((shot) => [shot.caption.en, shot.caption.de]) ?? []),
  ].join('\n')

  const limitationPhrases = [
    /retract/i,
    /zurückzieh/i,
    /how fast it dies/i,
    /wie schnell sie einbricht/i,
    /honest about its limit/i,
    /ehrlich zu ihrer grenze/i,
    /hardware it would ship on/i,
    /mit der sie ausgeliefert würde/i,
    /requirements reported unmet/i,
    /sicherheitsanforderungen als nicht erfüllt/i,
    /has never rejected anything/i,
    /noch nie etwas zurückgewiesen/i,
    /intrusion/i,
    /eindringen/i,
  ]

  for (const phrase of limitationPhrases) {
    assert.doesNotMatch(publicCopy, phrase)
  }
})

// The card copy is skimmed, not read, and the failure mode is one direction
// only: paragraphs grow. Every card on this page once carried a single
// six-sentence block, which is the shape a reader in a hurry skips whole. A
// limit that a human has to remember is a limit that drifts, so it is a check.
// The numbers are the current longest string plus a little headroom, not a
// design opinion: they permit an edit and refuse a rewrite back into prose.
const DESC_MAX = 360
const HIGHLIGHT_MAX = 175
const HIGHLIGHTS_MAX = 3

test('keeps project card copy short enough to be skimmed', () => {
  const tooLong: string[] = []

  for (const project of projects) {
    for (const lang of ['en', 'de'] as const) {
      const desc = project.desc[lang]
      if (desc.length > DESC_MAX) {
        tooLong.push(`${project.id} desc.${lang} is ${desc.length} chars, over ${DESC_MAX}`)
      }
      for (const [index, line] of (project.highlights ?? []).entries()) {
        if (line[lang].length > HIGHLIGHT_MAX) {
          tooLong.push(`${project.id} highlight[${index}].${lang} is ${line[lang].length} chars, over ${HIGHLIGHT_MAX}`)
        }
      }
    }
    const count = project.highlights?.length ?? 0
    if (count > HIGHLIGHTS_MAX) {
      tooLong.push(`${project.id} has ${count} highlights, over ${HIGHLIGHTS_MAX}`)
    }
  }

  assert.deepEqual(tooLong, [], `card copy that has grown back into a block:\n${tooLong.join('\n')}`)
})

test('uses precise public claims for the audited projects', () => {
  const byId = Object.fromEntries(projects.map((project) => [project.id, project]))

  assert.match(byId['digital-twin'].metrics[0].label.en, /reported case-study/i)
  assert.ok(byId.p1.tags.includes('HIL-ready'))
  assert.ok(!byId.p1.tags.includes('HIL'))
  assert.ok(!byId.p2.tags.includes('AUTOSAR E2E'))
  assert.ok(!byId.p2.tags.includes('PROFIsafe'))
  // Expanded from "IK" to words for a non-specialist reader, so the regex
  // moved with it. The point of the assertion is unchanged: this is the
  // solver's own numerical residual, not a measured physical accuracy.
  assert.match(byId.palletizing.metrics[0].label.en, /inverse-kinematics position residual/i)
  assert.ok(!byId['fire-robot'].tags.includes('Sensor fusion'))
})

test('provides localized metric values and German number formatting', () => {
  for (const project of projects) {
    for (const metric of project.metrics) {
      assert.equal(typeof metric.value, 'object')
      assert.ok(metric.value.en)
      assert.ok(metric.value.de)
    }
  }

  // Looked up by the English value rather than by position: reordering a
  // card's chips is an editorial decision and should not break a test about
  // German number formatting, which is what happened when it was indexed.
  const byId = Object.fromEntries(projects.map((project) => [project.id, project]))
  const german = (id: string, en: string) => {
    const metric = byId[id].metrics.find((candidate) => candidate.value.en === en)
    assert.ok(metric, `${id} has no metric with the English value ${en}`)
    return metric.value.de
  }

  assert.equal(german('p3', '68.7%'), '68,7 %')
  assert.equal(german('p3', '40,570'), '40.570')
  assert.equal(german('dms', '97.8%'), '97,8 %')
})

test('keeps ISO references out of both skills grids', () => {
  for (const lang of ['en', 'de'] as const) {
    const items = content[lang].skills.groups.flatMap((group) => group.items)
    assert.ok(items.every((item) => !/^ISO\b/.test(item)))
  }
})

test('gives the fault-harness architecture a large intrinsic modal size', () => {
  const svg = readFileSync(new URL('../public/media/p2-architecture.svg', import.meta.url), 'utf8')

  assert.match(svg, /<svg[^>]*\bwidth="1280"[^>]*\bheight="720"/)
})
