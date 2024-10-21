import { join } from 'path'
import type { Config } from 'tailwindcss'
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import { skeleton } from '@skeletonlabs/tw-plugin';
import { praxis } from './src/praxis'

export default {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}', join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')],
	theme: {
		extend: {
			fontFamily: {
				Nunito: ['Nunito', 'sans-serif'],
				Tungsten: ['Tungsten', 'sans-serif'],
				Valorant: ['Valorant', 'sans-serif'],
				FeastFBB: ['FeastFBB', 'sans-serif'],
				Manga: ['Manga', 'sans-serif'],
				AngryB: ['AngryB', 'sans-serif']
			}
		}
	},
	plugins: [
		forms,
		typography,
		skeleton({
			themes: {
				custom: [
					praxis,
				],
			},
		}),
	],
} satisfies Config;
