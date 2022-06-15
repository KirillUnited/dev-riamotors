import React from 'react';
import Button from 'components/Button/Button';
import Input from 'components/FormFields/Input';

const Form = () => {
  return (
    <form className="elementor-form" method="post" name="New Form">
      <input type="hidden" name="post_id" defaultValue={182} />
      <input type="hidden" name="form_id" defaultValue="238cec4" />
      <input type="hidden" name="queried_id" defaultValue={2} />
      <div className="elementor-form-fields-wrapper elementor-labels-above">
        <div className="elementor-field-type-text elementor-field-group elementor-column elementor-field-group-name elementor-col-100 elementor-field-required elementor-mark-required">
          <Input label="Модель автомобиля" size={1} type="text" name="form_fields[name]" id="form-field-name" required="required" aria-required="true"/>
        </div>
        <div className="elementor-field-type-text elementor-field-group elementor-column elementor-field-group-field_fd3392e elementor-col-100">
          <label htmlFor="form-field-field_fd3392e" className="elementor-field-label">VIN</label>
          <input size={1} type="text" name="form_fields[field_fd3392e]" id="form-field-field_fd3392e" className="elementor-field elementor-size-sm  elementor-field-textual" />
        </div>
        <div className="elementor-field-type-text elementor-field-group elementor-column elementor-field-group-field_2593d3a elementor-col-100 elementor-field-required elementor-mark-required">
          <label htmlFor="form-field-field_2593d3a" className="elementor-field-label">Неисправности в автомобиле</label>
          <input size={1} type="text" name="form_fields[field_2593d3a]" id="form-field-field_2593d3a" className="elementor-field elementor-size-sm  elementor-field-textual" required="required" aria-required="true" />
        </div>
        <div className="elementor-field-type-text elementor-field-group elementor-column elementor-field-group-field_1f675b8 elementor-col-100 elementor-field-required elementor-mark-required">
          <label htmlFor="form-field-field_1f675b8" className="elementor-field-label">Имя</label>
          <input size={1} type="text" name="form_fields[field_1f675b8]" id="form-field-field_1f675b8" className="elementor-field elementor-size-sm  elementor-field-textual" required="required" aria-required="true" />
        </div>
        <div className="elementor-field-type-text elementor-field-group elementor-column elementor-field-group-field_c1f739f elementor-col-100 elementor-field-required elementor-mark-required">
          <label htmlFor="form-field-field_c1f739f" className="elementor-field-label">Телефон</label>
          <input size={1} type="text" name="form_fields[field_c1f739f]" id="form-field-field_c1f739f" className="elementor-field elementor-size-sm  elementor-field-textual" required="required" aria-required="true" />
        </div>
        <div className="elementor-field-type-acceptance elementor-field-group elementor-column elementor-field-group-field_165182a elementor-col-100 elementor-field-required elementor-mark-required">
          <div className="elementor-field-subgroup">
            <span className="elementor-field-option">
              <input type="checkbox" name="form_fields[field_165182a]" id="form-field-field_165182a" className="elementor-field elementor-size-sm  elementor-acceptance-field" required="required" aria-required="true" defaultChecked="checked" />
              <label htmlFor="form-field-field_165182a">Соглашаюсь на обработку персональных данных</label>
            </span>
          </div>
        </div>
        <div className="elementor-field-group elementor-column elementor-field-type-submit elementor-col-100 e-form__buttons">
          <Button type="submit">
            Отправить
          </Button>
        </div>
      </div>
    </form>
  )
}

export default Form