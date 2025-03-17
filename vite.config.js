/* eslint-env node */

import vue from "@vitejs/plugin-vue";
import { join } from "node:path";
import vuetify from "vite-plugin-vuetify";

import { nodePolyfills } from "vite-plugin-node-polyfills";

const PACKAGE_ROOT = __dirname;

const générerExtentions = () => {
  const extentions = [
    vue(),
    // https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vite-plugin
    vuetify({
      autoImport: true,
    }),
    nodePolyfills(),
  ];
  return extentions;
};

const générerAliasRésolution = () => {
  return {
    "/@/": join(PACKAGE_ROOT, "src") + "/",
  };
};

// Pareil pour Électron ou non, parce qu'ici il s'agit de la partie interface (rendu)
const dépendsÀExclure = [
  'chokidar',
  '@libp2p/tcp',
  '@libp2p/mdns',
  'env-paths',
  'datastore-fs',
  'blockstore-fs',
];

/**
 * @type {import('vite').UserConfig}
 * @see https://vitejs.dev/config/
 */
const config = {
  resolve: {
    alias: générerAliasRésolution(),
    extensions: [".js", ".json", ".jsx", ".mjs", ".ts", ".tsx", ".vue"],
  },
  base: "", // '/vuejs-abhyaas/'
  server: {
    fs: {
      strict: true,
    },
  },
  build: {
    sourcemap: true,
    target: "esnext",
    outDir: "dist",
    assetsDir: ".",
    rollupOptions: {
      input: join(PACKAGE_ROOT, "index.html"),
      external: dépendsÀExclure,
    },
    emptyOutDir: true,
    reportCompressedSize: false,
  },
  optimizeDeps: {
    exclude: dépendsÀExclure,
    esbuildOptions: {
      target: "esnext",
    },
  },
  plugins: générerExtentions(),
};

export default config;
