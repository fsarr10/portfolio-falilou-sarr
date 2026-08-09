import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#050816",
        panel: "#0b1224",
        line: "rgba(148, 163, 184, 0.18)",
        electric: "#3b82f6",
        cyan: "#22d3ee",
        violet: "#8b5cf6",
        success: "#22c55e"
      },
      boxShadow: {
        glow: "0 24px 80px rgba(34, 211, 238, 0.18)"
      }
    }
  },
  plugins: [
    plugin(({ addVariant }) => {
      addVariant("light", ".light &");
    })
  ]
};

export default config;
