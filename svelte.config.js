import adapter from '@sveltejs/adapter-cloudflare';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		adapter: adapter(),
		// target: '#svelte',
		vite: {
			optimizeDeps: {
			  include: ["fastq"]
			}
		  }
	}
};

export default config;
