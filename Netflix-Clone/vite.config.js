// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react-swc'
// // import tailwindcss from "@tailwindcss/vite";

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()]
   
// });
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
export default defineConfig({
  plugins: [react()],
  base: "/Netflix-clone/",
  build: {
    outDir: "dist"
  }})