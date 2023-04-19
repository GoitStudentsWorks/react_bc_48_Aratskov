import PropTypes from 'prop-types';
import s from './Modal.module.css';
import { useEffect } from 'react';

export default function Modal({
  show,
  showCloseBtn = true,
  onClose,
  children,
}) {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  return (
    show && (
      <div className={s.backdrop} onClick={onClose}>
        <div
          onClick={e => {
            e.stopPropagation();
          }}
        >
          <div className={s.popup}>
            {showCloseBtn && (
              <button type="button" onClick={onClose} className={s.btnClose}>
                X
              </button>
            )}
            {children}
          </div>
        </div>
      </div>
    )
  );
}

Modal.propTypes = {
  show: PropTypes.bool,
  showCloseBtn: PropTypes.bool,
  onClose: PropTypes.func,
};
