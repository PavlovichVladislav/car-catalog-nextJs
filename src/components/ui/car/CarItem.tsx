import React, { FC } from 'react';
import Image from "next/image";
import Link from 'next/link';

import styles from './CarItem.module.scss';
import { ICarDataSingle } from '@/models/car';



const CarItem: FC<ICarDataSingle> = ({car}) => {
    return (
        <div className={styles.item}>
            <Image src={car.image} alt={car.name} width={260} height={280}/>
            <h2>{car.name}</h2>
            <small>{car.price}</small>
            <br/>
            <Link href={`/car/${car.id}`}>Read more</Link>
        </div>
    );
};

export default CarItem;