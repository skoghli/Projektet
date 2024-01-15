/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
      "./pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
   ],
   theme: {
      extend: {
         colors: {
            //Lagt in en egen färgpalett
            primary: "#8A0442",
            secondary: "#D54A76",
            third: "#001D3D",
            fourth: "#565AB1",
            fifth: "#FFEED5",
            sixth: "#968D7E",
            hovra: "#0C15BA",
         },
         dropShadow: {
            sm: "0 0.8px 0.8px #6B7380",
            md: "0 2px 2px #6B7380",
         },
         //Lagt in en egen variant, egen hastighet av animationen spin-slow
         animation: { "spin-slow": "spin 10s" },
      },
   },
   plugins: [],
};
