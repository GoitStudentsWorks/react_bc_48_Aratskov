import s from './CategoriesListItem.module.css';
const CategoriesListItem = ({ item }) => {
  return (
    <>
      <li className={s.main}>
        <ul className={s.li}>
          <li>{item.categorie}</li>
          <li>{item.cost} UAH</li>
        </ul>

        <div className={s.persent}>
          <p>9%</p>
        </div>
      </li>
    </>
  );
};

export default CategoriesListItem;
