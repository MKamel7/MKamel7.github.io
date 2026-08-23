import type { Lang } from './i18n'
import type { Localized, SkillGroup } from './types'

export function displayMetricValue(value: Localized, lang: Lang) {
  return value[lang]
}

export function partitionSkillGroups(groups: SkillGroup[]) {
  return {
    core: groups.filter((group) => group.tier === 'core'),
    additional: groups.filter((group) => group.tier === 'additional'),
  }
}
