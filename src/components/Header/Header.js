import React from 'react';
import HeaderMain from './HeaderMain';
import HeaderMenu from './HeaderMenu';
import HeaderSlider from './HeaderSlider';

export default function Header({ brands }) {
  return (

    <header id="site-header" className="custom-header effect-three clr" data-height={30} itemScope="itemscope" itemType="https://schema.org/WPHeader" role="banner">
      <div id="site-header-inner" className="clr">
        <div data-elementor-type="wp-post" data-elementor-id={8} className="elementor elementor-8" data-elementor-settings="[]">
          <div className="elementor-section-wrap">
            <HeaderMain />
            <HeaderMenu />
            <HeaderSlider brands={brands} />
          </div>
        </div>
      </div>
    </header>

  )
}
