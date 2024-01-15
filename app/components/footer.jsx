//Import av funktionen image för att enkelt lägga in bilder
import Image from "next/image";
//Import av funktionen link för att enkelt skapa länkar
import Link from "next/link";
//Import av bild
import Logga from "./Logga.jpg";

//Funktionen som skickar ut det som man vill ha på sidan
export default function footer() {
   return (
      <footer>
         <div className="bg-sixth">
            <div className="max-w-7xl mx-auto ">
               <div className="grid grid-cols-1 text-center md:grid-cols-4 xl:grid-cols-4 gap-3 p-5">
                  <Link href="/">
                     <Image
                        src={Logga}
                        alt="Logga för Liselotte, originell design"
                        width={70}
                        quality={100}
                        placeholder="blur"
                     />
                  </Link>
                  <div>
                     <h2>Kontakt med mig</h2>
                     <p>Liselotte</p>
                     <p>skoghli@outlook.com</p>
                     <p>070-4570928</p>
                  </div>
                  <div className="text-left">
                     <h2>Meny</h2>
                     <ul>
                        <li className="text-blue-200 hover:text-yellow-200">
                           <Link href="/">Hem</Link>
                        </li>
                        <li className="text-blue-200 hover:text-yellow-200">
                           <Link href="/centralorten">Centralorten</Link>
                        </li>
                        <li className="text-blue-200 hover:text-yellow-200">
                           <Link href="/kransorterna">Kransorter</Link>
                        </li>
                     </ul>
                  </div>
                  <div className="text-left">
                     <h2>Länkar</h2>
                     <ul>
                        <li className="text-blue-200 hover:text-yellow-200">
                           <Link href="https://basenberga.se/" target="_blank">
                              Båsenberga Hotell & Konferens
                           </Link>
                        </li>
                        <li className="text-blue-200 hover:text-yellow-200">
                           <Link href="https://www.bslk.se/" target="_blank">
                              Båsenberga slalomklubb
                           </Link>
                        </li>

                        <li className="text-blue-200 hover:text-yellow-200">
                           <Link href="https://www.vingakersgolf.se/" target="_blank">
                              Vingåkers Golf
                           </Link>
                        </li>
                        <li className="text-blue-200 hover:text-yellow-200">
                           <Link href="https://elitserienvolleyboll.se/vingaker/" target="_blank">
                              Vingåkers elitlag i volleyboll
                           </Link>
                        </li>
                        <li className="text-blue-200 hover:text-yellow-200">
                           <Link href="https://www.vingakersif.se/" target="_blank">
                              Vingåkers idrottsförening
                           </Link>
                        </li>

                        <li className="text-blue-200 hover:text-yellow-200">
                           <Link href="http://vingakersok.se/" target="_blank">
                              Vingåkers orienteringsklubb
                           </Link>
                        </li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </footer>
   );
}
