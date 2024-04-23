import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';

export default defineConfig({
  plugins: [
    reactRefresh(),
    {
      name: 'esbuild',
      setup(build) {
        build.loaders
          .filter((loader) => loader.name === 'jsx')[0]
          .options({
            jsxFactory: 'React.createElement',
            jsxFragment: 'React.Fragment',
          });
      },
    },
  ],
});
