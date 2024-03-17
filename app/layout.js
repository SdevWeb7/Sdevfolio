import "./globals.scss";
import { SocialNetwork } from "@/app/components/SocialNetwork";
import { Header } from "@/app/components/Header";
import { Toaster } from "react-hot-toast";


export const metadata = {
  title: "Sdevfolio",
  description: "SdevWeb Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">

      <body>

         <Header />

         <SocialNetwork />

         {children}

         <div className="bg-pattern"></div>

         <div style={{fontSize: '1.5rem'}}>
            <Toaster position={"bottom-right"} />
         </div>

      </body>
    </html>
  );
}