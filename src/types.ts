export interface Localized {
  en: string
  de: string
}

export interface SkillGroup {
  label: string
  tier: 'core' | 'additional'
  items: string[]
}

export interface Project {
  id: string
  title: string
  category: 'featured' | 'pipeline'
  metrics: { value: Localized; label: Localized }[]
  desc: Localized
  tags: string[]
  media?: string
  poster?: string
  // Real captures from the project itself, shown in the enlarged view. Not
  // renders and not mock-ups: a screenshot that is not of the running thing is
  // worse than no screenshot, because it looks like evidence.
  shots?: { src: string; caption: Localized }[]
  repo?: string
  status?: Localized
}
