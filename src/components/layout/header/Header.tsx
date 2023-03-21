import Link from "next/link";
import { useRouter } from "next/router";
import React, { FC } from "react";

import styles from "./Header.module.scss";

interface route {
   id: number;
   label: string;
   url: string;
}

const routes: route[] = [
   { id: 1, label: "Home", url: "/" },
   { id: 2, label: "About-us", url: "/about-us" },
];

const Header: FC = () => {
   const { pathname } = useRouter();

   const renderRoutes = (routes: route[]) => {
      return routes.map(({ id, url, label }) => {
         const clazz = pathname === url ? styles.active : "";

         return (
            <Link href={url} className={clazz} key={id}>
               {label}
            </Link>
         );
      });
   };

   return <header className={styles.header}>{renderRoutes(routes)}</header>;
};

export default Header;
