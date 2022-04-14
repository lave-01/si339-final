import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import vitePluginImp from 'vite-plugin-imp';
import tsconfigPaths from 'vite-tsconfig-paths';
import pkgConfig from 'vite-plugin-package-config';
import optimizationPersist from 'vite-plugin-optimize-persist';
import { getThemeVariables } from 'antd/dist/theme';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      { find: /^~/, replacement: "" },
    ],
  },
  plugins: [
    react(),
    pkgConfig(),
    tsconfigPaths(),
    optimizationPersist(),
    vitePluginImp({
      libList: [
        {
          libName: 'antd',
          style: (name) => `antd/es/${name}/style`,
        },
      ],
    }),
  ],
  css: {
    preprocessorOptions: {
      less: {
        // modifyVars: getThemeVariables({

        // }),
        javascriptEnabled: true,
      },
    }
  }
})
