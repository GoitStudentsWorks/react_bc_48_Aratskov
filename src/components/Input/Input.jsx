import css from './Input.module.css';

const Input = ({ id,label, value, placeholder, name, onChange }) => {
  return (
    <div className={css.wrapp}>
      <label className={css.label} htmlFor={name}>
        {label}
      </label>
      <input
        id={id}
        className={css.input}
        type="text"
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
