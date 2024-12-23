import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        aboutUs: resolve(__dirname, "aboutus.html"),
        singleteacher: resolve(__dirname, "singleteacher.html"),
        teachers: resolve(__dirname, "teachers.html"),
        singlecourse: resolve(__dirname, "singlecourse.html"),
        reviews: resolve(__dirname, "reviews.html"),
        courses: resolve(__dirname, "courses.html"),
        contactus: resolve(__dirname, "contactus.html"),
        aboutus: resolve(__dirname, "aboutus.html"),
      },
    },
  },
});
