import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [],
  build: {
    rollupOptions: { 
      input: { 
        admin: 'src/admin/admin.js',
      },
      output: {
        entryFileNames: 'js/[name].bundle.js',
      },
      external: ['react', 'react-dom', '@decap/cms']

    },
    outDir: 'src/static',
    emptyOutDir: false,
    minify: 'terser',
  },
});

