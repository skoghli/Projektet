//En sida som visas om besökaren sökt på något som inte finns, sidan behöver heta not-found, en autofunktion
import React from "react";
import Image from "next/image";
import Vinter from "./components/vinter-stor.jpg";

const notFound = () => {
   return (
      <main className="p-8 bg-black rounded-md">
         <div className="text-3xl text-red-400 text-center font-extrabold mt-8 mb-8">
            Nämen!! Den här sidan finns egentligen inte.
         </div>
         <Image className="mt-4" src={Vinter} placeholder="blur" alt="Vinterbild, error" />
      </main>
   );
};
export default notFound;
