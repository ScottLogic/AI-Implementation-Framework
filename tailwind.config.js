/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './_layouts/**/*.html',
    './_includes/**/*.html',
    './pages/**/*.{md,markdown,html}',
    './*.{md,html}'
  ],
  safelist: [
    // Grid column classes used dynamically in Jekyll templates
    'col-start-1',
    'col-start-2',
    'col-start-3',
    'col-start-4',
    'col-end-2',
    'col-end-3',
    'col-end-4',
    'col-end-5'
  ],
  theme: {
    extend: {
      colors: {
        // TEAL
        "sl-teal-100": "#DFF0F3", // Original Light
        "sl-teal-400": "#44CDD4", // +10% L
        "sl-teal-500": "#2BB3BB", // Original
        "sl-teal-600": "#218C91", // -10% L
        "sl-teal-700": "#176468", // -20% L
        // MAGENTA
        "sl-magenta-100": "#F9EAF1", // Original Light
        "sl-magenta-400": "#E82681",
        "sl-magenta-500": "#C41565", // Original
        "sl-magenta-600": "#981050",
        "sl-magenta-700": "#6A0B37", // -20% L
        // ORANGE
        "sl-orange-100": "#FDEDE4", // Original Light
        "sl-orange-400": "#F3A477",
        "sl-orange-500": "#EF8547", // Original
        "sl-orange-600": "#EB6619",
        "sl-orange-700": "#C05111", // -20% L
        // YELLOW
        "sl-yellow-100": "#FEF9EF", // Original Light
        "sl-yellow-400": "#FACF7F",
        "sl-yellow-500": "#F8BE4F", // Original
        "sl-yellow-600": "#F6AA1D",
        "sl-yellow-700": "#D88F09", // -20% L
        // GREEN
        "sl-green-100": "#F2FAEF", // Original Light
        "sl-green-400": "#9ED284",
        "sl-green-500": "#7FC45F", // Original
        "sl-green-600": "#65AF41",
        "sl-green-700": "#508A33", // -20% L
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}