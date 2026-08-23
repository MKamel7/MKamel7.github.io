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

test('uses precise public claims for the audited projects', () => {
  const byId = Object.fromEntries(projects.map((project) => [project.id, project]))

  assert.match(byId['digital-twin'].metrics[0].label.en, /reported case-study/i)
  assert.ok(byId.p1.tags.includes('HIL-ready'))
  assert.ok(!byId.p1.tags.includes('HIL'))
  assert.ok(!byId.p2.tags.includes('AUTOSAR E2E'))
  assert.ok(!byId.p2.tags.includes('PROFIsafe'))
  assert.match(byId.palletizing.metrics[0].label.en, /IK position residual/i)
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

  const byId = Object.fromEntries(projects.map((project) => [project.id, project]))
  assert.equal(byId.p3.metrics[0].value.de, '68,7 %')
  assert.equal(byId.p3.metrics[2].value.de, '40.570')
  assert.equal(byId.dms.metrics[0].value.de, '97,8 %')
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
