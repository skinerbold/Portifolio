export type SocialPlatform =
  | 'github'
  | 'linkedin'
  | 'instagram'
  | 'email'
  | 'whatsapp'

export interface SocialLink {
  platform: SocialPlatform
  label: string
  href: string | null
  external: boolean
  pending?: boolean
}

export const socialLinks = [
  {
    platform: 'github',
    label: 'GitHub',
    href: 'https://github.com/skinerbold',
    external: true,
  },
  {
    platform: 'linkedin',
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/skinerbold/',
    external: true,
  },
  {
    platform: 'instagram',
    label: 'Instagram',
    href: 'https://www.instagram.com/skinerbold/',
    external: true,
  },
  {
    platform: 'email',
    label: 'E-mail',
    href: 'mailto:skinerbold@gmail.com',
    external: false,
  },
  {
    platform: 'whatsapp',
    label: 'WhatsApp',
    href: 'https://wa.me/5532984256116',
    external: true,
  },
] satisfies SocialLink[]
