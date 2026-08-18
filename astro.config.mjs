import { defineConfig } from 'astro/config'

const site = process.env.ASTRO_SITE?.trim()
const base = process.env.ASTRO_BASE?.trim()

export default defineConfig({
  output: 'static',
  ...(site ? { site } : {}),
  ...(base ? { base } : {}),
})
