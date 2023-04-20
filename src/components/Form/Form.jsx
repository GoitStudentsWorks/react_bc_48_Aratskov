import s from './Form.module.scss';

export const Form = ({ title, titleBtn, children, onSubmit }) => {
  const handlerSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = {};
    const formData = new FormData(form);
    formData.forEach((value, names) => {
      data[names] = value;
    });
    onSubmit(data);
    form.reset();
  };
  return (
    <form className={s.form} onSubmit={handlerSubmit}>
      <b className={s.title}>{title}</b>
      <div className={s.wrap}>{children}</div>
      <button type="submit" className={s.btn}>
        {titleBtn}
      </button>
    </form>
  );
};
