import { FC } from "react";

import Layout from "@/components/layout/Layout";

import styles from "./Home.module.scss";
import { ICarData } from "@/models/Car";
import CarItem from "@/components/ui/car/CarItem";

const Home: FC<ICarData> = ({cars}) => {
   return (
      <Layout title="Home-page">
         <h1 className={styles.text}>hello world</h1>

         {cars.length ? cars.map(car => <CarItem key={car.id} car={car}/> ) : 'Cars not found'}
      </Layout>
   );
};

export default Home;
