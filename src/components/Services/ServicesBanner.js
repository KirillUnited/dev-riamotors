import React, {useState} from 'react';
import styles from './Services.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import {A11y, Autoplay, Navigation, Pagination} from "swiper";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import Button from "../Button/Button";

export default function ServicesBanner() {
    const assets = `${process.env.PUBLIC_URL}/images`;
    const [serviceBanners, setServiceBanners]=useState([
        {
            title:'Заправка кондиционера',
            subtitle:'35,00 руб.',
            desc: '',
            image: `${assets}/klimat_remont-1024x641.jpg`
        },
        {
            title:'Шиномонтаж',
            subtitle:'42,00 руб.',
            desc: '',
            image: `${assets}/123y.jpg`
        },
        {
            title:'Развал-схождение',
            subtitle:'35,00 руб.',
            desc: '',
            image: `${assets}/shod-razval-compressor-e1526558032921-1024x576.jpg`
        },
        {
            title:'Компьютерная диагностика',
            subtitle:'35,00 руб.',
            desc: '',
            image: `${assets}/diagnostika-avto.jpg`
        },
        {
            title:'Акция при ремонте тормозной системы!',
            subtitle:'',
            desc: 'При\n' +
                '                                      проведении любого ремонта,\n' +
                '                                      связанного с тормозной системой,\n' +
                '                                      проверка на тормозном стенде\n' +
                '                                      производится обязательно и\n' +
                '                                      бесплатно!',
            image: `${assets}/photo_2021-12-03_18-16-12.jpg`
        },
    ]);

    return (
        <div className={(`${styles["banner"] || ""} `) + "elementor-element elementor-element-1486273 elementor-widget elementor-widget-jet-slider"}>
            <div className="elementor-widget-container">
                <div className={(`${styles["banner-slider"] || ""} `) + "elementor-main-swiper swiper-container"}>
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay, A11y]}
                        pagination={{ clickable: true }}
                        navigation={{ clickable: true }}
                        autoplay={{
                            delay: 5000,
                        }}
                        loop={true}
                        speed={500}
                        style={{paddingBottom: '40px'}}
                    >
                        {serviceBanners.map(({title, subtitle, desc, image}, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <div className={(`${styles["banner-item"] || ""} `) + "jet-slider__item sp-slide"}>
                                        <div className={(`${styles["banner-img-container"] || ""} `) + "sp-image-container"}>
                                            <img
                                                className={(`${styles["banner-img"] || ""} `) + "sp-image"} src={image}
                                                alt={title}/>
                                        </div>
                                        <div className={(`${styles["banner-content"] || ""} `) + "jet-slider__content"}>
                                            <div className="jet-slider__content-inner" style={{maxWidth: '75%'}}>
                                                {title && <p className="jet-slider__title">
                                                    {title}
                                                </p>}
                                                {subtitle && <p className="jet-slider__subtitle">
                                                    {subtitle}
                                                </p>}
                                                {desc && <div className="jet-slider__desc">
                                                    {desc}
                                                </div>}
                                                <div className="jet-slider__button-wrapper">
                                                    <Button style={{marginTop: '30px'}} className="jet-slider__button--primary">
                                                        Узнать больше
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                </div>
            </div>
        </div>
    )
}
