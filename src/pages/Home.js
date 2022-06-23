import React from 'react';
import { useState } from "react";
import { Navigation, Pagination, Autoplay, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  Header,
  Footer,
  HeaderMain,
  HeaderMenu,
  Modal,
  Form,
  Button
} from "components";
import Section from "layout/Section";

// Import styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const Home = ({ brands = [] }) => {
  const [modalActive, setModalActive] = useState(false);
  const handleModalState = (newValue) => {
    setModalActive(newValue);
  };
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
    <div className="wrapper home page-template page-template-elementor_header_footer page page-id-2 wp-custom-logo wp-embed-responsive no-lightbox oceanwp-theme sidebar-mobile content-full-width content-max-width page-header-disabled has-breadcrumbs elementor-default elementor-template-full-width elementor-kit-10 elementor-page elementor-page-2">
      <Header>
        <HeaderMain handleModal={handleModalState} />
        <HeaderMenu />
        <section className="elementor-section elementor-top-section elementor-element elementor-element-9b1d5a6 elementor-section-boxed elementor-section-height-default elementor-section-height-default">
          <div className="elementor-container elementor-column-gap-default">
            <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-67edb79">
              <div className="elementor-widget-wrap elementor-element-populated">
                <div className="elementor-element elementor-element-0f0b26d carusel-ria-header elementor-skin-carousel elementor-arrows-yes elementor-pagination-type-bullets elementor-pagination-position-outside elementor-widget elementor-widget-media-carousel">
                  <div className="elementor-widget-container">
                    <div className="elementor-swiper">
                      <div className="elementor-main-swiper swiper-container">
                        <Swiper
                          modules={[Navigation, Pagination, Autoplay, A11y]}
                          pagination={{ clickable: true }}
                          autoplay={{
                            delay: 5000,
                          }}
                          spaceBetween={10}
                          speed={500}
                          breakpoints={{
                            320: {
                              slidesPerView: 3,
                              slidesPerGroup: 3
                            },
                            768: {
                              slidesPerView: 7
                            },
                            1024: {
                              slidesPerView: 10
                            }
                          }}
                        >
                          {brands.map((brand) => {
                            return (
                              <SwiperSlide key={brand.id}>
                                <a href="#">
                                  <div className="elementor-carousel-image" style={{ backgroundImage: `url(${brand.logo})` }}>
                                  </div>
                                </a>
                              </SwiperSlide>
                            )
                          })}
                        </Swiper>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </Header>
      <main id="main" className="content site-main" role="main">
        <Section>
          <div className="elementor-element elementor-element-1486273 elementor-widget elementor-widget-jet-slider">
            <div className="elementor-widget-container">
              <div className="elementor-main-swiper swiper-container">
                <Swiper
                    modules={[Navigation, Pagination, Autoplay, A11y]}
                    pagination={{ clickable: true }}
                    navigation={{ clickable: true }}
                    autoplay={{
                      delay: 5000,
                    }}
                    spaceBetween={10}
                    speed={500}
                >
                  {serviceBanners.map(({title, subtitle, desc, image}, index) => {
                    return (
                        <SwiperSlide key={index}>
                          <div className="jet-slider__item sp-slide">
                            <div className="sp-image-container">
                              <img
                                  className="sp-image" src={image}
                                  alt={title}/>
                            </div>
                            <div className="jet-slider__content">
                              <div className="jet-slider__content-item">
                                <div className="jet-slider__content-inner">
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
                                    <Button>
                                      Узнать больше
                                    </Button>
                                  </div>
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
        </Section>
        <Section style={{textAlign: 'center'}}>
          <div className="elementor-element elementor-element-7e4c1d9 elementor-widget elementor-widget-heading">
            <div className="elementor-widget-container">
              <h1 className="elementor-heading-title elementor-size-default">Автосервис
                РиаМоторс</h1>
            </div>
          </div>
          <div className="elementor-element elementor-element-072125e elementor-widget elementor-widget-heading">
            <div className="elementor-widget-container">
              <div className="elementor-heading-title elementor-size-medium">Разрушаем
                старые стереотипы!
              </div>
            </div>
          </div>
          <div className="elementor-element elementor-element-0521175 elementor-widget elementor-widget-text-editor">
            <div className="elementor-widget-container">
              <p>Сегодня&nbsp;<strong>ВАМ НЕ НУЖНО&nbsp;</strong>быть механиком, мастером,
                специалистом по техническому контролю, тратить свое драгоценное
                время на грамотный подбор запчастей. — все это есть у НАС и МЫ это
                делаем профессионально.</p>
              <p>СТО РиаМоторс — комплексный автосервис, готовый решить любую проблему
                с Вашим авто!</p>
            </div>
          </div>
        </Section>
        <Section>

        </Section>
      </main>
      <Footer />
      <Modal active={modalActive} setActive={setModalActive}>
        <div className="elementor elementor-182">
          <div className="elementor-section-wrap">
            <section className="elementor-section elementor-top-section elementor-element elementor-element-2716a41 elementor-section-boxed elementor-section-height-default elementor-section-height-default">
              <div className="elementor-container elementor-column-gap-default">
                <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-d873fe4">
                  <div className="elementor-widget-wrap elementor-element-populated">
                    <div className="elementor-element elementor-element-e743f07 elementor-widget elementor-widget-heading">
                      <div className="elementor-widget-container">
                        <p className="elementor-heading-title elementor-size-large">Запись
                          на ремонт
                        </p>
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-238cec4 elementor-button-align-stretch elementor-widget elementor-widget-form">
                      <div className="elementor-widget-container">
                        <Form />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </Modal>
    </div>
  )
};

export default Home;
