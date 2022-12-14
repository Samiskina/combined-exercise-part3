/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:
      {
        "fraunces": "Fraunces"
      },
      backgroundImage: {
        "primaryBackground": "linear-gradient(270deg,#302f39,#223240 95%);",
        "secondaryBackground": "linear-gradient(90deg,#302f39,#223240);",
        "regularBackground": "url('/regular1.webp'),linear-gradient(180deg,rgba(213,173,143,.3),rgba(213,173,143,.3)),url('/regularBackground.svg');",
        "videoBackground": "url('/bgVideo.mp4);",
        "fluffyBackground": "url('/backgroundImage.webp');",
      },
      colors: {
        "backgroundColor": "#d4ac8e",
        "backgroundButton": "#A85330",
        "buttonText": "#E4DED5",
        "pbackground": "#C47D57"
      },
      backgroundSize: {
        "regularSize": "50px,auto,cover",
        "fluffysize": "50px"
      },
      borderRadius: {
        "8/10": "80%",
        "1/1": "100%",
        "5/10": "50%",
        "6/10": "60%"
      },
      textColor: {
        "primarytext": "#C47D57",
        "secondarytext":"#AC917C"
      },
      opacity:{
        "7/10":"70%"
      }
    },
  },
  plugins: [],
}
