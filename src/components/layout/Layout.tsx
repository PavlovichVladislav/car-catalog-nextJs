import dynamic from "next/dynamic";
import { Titillium_Web } from "next/font/google";
import { FC, PropsWithChildren } from "react";
import Meta from "../seo/Meta";
import { IMeta } from "../seo/meta.interface";
import Header from "./header/Header";

const DynamicFooter = dynamic(() => import("./footer/Footer"), {
   ssr: false,
});

const titillium = Titillium_Web({
   weight: ["300", "400", "600", "700"],
   subsets: ["latin"],
   variable: "--titillium",
});

const Layout: FC<PropsWithChildren<IMeta>> = ({ children, title, description }) => {
   return (
      <Meta title={title} description={description}>
         <div className={titillium.className} style={{ textAlign: "center", color: "#fff" }}>
            <Header />
            <main>{children}</main>
            <DynamicFooter />
         </div>
      </Meta>
   );
};

export default Layout;
