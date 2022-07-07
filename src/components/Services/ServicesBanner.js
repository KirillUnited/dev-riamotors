import React, {useState} from 'react'
import {CSSTransition} from 'react-transition-group';
import styles from './Services.module.scss';
import './services-animations.css';
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
    const [showContent, setShowContent] = useState(false);
    const items = serviceBanners.map(({title, subtitle, desc, image}, index) => {
        return (
            <SwiperSlide
                key={index}>
                <div
                    className={(`${styles["banner-item"] || ""} `) + "jet-slider__item sp-slide"}>
                    <div
                        className={(`${styles["banner-img-container"] || ""} `) + "sp-image-container"}>
                        <img
                            className={(`${styles["banner-img"] || ""} `) + "sp-image"}
                            src={image}
                            alt={title}/>
                    </div>
                    <div className={(`${styles["banner-content"] || ""} `) + "jet-slider__content"}>
                        {/*<CSSTransition*/}
                        {/*    in={showContent}*/}
                        {/*    timeout={800}*/}
                        {/*    classNames="services-banner"*/}
                        {/*    mountOnEnter*/}
                        {/*    unmountOnExit*/}
                        {/*>*/}
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
                        {/*</CSSTransition>*/}
                    </div>
                </div>
            </SwiperSlide>
        )
    });

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
                        onAfterInit={() => {
                            console.log('init');
                            setShowContent(true);
                        }}
                        onSlideChangeTransitionStart={() => {
                            console.log('start');
                            setShowContent(false)
                        }}
                        onSlideChangeTransitionEnd={() => setShowContent(true)}
                    >
                        {items}
                    </Swiper>
                </div>
            </div>
        </div>
    )
}
