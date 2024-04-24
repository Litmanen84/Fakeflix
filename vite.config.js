import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-refresh';
// import assets from 'vite-plugin-assets'; 

export default defineConfig({
  base: '/',
  plugins: [
    react(),
    // assets({
    //   include: ['**/*.+(png|jpg|jpeg|gif|svg)'],
    // }),
    // {
    //   name: 'esbuild',
    //   setup(build) {
    //     build.loaders
    //       .filter((loader) => loader.name === 'jsx')[0]
    //       .options({
    //         jsxFactory: 'React.createElement',
    //         jsxFragment: 'React.Fragment',
    //       });
    //   },
    // },
  ],
});

