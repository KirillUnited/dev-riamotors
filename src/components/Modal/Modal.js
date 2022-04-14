import Button from 'components/Button/Button';
import React from 'react';
import './jet-popup-frontend.css';
import styles from './Modal.module.scss';

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
              <div data-elementor-type="jet-popup" data-elementor-id={182} className="elementor elementor-182" data-elementor-settings="[]">
                <div className="elementor-section-wrap">
                  <section className="elementor-section elementor-top-section elementor-element elementor-element-2716a41 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="2716a41" data-element_type="section">
                    <div className="elementor-container elementor-column-gap-default">
                      <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-d873fe4" data-id="d873fe4" data-element_type="column">
                        <div className="elementor-widget-wrap elementor-element-populated">
                          <div className="elementor-element elementor-element-e743f07 elementor-widget elementor-widget-heading" data-id="e743f07" data-element_type="widget" data-widget_type="heading.default">
                            <div className="elementor-widget-container">
                              <p className="elementor-heading-title elementor-size-large">Запись
                                на ремонт
                              </p>
                            </div>
                          </div>
                          <div className="elementor-element elementor-element-238cec4 elementor-button-align-stretch elementor-widget elementor-widget-form" data-id="238cec4" data-element_type="widget" data-settings="{&quot;step_next_label&quot;:&quot;Next&quot;,&quot;step_previous_label&quot;:&quot;Previous&quot;,&quot;button_width&quot;:&quot;100&quot;,&quot;step_type&quot;:&quot;number_text&quot;,&quot;step_icon_shape&quot;:&quot;circle&quot;}" data-widget_type="form.default">
                            <div className="elementor-widget-container">
                              <form className="elementor-form" method="post" name="New Form">
                                <input type="hidden" name="post_id" defaultValue={182} />
                                <input type="hidden" name="form_id" defaultValue="238cec4" />
                                <input type="hidden" name="queried_id" defaultValue={2} />
                                <div className="elementor-form-fields-wrapper elementor-labels-above">
                                  <div className="elementor-field-type-text elementor-field-group elementor-column elementor-field-group-name elementor-col-100 elementor-field-required elementor-mark-required">
                                    <label htmlFor="form-field-name" className="elementor-field-label">Модель
                                      автомобиля</label><input size={1} type="text" name="form_fields[name]" id="form-field-name" className="elementor-field elementor-size-sm  elementor-field-textual" required="required" aria-required="true" /> </div>
                                  <div className="elementor-field-type-text elementor-field-group elementor-column elementor-field-group-field_fd3392e elementor-col-100">
                                    <label htmlFor="form-field-field_fd3392e" className="elementor-field-label">VIN</label><input size={1} type="text" name="form_fields[field_fd3392e]" id="form-field-field_fd3392e" className="elementor-field elementor-size-sm  elementor-field-textual" />
                                  </div>
                                  <div className="elementor-field-type-text elementor-field-group elementor-column elementor-field-group-field_2593d3a elementor-col-100 elementor-field-required elementor-mark-required">
                                    <label htmlFor="form-field-field_2593d3a" className="elementor-field-label">Неисправности в
                                      автомобиле</label><input size={1} type="text" name="form_fields[field_2593d3a]" id="form-field-field_2593d3a" className="elementor-field elementor-size-sm  elementor-field-textual" required="required" aria-required="true" /> </div>
                                  <div className="elementor-field-type-text elementor-field-group elementor-column elementor-field-group-field_1f675b8 elementor-col-100 elementor-field-required elementor-mark-required">
                                    <label htmlFor="form-field-field_1f675b8" className="elementor-field-label">Имя</label><input size={1} type="text" name="form_fields[field_1f675b8]" id="form-field-field_1f675b8" className="elementor-field elementor-size-sm  elementor-field-textual" required="required" aria-required="true" /> </div>
                                  <div className="elementor-field-type-text elementor-field-group elementor-column elementor-field-group-field_c1f739f elementor-col-100 elementor-field-required elementor-mark-required">
                                    <label htmlFor="form-field-field_c1f739f" className="elementor-field-label">Телефон</label><input size={1} type="text" name="form_fields[field_c1f739f]" id="form-field-field_c1f739f" className="elementor-field elementor-size-sm  elementor-field-textual" required="required" aria-required="true" /> </div>
                                  <div className="elementor-field-type-acceptance elementor-field-group elementor-column elementor-field-group-field_165182a elementor-col-100 elementor-field-required elementor-mark-required">
                                    <div className="elementor-field-subgroup"><span className="elementor-field-option"><input type="checkbox" name="form_fields[field_165182a]" id="form-field-field_165182a" className="elementor-field elementor-size-sm  elementor-acceptance-field" required="required" aria-required="true" defaultChecked="checked" /> <label htmlFor="form-field-field_165182a">Соглашаюсь
                                      на обработку персональных
                                      данных</label></span></div>
                                  </div>
                                  <div className="elementor-field-group elementor-column elementor-field-type-submit elementor-col-100 e-form__buttons">
                                    <Button type="submit">
                                      Отправить
                                    </Button>
                                  </div>
                                </div>
                              </form>
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