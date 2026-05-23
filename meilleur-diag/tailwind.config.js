/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './app/**/*.{js,ts,jsx,tsx,mdx}',
      './components/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
      extend: {
        fontFamily: {
          // Utilisable via className="font-syne" ou className="font-inter"
          syne:  ['var(--font-syne)', 'system-ui', 'sans-serif'],
          inter: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        },
      },
    plugins: [],
  }
}