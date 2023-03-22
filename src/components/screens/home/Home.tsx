import { FC } from "react";

import Head from "next/head";
import Image from "next/image";
import { Titillium_Web } from "next/font/google";
import styles from "./Home.module.scss";
import { useRouter } from "next/router";
import Layout from "@/components/layout/Layout";

const Home: FC = () => {
   const { asPath, pathname } = useRouter();

   return (
      <Layout title="Home-page">
         <h1 className={styles.text}>hello world</h1>
      </Layout>
   );
};

export default Home;
