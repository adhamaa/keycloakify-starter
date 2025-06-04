import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { keycloakify } from "keycloakify/vite-plugin";
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        tailwindcss(),
        keycloakify({
            accountThemeImplementation: "none",
            themeName: ["my-theme-1", "my-theme-2"],
            keycloakVersionTargets: {
                "22-to-25": true,
                "all-other-versions": `${new Date().toISOString().replace('T', '_').replace(/:/g, '-')}.jar`,
            }
        })
    ]
});
