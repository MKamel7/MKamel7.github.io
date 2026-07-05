export interface Localized {
  en: string
  de: string
}

export interface Project {
  id: string
  title: string
  category: 'featured' | 'pipeline'
  metrics: { value: string; label: Localized }[]
  desc: Localized
  tags: string[]
  media?: string
  poster?: string
  repo?: string
  status?: Localized
}
