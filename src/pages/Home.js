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
  Form
} from "components";
import Section from "layout/Section";
import Services from "components/Services/Services";
import ServicesBanner from "components/Services/ServicesBanner";

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
        <Section style={{marginTop: '10px', marginBottom: '10px'}}>
          <ServicesBanner/>
        </Section>
        <Section style={{textAlign: 'center', marginTop: '50px', marginBottom: '50px'}}>
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
          <Services/>
        </Section>
        <Section style={{marginTop: '50px', marginBottom: '50px'}}>
          <div className="elementor-container elementor-column-gap-default">
            <div style={{alignContent: 'center', alignItems: 'center'}}
                className="elementor-column elementor-col-66 elementor-top-column elementor-element elementor-element-29a26eb"
                data-id="29a26eb" data-element_type="column">
              <div className="elementor-widget-wrap elementor-element-populated">
                <div className="elementor-element elementor-element-bf7ed5d elementor-widget elementor-widget-heading"
                     data-id="bf7ed5d" data-element_type="widget" data-widget_type="heading.default">
                  <div className="elementor-widget-container">
                    <h2 className="elementor-heading-title elementor-size-default" style={{color: '#CF2E2E'}}>СТО Patron
                      авто — шаг навстречу к будущему</h2>
                  </div>
                </div>
                <div className="elementor-element elementor-element-6e76a19 elementor-widget elementor-widget-text-editor"
                     data-id="6e76a19" data-element_type="widget" data-widget_type="text-editor.default">
                  <div className="elementor-widget-container">
                    <p>Автосервис РиаМоторс заключил договор с Шате-М о создании
                      мультибрендового автосервиса Patron авто в Минске.</p>
                    <p>Теперь еще больше преимуществ для Вас:</p>
                    <ul>
                      <li>самые выгодные цены на запчасти ;</li>
                      <li>расширенная гарантия (2 года) на 18 брендов автозапчастей;</li>
                      <li>подтвержденный высокий стандарт качества ремонта автомобилей;
                      </li>
                      <li>профессиональная подготовка персонала;</li>
                      <li>Еще больше СКИДОК и СПЕЦИАЛЬНЫХ ПРЕДЛОЖЕНИЙ.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div
                className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-4dc4e3e"
                data-id="4dc4e3e" data-element_type="column">
              <div className="elementor-widget-wrap elementor-element-populated">
                <div className="elementor-element elementor-element-ebf69c2 elementor-widget elementor-widget-image"
                     data-id="ebf69c2" data-element_type="widget" data-widget_type="image.default">
                  <div className="elementor-widget-container">
                    <img width="427" height="600" src="https://riamotors.by/wp-content/uploads/2021/04/Sertifikat-RiaMotors-kart-427x600-1.jpg"
                         className="attachment-large size-large" alt="Автосервис РиаМоторс" loading="lazy"
                         srcSet="https://riamotors.by/wp-content/uploads/2021/04/Sertifikat-RiaMotors-kart-427x600-1.jpg 427w, https://riamotors.by/wp-content/uploads/2021/04/Sertifikat-RiaMotors-kart-427x600-1-214x300.jpg 214w"
                         sizes="(max-width: 427px) 100vw, 427px" title="Автосервис РиаМоторс"
                    style={{width: '250px'}}/></div>
                </div>
              </div>
            </div>
          </div>

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
