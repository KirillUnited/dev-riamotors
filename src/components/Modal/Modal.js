import React from 'react';
import { CSSTransition } from 'react-transition-group';

// Import styles
import './jet-popup-frontend.css';
import './animations.css';
import styles from './Modal.module.scss';

const Modal = ({ active, setActive, children }) => {
  return (
    <div id="jet-popup-182"
      className={`${styles.modal} ${active ? styles['active'] : ""} jet-popup jet-popup--front-mode jet-popup--animation-fade`}
      onClick={() => setActive(false)}>
      <div className="jet-popup__inner">
        <div className={"jet-popup__overlay " + styles["jet-popup__overlay"]} />
        <div className={"jet-popup__container " + styles["jet-popup__container"]}
          onClick={(e) => e.stopPropagation()}>
          <CSSTransition
            in={active}
            timeout={300}
            classNames="modal"
            unmountOnExit>
            <>
              <div className="jet-popup__container-inner">
                <div
                  onClick={() => setActive(false)}
                  className={`jet-popup__close-button`}
                  style={{ zIndex: 10 }}
                >
                  <i className="fa fa-times" aria-hidden="true" />
                </div>
                <div className="jet-popup__container-content">
                  {children}
                </div>
              </div>
            </>
          </CSSTransition>
        </div>
      </div>
    </div>
  )
};

export default Modal;
