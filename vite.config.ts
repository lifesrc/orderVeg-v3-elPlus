import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import ssr from 'vite-plugin-ssr/plugin'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
const plugins = [
  vue(),
  vueJsx(),
  AutoImport({
    resolvers: [ElementPlusResolver()],
  }),
  Components({
    resolvers: [ElementPlusResolver()],
  }),
]
if (process.env.npm_lifecycle_event === 'ssr') {
  plugins.push(ssr())
}
export default defineConfig({
  plugins,
  resolve: {
    alias: {
      // 'vue': 'vue/dist/vue.esm-bundler.js',
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      // Prefix path aliases with '#'
      "#root": __dirname
    }
  }
})
