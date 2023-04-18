import css from './Input.module.css'

const Input = ({ label, value, placeholder,name }) => {
  return (
      <label className={css.label}>
          {label}
      <input
        className={css.input}
        type="text"
        name={name}
        placeholder={placeholder}
        value={value}
      />
    </label>
  );
};

export default Input;
