//use client krävs när en sida har någon interaktivitet, allt går i standard som serverside så tillägget måste göras för clientside
"use client";
//Import för att kunna lagra datat längre ner från api:t
import { useState, useEffect } from "react";
//Import av funktionen image som gör det enkelt att lägga in sina bilder
import Image from "next/image";
//Import av bilder från mappen components
import Vingaker from "./components/Vingaker.jpg";
import Vinter from "./components/vinter-stor.jpg";
import Vinterpark from "./components/Vinterpark-s.jpg";

//Här skapas själva funktionen som sedan skickas ut - exporteras så att innehållet kan ses
export default function Home() {
   const [showPosts, setshowPosts] = useState([]);
   const [befolkning, setBefolkning] = useState();
   const [artal, setArtal] = useState();
   //Hämtar in api:t från SCB
   const apiUrl =
      "https://corsproxy.io/?https://api.scb.se/OV0104/v1/doris/sv/ssd/START/BE/BE0101/BE0101A/FolkmangdNov";
   //Fångar api:t med funktionen post för att kunna skicka med information som krävs i just detta api
   useEffect(() => {
      console.log("hämtar");
      fetch(apiUrl, {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify({
            //Här kommer POST-frågan som behöver skickas med för att få ut den specifika informationen
            query: [
               {
                  code: "Region",
                  selection: {
                     filter: "vs:RegionKommun07",
                     values: ["0428"],
                  },
               },
               {
                  code: "Alder",
                  selection: {
                     filter: "vs:ÅlderTotA",
                     values: [],
                  },
               },
               {
                  code: "Kon",
                  selection: {
                     filter: "item",
                     values: ["1", "2"],
                  },
               },
               {
                  code: "Tid",
                  selection: {
                     filter: "item",
                     values: ["2023"],
                  },
               },
            ],
            response: {
               format: "json",
            },
         }),
      })
         //Svaret läggs in i json
         .then((response) => response.json())
         .then((data) => {
            console.log(data.data);
            //Här skapas två variabler, en för var del av det som ska kunna visas
            let berakna = 0;
            let artal;
            //En loop som söker igenom arrayen från api:t och hämtar värdena som efterfrågas
            data.data.forEach((element) => {
               console.log(element);
               berakna += parseInt(element.values);
               artal = element.key[2];
               console.log(artal);
            });
            //Här sparas värden ner som inhämtats
            setBefolkning(berakna);
            setshowPosts(data.data);
            setArtal(artal);
         });
   }, []);

   return (
      //Här kommer koden för det som verkligen ska ut på sidan och dess ordning, i den större p-tagen finns informationen från api:t inlagt
      <main>
         <Image src={Vingaker} alt="Logga för Vingåker" />
         <Image className="mt-4 rounded-full" src={Vinter} alt="Vinterbild" />
         <h1 className="huvud_rubrik text-center">Beläget i västra Sörmland</h1>
         <p className="font-bold text-xl mt-4 text-third">
            Kommunen i kanten av vackra Sörmland med gräns mot både Närke och Östergötland.<br></br> Bor du här? Eller
            ska du flytta hit? Eller funderar du på att flytta hit? <br></br>Nu ska du få veta en del av vad som finns i
            Vingåker. Kom och upptäck mer på plats!
         </p>
         <div className="grid grid-cols-1 text-xl my-6 md:grid-cols-2">
            <p>
               Här bor man om man vill ha lugnt och tyst på natten, om man vill ha tillgång till föreningsliv och natur
               med sjöar och fält. Säger man att man ska åka till stan här så är det Katrineholm man åker till, 2,5 mil
               från centrala Vingåker. Här har man lika långt till Örebro som till Norrköping och Eskilstuna, ca en
               timme med bil. Stockholm kommer man lätt till med tåg på en timme och tjugo minuter. Här hamnar man inte
               i köer, här ser man mycket vilda djur framförallt hjortar. Vill man åka till ett köpcentrum åker man till
               Marieberg strax innan Örebro, men det mesta hittar man på plats. Vår sörmländska kommun är liten, i alla
               fall om man ser till invånarantal, enligt SCBs statistik var vi {befolkning} boende i kommunen i november{" "}
               {artal} . Vi har gott om yta. Det finns flera samhällen eller om man vill byar inom kommunen. <br></br> I
               kommunen vimlar det av företag allt från jordbruk, butiker, tryckerier med mera till en större fabrik i
               Högsjö där det tillverkas mattor till tryckindustrin.
               <br></br> Är du kanske en föreningsmänniska? Då har du kommit rätt för här finns föreningar av allehanda
               slag.
            </p>
            <Image className="rounded-full mt-4" src={Vinterpark} alt="Vinterpark" />
         </div>
         <div className="hidden md:inline-flex mx-8">
            <Image src="/Kartbild.jpeg" width={1000} height={400} alt="Karta"></Image>
         </div>
      </main>
   );
}
