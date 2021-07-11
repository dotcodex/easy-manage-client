import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import { ViteAliases } from 'vite-aliases'
import fs from 'fs';

export default defineConfig({
  plugins: [reactRefresh(), ViteAliases()],
  esbuild: {
    loader: "jsx",
    include: /src\/.*\.jsx?$/,
    // loader: "tsx",
    // include: /src\/.*\.[tj]sx?$/,
    exclude: [],
  },
  optimizeDeps: {
    esbuildOptions: {
      plugins: [
        {
          name: "load-js-files-as-jsx",
          setup(build) {
            build.onLoad({ filter: /src\/.*\.js$/ }, async (args) => ({
              loader: "jsx",
              contents: await fs.readFileSync(args.path, "utf8"),
            }));
          },
        },
      ],
    },
  },
})
