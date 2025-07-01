import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist", // Thư mục chứa file build
  },
  server: {
    port: 3000, // Cổng chạy local server
    open: true, // Tự động mở trình duyệt
  },
});
