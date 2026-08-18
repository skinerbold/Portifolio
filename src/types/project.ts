export interface ProjectPeriod {
  start?: string
  end?: string
  label: string
}

export interface ProjectImage {
  src: string
  alt: string
  width: number
  height: number
}

export interface ProjectLinks {
  website?: string
  github?: string
}

export type ProjectStatus =
  | 'live'
  | 'open-source'
  | 'academic'
  | 'client'
  | 'archived'

export interface Project {
  slug: string
  title: string
  period?: ProjectPeriod
  shortDescription?: string
  description?: string
  contribution?: string
  technologies?: string[]
  categories?: string[]
  image: ProjectImage
  links: ProjectLinks
  featured: boolean
  status?: ProjectStatus
}
