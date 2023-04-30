import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import Components from 'unplugin-vue-components/vite';
// @ts-ignore
import { WhimsyResolver } from '../dist/whimsy-ui/es/resolver.mjs';
import path from 'path';
import buildUtils from '@whimsy-ui/build-utils';
import UnoCSS from 'unocss/vite';
import './unocss.config.ts';
import VueMacros from 'unplugin-vue-macros/vite';
const { wsRoot, pkgRoot } = buildUtils;

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 2023
  },
  plugins: [
    vue(),
    vueJsx(),
    Components({
      include: `${__dirname}/**/*.vue`,
      resolvers: WhimsyResolver({ importStyle: false }),
      dts: true
    }),
    UnoCSS({}),
    VueMacros()
  ],
  optimizeDeps: {
    include: ['vue', '@vue/shared']
  },
  resolve: {
    // 此处设置别名是为了配合unplugin的路径解析
    alias: [
      {
        find: /^whimsy-ui(\/(es|lib))?$/,
        replacement: path.resolve(wsRoot, 'index.ts')
      },
      {
        find: /^whimsy-ui\/(es|lib)\/(.*)$/,
        replacement: `${pkgRoot}/$2`
      }
    ]
  }
});
