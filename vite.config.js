import { defineConfig } from "vite";
import fs from "node:fs";
import path from "node:path";

// https://vitejs.dev/config/
export default defineConfig(async ({ command, mode }) => {
  return {
    build: {
      outDir: "deploy/_site",
      rollupOptions: {
        input: {
          main: "index.html",
          404: "404.html",
        },
      },
    },
    server: {
      headers: {
        // Unity WebGL often needs COOP/COEP for WASM
        "Cross-Origin-Embedder-Policy": "require-corp",
        "Cross-Origin-Opener-Policy": "same-origin",
      },
    },
    plugins: [
      {
        name: "unity-br-middleware",
        configureServer(server) {
          server.middlewares.use((req, res, next) => {
            // only serve the Brotli version if a .br file actually exists
            const urlPath = decodeURIComponent(req.url.split("?")[0]);
            const hasBr = ["public", "."].some((dir) =>
              fs.existsSync(path.join(dir, urlPath + ".br"))
            );
            if (!hasBr) return next();
            if (req.url.endsWith(".wasm")) {
              req.url += ".br";
              res.setHeader("Content-Encoding", "br");
              res.setHeader("Content-Type", "application/wasm");
            } else if (req.url.endsWith(".js")) {
              req.url += ".br";
              res.setHeader("Content-Encoding", "br");
              res.setHeader("Content-Type", "application/javascript");
            } else if (req.url.endsWith(".data")) {
              req.url += ".br";
              res.setHeader("Content-Encoding", "br");
              res.setHeader("Content-Type", "application/octet-stream");
            }
            next();
          });
        },
      },
    ],
  };
});