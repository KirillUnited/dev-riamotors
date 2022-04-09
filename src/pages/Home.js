import React from 'react';
import { Header, Footer } from "components";

const Home = ({ brands }) => {
  return (
    <div className="home page-template page-template-elementor_header_footer page page-id-2 wp-custom-logo wp-embed-responsive no-lightbox oceanwp-theme sidebar-mobile content-full-width content-max-width page-header-disabled has-breadcrumbs elementor-default elementor-template-full-width elementor-kit-10 elementor-page elementor-page-2">
      <Header brands={brands} />
      home
      <Footer />
    </div>
  )
};

export default Home;