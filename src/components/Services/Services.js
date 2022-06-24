import React, {useState} from 'react';
import styles from './Services.module.scss';
import ServicesCard from "./ServicesCard";

const assets = `${process.env.PUBLIC_URL}/images`;

export default function Services() {
    const [services, setServices] = useState([
        {
            title: 'Замена тормозных дисков',
            image: `${assets}/unnamed-1-2.png`
        },
        {
            title: 'Замена тормозных колодок',
            image: `${assets}/disk-p7z8o3emy9ji75cjct1tiu7qdq8ux6alzxu3e1gge8.png`
        },
        {
            title: 'Шиномонтаж',
            image: `${assets}/1473406559-115959_2.png`
        },
        {
            title: 'Развал-схождение',
            image: `${assets}/86-type.png`
        },
        {
            title: 'Регулировка света фар',
            image: `${assets}/headlights-for-art_1.png`
        },
        {
            title: 'Заправка кондиционера',
            image: `${assets}/unnamed-4.png`
        },
        {
            title: 'Компьютерная диагностика автомобиля',
            image: `${assets}/preview.png`
        },
    ]);

    return (
        <div className={styles.grid}>
            {services.map(({title, image}) => {
                return (
                    <ServicesCard image={image}>
                        <a href="#">{title}</a>
                    </ServicesCard>
                )
            })}
        </div>
    )
};
