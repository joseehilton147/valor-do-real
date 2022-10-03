import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import legacy from '@vitejs/plugin-legacy'
import vue2 from '@vitejs/plugin-vue2'
import Unocss from 'unocss/vite'
import presetUno from '@unocss/preset-uno'
import presetRemToPx from '@unocss/preset-rem-to-px'
import presetIcons from '@unocss/preset-icons'
import Components from 'unplugin-vue-components/vite'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue2(),
		legacy({
			targets: ['ie >= 11'],
			additionalLegacyPolyfills: ['regenerator-runtime/runtime'],
		}),
		Unocss({ presets: [presetUno(), presetRemToPx(), presetIcons()] }),
		Components(),
	],
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url)),
		},
	},
	server: {
		port: 3000,
	},
})
