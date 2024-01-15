//Även här krävs use client för att sidan innehåller interaktivitet
"use client";

//Import av tillfälliga lagringsmöjligheter för api:t
import { useState, useEffect } from "react";

//Import av funktionen image för att enkelt lägga in bilder
import Image from "next/image";

//Funktionen som skickar ut det som man vill ha på sidan
export default function Vingaker() {
   const [showPosts, setshowPosts] = useState();
   //Inhämtar api för att visa vädret, dessvärre funkar inte språkvalet sv - enligt instruktioner i api:ts dokumentation skulle svenska kunna visas
   const apiUrl =
      "https://api.openweathermap.org/data/2.5/weather?lat=59.03178&lon=15.87173&lang=sv&units=metric&appid=20fa8bf0f117447c7cebf65d0c638de8";
   //Skapar en variabel för att visa datan från väderapi:t
   let displayData;
   //Funktion som läser in och skickar ut jsondata från api:t
   async function pullJson() {
      //Variabel som inväntar api:t
      const response = await fetch(apiUrl);
      //Variabel som läser in datat till json
      const responseData = await response.json();
      //Variabel för väderikon hämtad från api:t
      const icon = "http://openweathermap.org/img/w/" + responseData.weather[0].icon + ".png";
      console.log(icon);
      console.log(responseData);
      //Datan loopar genom json-filen och funktionen skapar det som ska visas
      displayData = responseData.weather.map(function (weather) {
         return (
            <p key={weather.id}>
               {responseData.name}
               <hr className="mb-4"></hr>
               {weather.main}
               <img className="size-24" src={icon} alt="Väderikon"></img>
               <hr></hr>
               Temperatur: {responseData.main.temp}
               <br></br>
               Upplevs som: {responseData.main.feels_like}
            </p>
         );
      });
      console.log(responseData);
      setshowPosts(displayData);
   }
   useEffect(() => {
      pullJson();
   }, []);
   return (
      //Här färdigställs det som ska ut på sidan och i den ordning det ska visas, samt en del tailwind-stil
      <main>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-3 p-5">
            <div className="col-span-1">
               <h3 className="font-bold text-2xl">Aktuellt väder</h3>
               {showPosts}
               <h1 className="text-3xl text-primary text-center mt-7 md:text-4xl">Lite fakta</h1>
               <p className="font-bold text-xl">Skolor</p>
               <p>Sävstaskolan årskurs f - 6</p>
               <p>Slottsskolan årskurs f - 6</p>
               <p>Slottsskolan årskurs 7 - 9</p>
               <p>Flertalet förskolor</p>
               <p className="font-bold text-xl">Service</p>
               <p>
                  Vårdcentral, apotek, livsmedelsbutiker, järnvägsstation, VVS-butik/rörmokeri, restauranger,
                  märkesoutlet och ett stort antal företag i olika branscher.
               </p>
               <p className="font-bold text-xl">Kommunikationer</p>
               <p>
                  Tåg till Stockholm och Hallsberg.<br></br>
                  Sörmlandstrafikens bussar går till Katrineholm och till landsbygdsorter runt omkring.
               </p>
            </div>
            <div className="col-span-2 items-center">
               <h1 className="under_rubrik">Bilder från trakten</h1>
               <div className="grid grid-cols-3 grid-flow-row gap-3 p-4 rounded-sm">
                  <div>
                     <Image
                        className="hover:scale-150 hover:rounded-md"
                        src="/Dimma-s.jpg"
                        alt="Dimma över Vingåkersfälten"
                        width={300}
                        height={300}
                     />
                  </div>
                  <div>
                     <Image
                        className="hover:scale-150 hover:rounded-md"
                        src="/Öljaren-s.jpg"
                        alt="Vy över sjön Öljaren"
                        width={300}
                        height={300}
                     />
                  </div>
                  <div>
                     <Image
                        className="hover:scale-150 hover:rounded-md"
                        src="/Fiskeboda-s.jpg"
                        alt="Vy från Fiskeboda camping"
                        width={300}
                        height={300}
                     />
                  </div>
                  <div>
                     <Image
                        className="hover:scale-150 hover:rounded-md"
                        src="/Månsken-s.jpg"
                        alt="Månsken över villatak"
                        width={300}
                        height={300}
                     />
                  </div>
                  <div>
                     <Image
                        className="border-8 border-orange-300 scale-75 hover:scale-150 hover:rounded-md"
                        src="/Soluppgång-s.jpg"
                        alt="Soluppgång vid Sävstagård"
                        width={300}
                        height={300}
                     />
                  </div>
                  <div>
                     <Image
                        className="hover:scale-150 hover:rounded-md"
                        src="/Månskenöverfält-s.jpg"
                        alt="Månsken över Sävstagårdens fält"
                        width={300}
                        height={300}
                     />
                  </div>
                  <div>
                     <Image
                        className="hover:scale-150 hover:rounded-md"
                        src="/Hjortar.jpg"
                        alt="Hjortar"
                        width={300}
                        height={300}
                     />
                  </div>
                  <div>
                     <Image
                        className="hover:scale-150 hover:rounded-md"
                        src="/Ridtur-s.jpg"
                        alt="Fridfull kväll"
                        width={300}
                        height={300}
                     />
                  </div>
                  <div>
                     <Image
                        className="hover:scale-150 hover:rounded-md"
                        src="/Snöregn.jpg"
                        alt="Varmt vatten kastas upp i kall luft"
                        width={300}
                        height={300}
                     />
                  </div>
               </div>
            </div>
         </div>
         <div className="col-span-3 px-10 text-xl">
            <h1 className="huvud_rubrik text-center py-3">Samhället Vingåker</h1>
            <p>
               Vingåker är det största samhället i kommunen och där du hittar det mesta som du behöver. Här finns två
               större livsmedelsbutiker och ett par små med specialiteten mat från fjärran land. Hantverkare av alla de
               slag finns på orten och butiker med allt för den händige. <br></br>Är du hungrig på restaurangmat så
               täcker utbudet de allra flestas smak. Du hittar restauranger med vanlig svensk husmanskost likväl som
               indisk restaurang, thai-restaurang, kolgrill och pizzerior. Vill man äta mer finedining så bokar man bord
               på{" "}
               <a className="text-fourth hover:text-hovra" href="https://basenberga.se/" target="_blank">
                  Båsenberga Hotell & Konferens{" "}
               </a>
               , ett par kilometer från centrum.<br></br>
            </p>
            <h2 className="under_rubrik">Föreningslivet</h2>
            <p>
               Ett bra sätt att få nya vänner är att vara aktiv i någon förening och föreningar finns det gott om,
               framförallt idrottsföreningar.<br></br> Motorsport är populärt och folkrace och cross körs på motorbanan
               Trollåsen utanför samhället. <br></br> Strax utanför Vingåker ligger friluftsområdet Båsenberga med bland
               annat en slalombacke som drivs av en mycket driftig förening. Med schaktmassor från vägarbeten fyllde man
               för ett par år sedan på slalombacken, man gjorde den helt enkelt högre och då fick förstås även liften
               följa med. Klurigt eller hur? <br></br>I friluftsområdet finns även elljusspår samt en 18-håls{" "}
               <a className="text-fourth hover:text-hovra" href="https://www.vingakersgolf.se/" target="_blank">
                  golfbana{" "}
               </a>
               med drivingranch och inne i klubbhuset finns en golfsimulator.<br></br>
               <br></br>En annan förening som lockar många är Vingåkers Ryttarförening, där man kan lära sig rida både
               som knatte och som vuxen. Torsdag till söndag första veckan i juli arrangerar ryttarföreningen en stor
               tävling i hästhoppning som heter Guldsporrarna. Dessa dagar ser man många ekipage med hästkärror och
               hästbussar på våra vägar.<br></br>Vingåker har elitlag i volleyboll och intresset för laget är stort
               bland sportentusiaster. Vid hemmamatcher är åskådarna många i Slottsskolan 7-9s idrottshall med läktare
               längs med ena långsidan. <br></br>I övrigt har vår lilla by även tennishall och utebanor för tennis,
               badhus, padelbanor inomhus, isrinkar, idrottsplats med stora fotbollsplaner och massor av natur. Vid den
               vackra sjön Tisnaren hittar man fina badställen bland annat badplatsen Lyttersta. Vid Tisnaren finns även
               Vingåkers orienteringsklubbs klubbstuga, ännu en mycket aktiv förening.<br></br>
            </p>
         </div>
      </main>
   );
}
