import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom", // Vitest usa jsdom para testar código que depende do DOM
    globals: true, // Permite o uso de globals como describe, it, etc.
    setupFiles: "./vitest.setup.ts", // Configura o arquivo de configuração global
    include: ["**/*.{test,spec}.{js,ts,jsx,tsx}"], // Inclui todos os arquivos de teste
  },
});
