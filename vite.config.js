import federation from "@originjs/vite-plugin-federation";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "child2",
      remotes: {
        parent: "http://localhost:5173/assets/remoteEntry.js",
      },
      shared: ["react", "react-dom"],
      filename: "remoteEntryChild2.js",
      exposes: {
        "./Contact": "./src/pages/Contact",
      },
    }),
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
