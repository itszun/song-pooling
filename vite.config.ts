import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import { resolve } from "path";

export default defineConfig({
	plugins: [sveltekit()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	},
	
	resolve: {
		alias: {
			$src: resolve('./src'),
			$stores: resolve('./src/stores'),
			$assets: resolve('./src/assets'),
			$icon: resolve('./node_modules/svelte-bootstrap-icons/lib')
		}
	}
});
