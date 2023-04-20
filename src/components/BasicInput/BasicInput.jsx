import s from './BasicInput.module.scss';

export const BasicInput = ({ name, value, placeholder, readonly = false }) => {
  return (
    <input
      id={name}
      className={s.input}
      type="text"
      name={name}
      placeholder={placeholder}
      value={value}
      readOnly={readonly}
    />
  );
};
