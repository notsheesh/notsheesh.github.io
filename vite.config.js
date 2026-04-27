import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import yaml from 'js-yaml'

function markdownNotes() {
  return {
    name: 'markdown-notes',
    transform(src, id) {
      if (!id.endsWith('.md')) return null

      let frontmatter = {}
      let content = src.trim()
      const match = src.match(/^---\s*\n([\s\S]*?)\n---\s*\n?/)

      if (match) {
        frontmatter = yaml.load(match[1]) || {}
        content = src.slice(match[0].length).trim()
      }

      const data = {
        ...frontmatter,
        content,
      }

      return {
        code: [
          `const data = ${JSON.stringify(data)}`,
          'export default data',
          'export const title = data.title',
          'export const date = data.date',
          'export const image = data.image',
          'export const subimages = data.subimages',
          'export const content = data.content',
        ].join('\n'),
        map: null,
      }
    },
  }
}

export default defineConfig({
  plugins: [react(), tailwindcss(), markdownNotes()],
})
