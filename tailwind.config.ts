import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: "class",
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                "on-surface": "#e5e2e1",
                "outline": "#86948f",
                "secondary": "#5ddbc2",
                "on-error": "#690005",
                "background": "#131313",
                "surface-dim": "#131313",
                "surface-bright": "#3a3939",
                "inverse-primary": "#006c50",
                "surface-container-highest": "#353534",
                "secondary-fixed-dim": "#5ddbc2",
                "primary": "#00e1ab",
                "surface-container-lowest": "#0e0e0e",
                "surface-variant": "#353534",
                "tertiary-fixed-dim": "#b8d300",
                "on-error-container": "#ffdad6",
                "inverse-surface": "#e5e2e1",
                "on-secondary-fixed": "#00201b",
                "on-secondary-container": "#003028",
                "on-secondary-fixed-variant": "#005045",
                "secondary-fixed": "#7cf7de",
                "surface": "#131313",
                "surface-container-high": "#2a2a2a",
                "error": "#ffb4ab",
                "outline-variant": "#3d4946",
                "error-container": "#93000a",
                "primary-fixed-dim": "#00e1ab",
                "primary-container": "#00a47c",
                "surface-tint": "#00e1ab",
                "on-primary-fixed-variant": "#00513c",
                "tertiary-fixed": "#d2f000",
                "on-tertiary-fixed-variant": "#414c00",
                "on-surface-variant": "#bccac5",
                "tertiary-container": "#869a00",
                "on-secondary": "#00382f",
                "tertiary": "#b8d300",
                "inverse-on-surface": "#313030",
                "on-tertiary-fixed": "#191e00",
                "secondary-container": "#00a38d",
                "on-primary": "#003828",
                "surface-container-low": "#1c1b1b",
                "on-primary-fixed": "#002116",
                "surface-container": "#201f1f",
                "on-primary-container": "#003122",
                "primary-fixed": "#36ffc4",
                "on-tertiary-container": "#262d00",
                "on-tertiary": "#2c3400",
                "on-background": "#e5e2e1"
            },
            borderRadius: {
                "DEFAULT": "0.25rem",
                "lg": "0.5rem",
                "xl": "0.75rem",
                "full": "9999px"
            },
            fontFamily: {
                "headline": ["Plus Jakarta Sans", "sans-serif"],
                "body": ["Inter", "sans-serif"],
                "label": ["Space Grotesk", "sans-serif"],
                "mono": ["Geist Mono", "monospace"]
            }
        },
    },
    plugins: [],
};
export default config;
