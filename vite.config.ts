import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	base: '/theoengelaere.github.io/',
	server: {
		port: 8000,
	},
});
