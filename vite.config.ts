import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
    base: '/',
    plugins: [preact()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
            react: 'preact/compat',
            'react-dom': 'preact/compat',
            'react/jsx-runtime': 'preact/jsx-runtime',
        },
    },
})
