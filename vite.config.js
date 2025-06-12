import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: "/brothers/", // ←⚠️ 注意這裡一定要跟 GitHub repo 名稱一樣
  plugins: [react()],
});
