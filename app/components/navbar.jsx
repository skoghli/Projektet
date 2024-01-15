//Import av funktionen image för att enkelt lägga in bilder
import Image from "next/image";
//Import av funktionen link för att enkelt skapa länkar
import Link from "next/link";
//Import av bild
import Logga from "./Logga.jpg";

//Funktionen som skickar ut det som man vill ha på sidan
export default function navbar() {
   return (
      <nav class="bg-[url('/Vintergrenar.jpg')]">
         <Link href="/">
            <Image
               className="hover:animate-spin-slow"
               src={Logga}
               alt="Logga för Liselotte, originell design"
               width={70}
               quality={100}
               placeholder="blur"
            />
         </Link>
         <div className="text-xl space-x-2">
            <Link href="/">Hem</Link>
            <Link href="/centralorten">Centralorten</Link>
            <Link href="/kransorterna">Kransorterna</Link>
         </div>
      </nav>
   );
}
