import Link from "next/link";
import { useRouter } from "next/router";
import React, { FC } from "react";

import styles from "./Header.module.css";

const routes = ["/", "/about-us"];

const Header: FC = () => {
   const { pathname } = useRouter();

   const renderRoutes = (routes: string[]) => {
      return routes.map((route) => {
         const clazz = pathname === route ? styles.active : "";

         return (
            <Link href={route} className={clazz}>
               Home
            </Link>
         );
      });
   };

   return <header className={styles.header}>{renderRoutes(routes)}</header>;
};

export default Header;
