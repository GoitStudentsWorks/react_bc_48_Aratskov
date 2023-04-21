import style from './Input.module.scss';

const Input = ({
  id,
  label,
  value,
  placeholder,
  name,
  onChange,
  classNameWrapp = `${style.wrapp}`,
  classNameInput = `${style.input}`,
  classNameLabel = `${style.label}`,
}) => {
  return (
    <div className={classNameWrapp}>
      <input
        id={id}
        className={classNameInput}
        type="text"
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <label className={classNameLabel} htmlFor={name}>
        {label}
      </label>
    </div>
  );
};

export default Input;
