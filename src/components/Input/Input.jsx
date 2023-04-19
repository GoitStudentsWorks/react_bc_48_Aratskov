import css from './Input.module.css';

const Input = ({ label, value, placeholder, name }) => {
  return (
    <div className={css.wrapp}>
      <label className={css.label} htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        className={css.input}
        type="text"
        name={name}
        placeholder={placeholder}
        value={value}
      />
    </div>
  );
};

export default Input;
