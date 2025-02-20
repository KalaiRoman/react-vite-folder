import { defineConfig } from "vite";

export default defineConfig(() => ({
  esbuild: {
    jsx: "automatic", // Enable JSX support
    loader: "tsx", // Can also be "jsx"
    include: ["src/**/*.{js,jsx,ts,tsx}"], // Ensure it applies to all JS/TS files
  },
}));
