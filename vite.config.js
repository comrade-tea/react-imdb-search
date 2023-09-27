import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import {resolve} from 'path';
import requireTransform from 'vite-plugin-require-transform';


// https://vitejs.dev/config/
export default defineConfig({
    base: "/movieflix/",
    plugins: [
        react(),
        requireTransform({}),
    ],
    resolve: {
        alias: {
            "@": resolve(__dirname, 'src'),
        }
    }
})
