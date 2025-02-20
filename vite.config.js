import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig(() => ({
  server: {
    port: 3002,
  },
  esbuild: {
    jsx: "automatic",
    loader: "tsx",
    include: ["src/**/*.{js,jsx,ts,tsx}"],
  },
  plugins: [tailwindcss()],
  css: {
    preprocessorOptions: {
      tailwindcss: {
        theme: {
          extend: {
            screens: {
              xs: "475px", // Extra Small Devices
              sm: "640px", // Small Devices
              md: "768px", // Medium Devices
              lg: "1024px", // Large Devices
              xl: "1280px", // Extra Large Devices
              "2xl": "1536px", // 2X Large Devices
            },
            colors: {
              primary: "#1E40AF", // Custom primary blue
              secondary: "#9333EA", // Custom purple
              accent: "#F59E0B", // Custom yellow
              background: "#F3F4F6", // Light gray
              dark: "#111827", // Dark theme
            },
          },
        },
      },
    },
  },
}));
