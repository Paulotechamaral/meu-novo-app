import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const isGithubActions = process.env.GITHUB_ACTIONS === 'true'
const repoName = process.env.GITHUB_REPOSITORY
? process.env.GITHUB_REPOSITORY.split('/')[1]
: ''

export default defineConfig({
  plugins: [react()],
  // base dinamico: local "/" e no Github Pages "/<repo>/"
  base: isGithubActions ? `/${repoName}/` : '/',
test: {
  environment: 'jsdom',
  setupFiles: './src/setupTests.js',
  globals: true,
  csss: true,
}
})
