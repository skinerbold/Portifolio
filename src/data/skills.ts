export interface SkillGroup {
  label: string
  skills: string[]
}

export const skillGroups = [
  {
    label: 'DEVELOPMENT',
    skills: ['JavaScript', 'TypeScript', 'Python'],
  },
  {
    label: 'WEB',
    skills: ['React', 'Next.js', 'Vite', 'Streamlit', 'HTML', 'CSS'],
  },
  {
    label: 'BACKEND & DATA',
    skills: ['Node.js', 'Laravel', 'SQL', 'Data Analysis'],
  },
  {
    label: 'UI',
    skills: ['Tailwind CSS', 'Material UI', 'shadcn/ui'],
  },
  {
    label: 'TOOLS',
    skills: ['Git', 'AWS'],
  },
  {
    label: 'SPECIALIZED',
    skills: ['Canvas Graphics', 'GUI'],
  },
] satisfies SkillGroup[]

export const skills = [...new Set(skillGroups.flatMap((group) => group.skills))]
