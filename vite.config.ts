import { defineConfig } from "vite";
import { resolve } from "path";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        style: "./src/style.css",
        widget: "./src/widget.ts",
        "widget-tag": "./src/widget-tag.ts",
      },
      output: {
        inlineDynamicImports: false,
        entryFileNames: "[name].js",
        chunkFileNames: "[name].js",
        assetFileNames: "[name].[ext]",
      },
    },
  },
  experimental: {
    renderBuiltUrl(filename: string) {
      return process.env.VITE_BUILT_URL + filename;
    },
  },
});
