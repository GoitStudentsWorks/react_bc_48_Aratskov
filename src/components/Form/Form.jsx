import s from './Form.module.scss';

export const Form = ({ title, titleBtn, children, onSubmit }) => {
  const handlerSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;

    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    if (!name) return onSubmit({ email, password });
    onSubmit({ name, email, password });
    form.reset();
  };
  return (
    <form className={s.form} onSubmit={handlerSubmit}>
      <b className={s.title}>{title}</b>
      <div className={s.wrap}>
      {children}
      </div>
      <button type="submit" className={s.btn}>
        {titleBtn}
      </button>
    </form>
  );
};
