/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
  ],
  theme: {
    colors: {
      peach: "FAE0D1",
      orange: "CF5917",
      teal: "17CFCF",
    },
    extend: {},
  },
  plugins: [],
};
