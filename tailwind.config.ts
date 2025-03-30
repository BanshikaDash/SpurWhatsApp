
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Unified theme - combining SPUR and Cyber elements
				spur: {
					light: "#96b491",     // Light green from SPUR
					DEFAULT: "#4E6F45",   // Medium green from SPUR
					dark: "#182c24",      // Dark green from SPUR
					text: "#354741",      // Text color from SPUR
				},
				cyber: {
					bg: "#0d0d0d",         // Dark background from Cyber
					accent: "#4DB6AC",      // Teal accent from Cyber
					glow: "#00E676",        // Glowing green from Cyber
					text: "#dcdcdc",        // Light text from Cyber
					dark: "#242424",        // Dark gray from Cyber
				},
				// Mixed colors for unified theme
				unified: {
					primary: "#4E6F45",     // SPUR green as primary
					secondary: "#4DB6AC",   // Cyber teal as secondary
					accent: "#00E676",      // Cyber glow green as accent
					dark: "#182c24",        // SPUR dark green for dark elements
					light: "#e9f0e6",       // Light pastel green for light areas
					grayDark: "#242424",    // Dark gray from cyber
					grayLight: "#dcdcdc",   // Light gray from cyber
				}
			},
			fontFamily: {
				poppins: ["Poppins", "sans-serif"],
				orbitron: ["Orbitron", "sans-serif"],
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				fadeIn: {
					"0%": { opacity: "0", transform: "translateY(-10px)" },
					"100%": { opacity: "1", transform: "translateY(0)" }
				},
				gradientBG: {
					"0%": { backgroundPosition: "0% 50%" },
					"50%": { backgroundPosition: "100% 50%" },
					"100%": { backgroundPosition: "0% 50%" }
				},
				pulse: {
					"0%, 100%": { opacity: "1" },
					"50%": { opacity: "0.5" }
				},
				glow: {
					"0%, 100%": { boxShadow: "0 0 5px rgba(0, 230, 118, 0.3)" },
					"50%": { boxShadow: "0 0 20px rgba(0, 230, 118, 0.7)" }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				"fade-in": "fadeIn 0.6s ease-out forwards",
				"gradient-bg": "gradientBG 10s ease infinite",
				"pulse": "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
				"glow": "glow 2s ease-in-out infinite"
			},
			backgroundImage: {
				"green-gradient": "linear-gradient(to right, #4E6F45, #96b491)",
				"cyber-gradient": "linear-gradient(-45deg, #0f2027, #203a43, #2c5364)",
				"unified-gradient": "linear-gradient(135deg, #182c24, #4E6F45, #96b491)",
				"tech-overlay": "linear-gradient(to right, rgba(13, 13, 13, 0.7), rgba(13, 13, 13, 0.3))",
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
