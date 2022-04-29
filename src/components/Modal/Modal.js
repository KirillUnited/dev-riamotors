import React from 'react';
import './jet-popup-frontend.css';
import styles from './Modal.module.scss';
import Form from 'components/Form/Form';

const Modal = ({ active, setActive }) => {
  return (

    <div id="jet-popup-182"
      className={`${styles.modal} ${active ? styles['active'] : ""} jet-popup jet-popup--front-mode jet-popup--animation-fade`}
      onClick={() => setActive(false)}>
      <div className="jet-popup__inner">
        <div className={"jet-popup__overlay " + styles["jet-popup__overlay"]} />
        <div className={"jet-popup__container " + styles["jet-popup__container"]}
          onClick={(e) => e.stopPropagation()}>
          <div className="jet-popup__container-inner">
            <div className="jet-popup__container-overlay" />
            <div className="jet-popup__container-content">
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
                              <Form/>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
          <div
            onClick={() => setActive(false)}
            className="jet-popup__close-button">
            <i className="fa fa-times" aria-hidden="true" />
          </div>
        </div>
      </div>
    </div>

  )
}

export default Modal