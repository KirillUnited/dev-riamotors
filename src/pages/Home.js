import React from 'react';
import { useState } from "react";
import {
  Header,
  Footer,
  HeaderMain,
  HeaderMenu,
  HeaderSlider
} from "components";
import Modal from 'components/Modal/Modal';

const Home = ({ brands }) => {
  const [modalActive, setModalActive] = useState(false);
  const handleModalState = (newValue) => {
    setModalActive(newValue);
  }

  return (
    <div className="home page-template page-template-elementor_header_footer page page-id-2 wp-custom-logo wp-embed-responsive no-lightbox oceanwp-theme sidebar-mobile content-full-width content-max-width page-header-disabled has-breadcrumbs elementor-default elementor-template-full-width elementor-kit-10 elementor-page elementor-page-2">
      <Header>
        <HeaderMain handleModal={handleModalState} />
        <HeaderMenu />
        {brands.length && <HeaderSlider brands={brands} />}
      </Header>
      home
      <Footer />
      <Modal active={modalActive} setActive={setModalActive} />
    </div>
  )
};

export default Home;