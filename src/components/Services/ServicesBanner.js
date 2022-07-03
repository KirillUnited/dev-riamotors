import React, {useState} from 'react';
import styles from './Services.module.scss'
import {serviceBanners as banners} from '../../data';
import {Swiper, SwiperSlide} from 'swiper/react';
import {A11y, Autoplay, Navigation, Pagination} from "swiper";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import Button from "../Button/Button";

export default function ServicesBanner() {
    const [serviceBanners, setServiceBanners] = useState(banners);

    return (
        <div
            className={(`${styles["banner"] || ""} `) + "elementor-element elementor-element-1486273 elementor-widget elementor-widget-jet-slider"}>
            <div className="elementor-widget-container">
                <div className={(`${styles["banner-slider"] || ""} `) + "elementor-main-swiper swiper-container"}>
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay, A11y]}
                        pagination={{clickable: true}}
                        navigation={{clickable: true}}
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
                                        <div
                                            className={(`${styles["banner-img-container"] || ""} `) + "sp-image-container"}>
                                            <img
                                                className={(`${styles["banner-img"] || ""} `) + "sp-image"} src={image}
                                                alt={title}/>
                                        </div>
                                        //TODO: add CSS animation
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
                                                    <Button style={{marginTop: '30px'}}
                                                            className="jet-slider__button--primary">
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
