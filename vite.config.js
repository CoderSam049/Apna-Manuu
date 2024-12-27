import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'; // plugin-react lowercase mein hona chahiye

export default defineConfig({
  plugins: [react()], // yeh lowercase mein hona chahiye
  server: {
    port: 3001, // ya jo bhi port aap chahte hain
  },
});
