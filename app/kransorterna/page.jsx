//Import av funktionen image för att enkelt lägga in bilder
import Image from "next/image";
//Import av funktionen link för att enkelt skapa länkar
import Link from "next/link";

//Funktionen som skickar ut det som man vill ha på sidan
export default function Kransorter() {
   return (
      <main>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-5 p-5">
            <div className="col-span-1 pt-6">
               <Image
                  className="border-8 border-primary rounded-md hover:scale-150"
                  src="/Karta-s.jpeg"
                  alt="Karta över området"
                  width={300}
                  height={300}
               />
               <h1 className="text-3xl text-primary text-center mt-7 md:text-4xl">Lite fakta</h1>
               <p className="font-bold text-xl">Skolor</p>
               <p>
                  I orterna Högsjö, Österåker och Marmorbyn finns skola för årskurs F-6. För övriga orter och högre
                  årskurser går det skolskjuts till närbelägen skola. Samtliga kransorter har förskola på orten.
               </p>
               <p className="font-bold text-xl">Service</p>
               <p>
                  I Högsjö finns det en riktig lanthandel och här kan man även tanka sitt fordon.<br></br>I Läppe och
                  Österåker finns det moderna obemannade butiker i vilka du kommer in med bankid. Dessa obemannade
                  butiker har ett överraskande stort utbud av livsmedel.
               </p>
               <p className="font-bold text-xl">Kommunikationer</p>
               <p>
                  Alla orter trafikeras av{" "}
                  <a className="text-fourth hover:text-hovra" href="https://sormlandstrafiken.se/" target="_blank">
                     Sörmlandstrafikens bussar.
                  </a>
               </p>
            </div>
            <div id="Start" className="col-span-2">
               <h1 className="huvud_rubrik text-center">Kransorter</h1>
               <h2 className="under_rubrik">Baggetorp</h2>
               <p>
                  Baggetorp är det första samhället man kommer till när man åker riksväg 52 från Katrineholm i riktning
                  väster ut. Det är i huvudsak ett villasamhälle med ett fåtal hyresfastigheter i form av radhus. Strax
                  söder om bebyggelsen ligger sjön Viren. Virens välbesökta badplats ligger dock i den lilla byn Viala
                  som man kommer till efter Baggetorp i riktning mot Vingåker. I byn finns en förskola och nybyggnation
                  av bostäder pågår. Buss 730 tar dig till Vingåker eller Katrineholm.
               </p>
               <h2 className="under_rubrik">Högsjö</h2>
               <p>
                  Högsjö är bruksorten som präglas mycket av sin fabrik som är en världsledande tillverkare av
                  pressfiltar för tillverkning av papper och pappersmassa. Här finns också något så ovanligt som en
                  tunnbindare, där du även som privatperson kan köpa dig en stor tunna för lagring av t.ex. vin. På
                  tunnbinderiet finns dessutom gigantiska tunnor av kungligt arv, mycket vackra att beskåda, se mer på{" "}
                  <a className="text-fourth hover:text-hovra" href="https://www.kagge.com/" target="_blank">
                     Thorslundskagge.
                  </a>
                  <br></br>
                  Högsjö ligger vid sjöarna Högsjön och Grävsjön, vid den sistnämnda finns ortens badplats.
               </p>
               <h2 className="under_rubrik" id="Lappe">
                  Läppe
               </h2>
               <Image src="/Läppestrand.jpg" alt="Vy från Läppe över Hjälmaren" width={700} height={300} />
               <p>
                  I Läppe har många sjöutsikt för orten ligger vid den stora sjön Hjälmaren. Samhället har gått från att
                  innehålla många fritidshus till att allt fler blir permanentboende. Här finns en långgrund strand med
                  camping belägen i direkt närhet. På sommaren lever hela orten upp med kafé och restaurang men även
                  övrig tid är föreningslivet aktivt här. Den kooperativa förskolan Trollkojan är mycket omtyckt och har
                  ett trevligt läge med promenadavstånd till stranden. <br></br>Strax före jul 2023 öppnade ett bageri
                  här med östländska influenser. <br></br> Gillar du båtlivet så finns här en liten båthamn. Med egen
                  båt kan man ta sig upp till Mälaren och hela vägen ut till Östersjön.
               </p>
               <h2 className="under_rubrik">Österåker</h2>
               <Image src="/Solrosor.jpg" alt="Bild över fält med solrosor" width={700} height={300} quality={100} />
               <p>
                  Nu är man på den vackra landsbygden omgiven av odlade gärden. På orten finns en friskola för
                  årskurserna F - 6, samt en kommunal förskola. Här finns sjön Öljaren med badplats.
               </p>
               <h2 className="under_rubrik">Marmorbyn</h2>
               <p>
                  Byn med namn efter att man en gång i tiden bröt marmor här. Nu är här ett rofyllt villasamhälle strax
                  utanför Katrineholm vid sjön Kolsnaren. Förskola och delvis nybyggd skola för årskurs F-6 finns här
                  och vacker landsbygd med bussförbindelse till Katrineholm.
               </p>
               <br></br>
               <Link href="#Start">
                  <button className="bg-primary hover:bg-secondary text-white p-4 rounded-md" type="submit">
                     Åter till sidans början
                  </button>
               </Link>
            </div>
         </div>
      </main>
   );
}
