import { ValidateEnv } from "@julr/vite-plugin-validate-env";
import vue from "@vitejs/plugin-vue";
import { URL, fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import vueDevTools from "vite-plugin-vue-devtools";

import { envSchema } from "./src/shared/config";

// https://vite.dev/config/
export default defineConfig({
    server: {
        port: 3000,
        open: true,
    },
    plugins: [
        vue(),
        vueDevTools(),
        ValidateEnv({
            validator: "standard",
            schema: envSchema,
        }),
    ],
    resolve: {
        alias: {
            "@": fileURLToPath(new URL("./src", import.meta.url)),
        },
    },
});
