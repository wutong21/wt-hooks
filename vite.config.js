import { defineConfig } from "vite";
import { resolve, join } from "path";
import fs from "fs";
const glob = require("glob");
const packagesDir = "packages";
const packages = fs
  .readdirSync(packagesDir)
  .filter((dir) => fs.lstatSync(join(packagesDir, dir)).isDirectory());

let entry = [];
let dir = [];
let input = {};
packages.forEach((name) => {
  entry.push(resolve(__dirname, `packages/${name}/index.js`));
  dir.push(resolve(__dirname, `dist/${name}`));
  input[name] = resolve(__dirname, `packages/${name}/index.js`);
});
export default defineConfig({
  build: {
    // target: "es5",
    lib: {
      name: 'index',
      // entry,
      entry: glob.sync(resolve(__dirname, 'packages', '**', 'index.js')),

    },
    minify: false,
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ["vue"],
      // @ts-ignore
      input,
      output: {
        globals: {
          vue: "Vue",
        },
        manualChunks() {
          return "index";
        },
        format: "umd",
        // 指定输出目录
        entryFileNames: "lib/[name]/[name].js",
        chunkFileNames: "[name].js",
        assetFileNames: "[name]/[name].[extname]",
        // dir: "dist", // 这里可以指定要输出到的文件夹
      },
    },
  },
});
