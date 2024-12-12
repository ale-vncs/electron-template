import { optimizeLodashImports } from '@optimize-lodash/rollup-plugin';
import react from '@vitejs/plugin-react';
import {
  bytecodePlugin,
  defineConfig,
  externalizeDepsPlugin,
  swcPlugin,
} from 'electron-vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  main: {
    build: {
      watch: {
        buildDelay: 200,
      },
    },
    plugins: [
      tsconfigPaths({
        configNames: ['tsconfig.node.json'],
      }),
      swcPlugin(),
      externalizeDepsPlugin({
        exclude: ['better-sqlite3'],
      }),
      bytecodePlugin(),
    ],
  },
  preload: {
    build: {
      watch: {
        buildDelay: 200,
      },
    },
    plugins: [
      tsconfigPaths({
        configNames: ['tsconfig.json'],
      }),
      externalizeDepsPlugin({
        exclude: ['lodash'],
      }),
      optimizeLodashImports(),
      bytecodePlugin(),
    ],
  },
  renderer: {
    plugins: [
      tsconfigPaths({
        configNames: ['tsconfig.web.json'],
      }),
      optimizeLodashImports(),
      react(),
    ],
  },
});
