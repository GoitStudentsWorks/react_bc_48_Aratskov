import { useEffect } from 'react';
import CategoriesListItem from './CategoriesListItem/CategoriesListItem';
import s from './CategoriesList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  getCategoriesSelector,
  getStatisticsDate,
} from 'redux/Statistics/StatisticsSelectors';
import { getCategories } from 'redux/Statistics/StatisticsOperations';

const CategoriesList = () => {
  const dispatch = useDispatch();
  const categories = useSelector(getCategoriesSelector);
  const date = useSelector(getStatisticsDate);

  useEffect(() => {
    if (categories.length) return;
    if (date.langth > 0) {
      dispatch(getCategories({ month: date[0].month, year: date[0].year }));
    } else {
      dispatch(getCategories({ month: 4, year: 2023 }));
    }
  }, []);

  return (
    <div className={s.style}>
      {!categories.length ? (
        <div className={s.noty}>You have not added any transactions!</div>
      ) : (
        <ul>
          {categories.map(({ category, amount, percentage }) => (
            <CategoriesListItem
              category={category}
              amount={amount}
              percentage={percentage}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default CategoriesList;
