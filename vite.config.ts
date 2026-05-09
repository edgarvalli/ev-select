import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import path from "path";

export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
      entryRoot: "src",
    }),
  ],

  optimizeDeps: {
    exclude: ["react", "react/jsx-runtime", "react-dom"],
  },

  build: {
    copyPublicDir: false,

    target: "esnext",

    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      formats: ["es"],
      fileName: () => "index.es.js",
    },

    commonjsOptions: {
      include: [],
    },

    rollupOptions: {
      external: ["react", "react/jsx-runtime", "react-dom"],

      output: {
        preserveModules: false,

        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});
