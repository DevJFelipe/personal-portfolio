import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// The page renders after the JS runs, so without a preload the browser only
// asks for the font once React has put text on screen, and the text reflows
// when it arrives.
// Fontsource emits the file with a content hash, so the tag is written after
// bundling. Only the latin subset is preloaded: it covers Spanish and English.
function preloadFonts(pattern) {
  return {
    name: 'preload-fonts',
    apply: 'build',
    transformIndexHtml: {
      order: 'post',
      handler(_html, { bundle }) {
        return Object.keys(bundle ?? {})
          .filter((file) => pattern.test(file))
          .map((file) => ({
            tag: 'link',
            attrs: { rel: 'preload', href: `/${file}`, as: 'font', type: 'font/woff2', crossorigin: true },
            injectTo: 'head',
          }))
      },
    },
  }
}

export default defineConfig({
  plugins: [react(), preloadFonts(/schibsted-grotesk-latin-wght-normal-[\w-]+\.woff2$/)],
  build: {
    target: 'es2022',
    assetsInlineLimit: 4096,
    rolldownOptions: {
      output: {
        // React and the router change far less often than the content, so they
        // get their own file and stay cached across deploys.
        codeSplitting: {
          groups: [{ name: 'react', test: /node_modules[\\/](react|react-dom|react-router|scheduler)[\\/]/ }],
        },
      },
    },
  },
})
