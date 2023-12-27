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
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: "Vue",
        },
        manualChunks() {
          return 'w-hooks';
        },
        format: "umd",
        // 指定输出目录
        entryFileNames: "lib/[name]/[name].js",
        chunkFileNames: "bin/[name].js",
        assetFileNames: "[name]/[name].[extname]",
        dir: "dist", // 这里可以指定要输出到的文件夹
      },
    },
  },
});
