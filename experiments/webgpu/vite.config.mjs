// Allow the dev server to read the modules shared with the main game (repo-root shared/).
import {defineConfig} from 'vite';

export default defineConfig({server: {fs: {allow: ['.', '../../shared']}}});
