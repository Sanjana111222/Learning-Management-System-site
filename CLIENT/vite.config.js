import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
		port: 5173,
		proxy: {
			"/api/v1": {
				target: "http://127.0.0.1:5014",
			},
		},
	},
})
