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

// Import styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const Home = ({ brands = [] }) => {
  const [modalActive, setModalActive] = useState(false);
  const handleModalState = (newValue) => {
    setModalActive(newValue);
  }

  return (
    <div className="home page-template page-template-elementor_header_footer page page-id-2 wp-custom-logo wp-embed-responsive no-lightbox oceanwp-theme sidebar-mobile content-full-width content-max-width page-header-disabled has-breadcrumbs elementor-default elementor-template-full-width elementor-kit-10 elementor-page elementor-page-2">
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
      home
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