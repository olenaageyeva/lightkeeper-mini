import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import svgrPlugin from "vite-plugin-svgr";
// import react from "@vitejs/plugin-react";
// import tsconfigPaths from "vite-tsconfig-paths";
import { vitePluginCommonjs } from "vite-plugin-commonjs";

// https://vitejs.dev/config/
export default defineConfig({
  // This changes the out put dir from dist to build
  // comment this out if that isn't relevant for your project
  build: {
    outDir: "build",
  },
  plugins: [reactRefresh(), svgrPlugin(), vitePluginCommonjs()],
  // resolve: { dedupe: ["react", "react-dom", "node"] },
});
