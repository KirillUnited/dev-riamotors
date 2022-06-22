import React, { useState } from 'react';
import Button from 'components/Button/Button';
import Input from 'components/FormFields/Input';

const Form = () => {
  const [formData, setFormData] = useState({
    model: '',
    VIN: '',
    issue: '',
    name: '',
    phone: ''
  });
  const handleChange = (event) => {
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value
      }
    })
  }
  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      await saveFormData();
      alert('Your order was successfully submitted!');
      setFormData({
        model: '',
        VIN: '',
        issue: '',
        name: '',
        phone: ''
      });
    } catch (error) {
      alert(`Registration failed! ${error.message}`);
    }
  };

  async function saveFormData() {
    const response = await fetch('https://fakestoreapi.com/products', {
      method: 'POST',
      body: JSON.stringify(formData)
    })
      .then(res => res.json())
      .then(json => console.log(json));
    if (response.status !== 200) {
      throw new Error(`Request failed: ${response.status}`);
    }
  }

  return (
    <form className="elementor-form" method="post" name="New Form"
      onSubmit={onSubmit}>
      <input type="hidden" name="post_id" defaultValue={182} />
      <input type="hidden" name="form_id" defaultValue="238cec4" />
      <input type="hidden" name="queried_id" defaultValue={2} />
      <div className="elementor-form-fields-wrapper elementor-labels-above">
        <div className="elementor-field-type-text elementor-field-group elementor-column elementor-field-group-name elementor-col-100 elementor-field-required elementor-mark-required">
          <Input label="Модель автомобиля"
            value={formData.model}
            onChange={handleChange}
            size={1} type="text" name="model" id="form-field-name" required="required" aria-required="true" />
        </div>
        <div className="elementor-field-type-text elementor-field-group elementor-column elementor-field-group-field_fd3392e elementor-col-100">
          <Input label="VIN"
            value={formData.VIN}
            onChange={handleChange}
            size={1} type="text" name="VIN" id="form-field-field_fd3392e" />
        </div>
        <div className="elementor-field-type-text elementor-field-group elementor-column elementor-field-group-field_2593d3a elementor-col-100 elementor-field-required elementor-mark-required">
          <Input label="Неисправности в автомобиле"
            value={formData.issue}
            onChange={handleChange}
            size={1} type="text" name="issue" id="form-field-field_2593d3a" required="required" aria-required="true" />
        </div>
        <div className="elementor-field-type-text elementor-field-group elementor-column elementor-field-group-field_1f675b8 elementor-col-100 elementor-field-required elementor-mark-required">
          <Input label="Имя"
            value={formData.name}
            onChange={handleChange}
            size={1} type="text" name="name" id="form-field-field_1f675b8" required="required" aria-required="true" />
        </div>
        <div className="elementor-field-type-text elementor-field-group elementor-column elementor-field-group-field_c1f739f elementor-col-100 elementor-field-required elementor-mark-required">
          <Input label="Телефон"
            value={formData.phone}
            onChange={handleChange}
            size={1} type="text" name="phone" id="form-field-field_c1f739f" required="required" aria-required="true" />
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