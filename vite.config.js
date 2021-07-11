import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import { ViteAliases } from 'vite-aliases'
import path from 'path'

export default defineConfig({
  plugins: [reactRefresh(), ViteAliases()],
})
