import s from './ExpensesListItem.module.css';
import icons from '../../../../assets/icons/sprite.svg';

const ExpensesListItem = ({ item }) => {
  console.log();
  return (
    <>
      <li className={s.list}>
        <ul className={s.colum}>
          <li>
            <ul>
              <li
                style={{
                  color: 'rgba(243, 243, 243, 0.3)',
                  fontSize: '12px',
                  lineHeight: '14px',
                }}
              >
                30.01.2023
              </li>
              <li>{item.name}</li>
            </ul>
          </li>
          <li>{item.prise} UAH</li>
        </ul>
        <ul className={s.colum}>
          <li className={s.categorie} style={{}}>
            {item.categorie}
          </li>
          <li>
            <ul className={s.colum_icons}>
              <li>
                <svg className={s.icon}>
                  <use href={`${icons}#icon-pen`}></use>
                </svg>
              </li>
              <li className={s.iconPos}>
                <svg className={s.icon}>
                  <use href={`${icons}#icon-trash`}></use>
                </svg>
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </>
  );
};

export default ExpensesListItem;
