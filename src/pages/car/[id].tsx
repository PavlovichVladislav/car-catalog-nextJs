import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { useRouter } from "next/router";

import { ICarDataSingle } from "@/models/Car";
import CarDetail from "@/components/screens/car-detail/CarDetail";
import { CarService } from "@/services/car.service";
import { ParsedUrlQuery } from "querystring";
import Layout from "@/components/layout/Layout";

const CarPage: NextPage<ICarDataSingle> = ({ car }) => {
   const { push, replace } = useRouter();

   return (
      <Layout title={car.name} description="car">
         Car page
         <button onClick={() => push("/")}>go home</button>
         <button onClick={() => replace("/")}>go home(no way to go back)</button>
         <CarDetail car={car} />
      </Layout>
   );
};

interface Params extends ParsedUrlQuery {
   id: string;
}

export const getStaticPaths: GetStaticPaths<Params> = async () => {
   const cars = await CarService.getAll();

   return {
      paths: cars.map((car) => ({
         params: {
            id: car.id.toString(),
         },
      })),
      fallback: "blocking",
   };
};

export const getStaticProps: GetStaticProps<ICarDataSingle> = async ({ params }) => {
   const car = await CarService.getById(params?.id as string);

   return {
      props: { car },
      revalidate: 60,
   };
};

export default CarPage;
