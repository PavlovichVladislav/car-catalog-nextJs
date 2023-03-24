import CarItem from "@/components/ui/car/CarItem";
import { ICarDataSingle } from "@/models/Car";
import React, { FC } from "react";

const CarDetail: FC<ICarDataSingle> = ({ car }) => {
   return <CarItem car={car} />;
};

export default CarDetail;
