import React from 'react';

// Import styles
import styles from './Button.module.scss';

const Button = ({children, ...props }) => {
  return (
    <button {...props} className={`elementor-button elementor-size-sm`}>
      <span className="elementor-button-content-wrapper">
        <span className="elementor-button-text">
          {children}
        </span>
      </span>
    </button>
  )
};

export default Button;
