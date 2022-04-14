import React from 'react';

export default function Header({ children }) {
  return (

    <header id="site-header" className="custom-header effect-three clr" data-height={30} itemScope="itemscope" itemType="https://schema.org/WPHeader" role="banner">
      <div id="site-header-inner" className="clr">
        <div data-elementor-type="wp-post" data-elementor-id={8} className="elementor elementor-8" data-elementor-settings="[]">
          <div className="elementor-section-wrap">
            {children}
          </div>
        </div>
      </div>
    </header>

  )
}
