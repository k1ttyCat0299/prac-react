import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vite.dev/config/
export default ({ mode }: { mode: string }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return defineConfig({
    plugins: [react()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src/'),
      },
    },
    server: {
      port: Number(env.VITE_PORT) || 5173,
    },
    define: {
      'process.env': env, // 소스에서는 process.env.SERVER_URL처럼 사용
    },
  });
};
