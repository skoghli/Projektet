//Importer av fonter från googlefonts
import { Montserrat } from "next/font/google";
import { Salsa } from "next/font/google";
//Import av den omfattande css-stilmallen
import "./globals.css";

//importer från components
import Navbar from "./components/navbar";
import Footer from "./components/footer";

//Variabler för att enkelt kunna använda fonterna som importerats från googlefonts
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat", display: "swap" });
const salsa = Salsa({ weight: "400", subsets: ["latin"], variable: "--font-salsa", display: "swap" });

//Titel och beskrivning av sidan
export const metadata = {
   title: "Vingåker",
   description: "Information för dig som bor eller tänker flytta till Vingåker",
};
//Variabel för hela sidan som innehåller information om i vilken ordning olika delar ska visas, t.ex. navbar högst upp och footer längst ner
const RootLayout = ({ children }) => {
   return (
      <html lang="en" className={`${montserrat.variable} ${salsa.variable}`}>
         <body>
            <Navbar />
            {children}
            <Footer />
         </body>
      </html>
   );
};
//Export av själva grunden till layouten
export default RootLayout;
