import React, {useState} from 'react';
import {services as data} from "../../data";
import styles from './Services.module.scss';
import ServicesCard from "./ServicesCard";

export default function Services() {
    const [services, setServices] = useState(data);

    return (
        <div className={styles.grid}>
            {services.map(({title, image}, index) => {
                return (
                    <ServicesCard image={image} key={index}>
                        <a href="#">{title}</a>
                    </ServicesCard>
                )
            })}
        </div>
    )
};
