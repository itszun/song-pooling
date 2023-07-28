import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';
import route from './start/route.js'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		alias: {
			$src: "src"
		},
		adapter: adapter(),
		csrf: false,
		files: {
			hooks: {
				server: `src/hooks/laravel-sanctum.ts`
			}
		},
	},
};

export default config;
