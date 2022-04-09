import React from 'react';

const HeaderSlider = ({ brands }) => {
  return (
    <section className="elementor-section elementor-top-section elementor-element elementor-element-9b1d5a6 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="9b1d5a6" data-element_type="section" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
      <div className="elementor-container elementor-column-gap-default">
        <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-67edb79" data-id="67edb79" data-element_type="column">
          <div className="elementor-widget-wrap elementor-element-populated">
            <div className="elementor-element elementor-element-0f0b26d carusel-ria-header elementor-skin-carousel elementor-arrows-yes elementor-pagination-type-bullets elementor-pagination-position-outside elementor-widget elementor-widget-media-carousel" data-id="0f0b26d" data-element_type="widget" data-settings="{&quot;slides_per_view&quot;:&quot;10&quot;,&quot;slides_per_view_tablet&quot;:&quot;7&quot;,&quot;slides_per_view_mobile&quot;:&quot;5&quot;,&quot;slides_to_scroll&quot;:&quot;3&quot;,&quot;slides_to_scroll_tablet&quot;:&quot;3&quot;,&quot;slides_to_scroll_mobile&quot;:&quot;3&quot;,&quot;skin&quot;:&quot;carousel&quot;,&quot;effect&quot;:&quot;slide&quot;,&quot;show_arrows&quot;:&quot;yes&quot;,&quot;pagination&quot;:&quot;bullets&quot;,&quot;speed&quot;:500,&quot;autoplay&quot;:&quot;yes&quot;,&quot;autoplay_speed&quot;:5000,&quot;pause_on_hover&quot;:&quot;yes&quot;,&quot;pause_on_interaction&quot;:&quot;yes&quot;,&quot;space_between&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:10,&quot;sizes&quot;:[]},&quot;space_between_tablet&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:10,&quot;sizes&quot;:[]},&quot;space_between_mobile&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:10,&quot;sizes&quot;:[]}}" data-widget_type="media-carousel.default">
              <div className="elementor-widget-container">
                <div className="elementor-swiper">
                  <div className="elementor-main-swiper swiper-container">
                    <div className="swiper-wrapper">

                      {brands.map((brand) => {
                        return (
                          <div className="swiper-slide" key={brand.id}>
                            <a href="#">
                              <div className="elementor-carousel-image" style={{ backgroundImage: `url(${brand.logo})` }}>
                              </div>
                            </a>
                          </div>
                        )
                      })}

                    </div>
                    <div className="swiper-pagination" />
                    <div className="elementor-swiper-button elementor-swiper-button-prev">
                      <i className="eicon-chevron-left" aria-hidden="true" />
                      <span className="elementor-screen-only">Previous</span>
                    </div>
                    <div className="elementor-swiper-button elementor-swiper-button-next">
                      <i className="eicon-chevron-right" aria-hidden="true" />
                      <span className="elementor-screen-only">Next</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeaderSlider