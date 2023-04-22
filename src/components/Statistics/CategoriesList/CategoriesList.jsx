import { useEffect } from 'react';
import CategoriesListItem from './CategoriesListItem/CategoriesListItem';
import s from './CategoriesList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getCategoriesSelector } from 'redux/Statistics/StatisticsSelectors';
import { getCategories } from 'redux/Statistics/StatisticsOperations';

const CategoriesList = () => {
  const dispatch = useDispatch();
  const categories = useSelector(getCategoriesSelector);

  useEffect(() => {
    if (categories.length) return;
    dispatch(getCategories({ month: 2, year: 2023 }));
    // eslint-disable-next-line
  }, []);

  if (!categories.length) {
    return <div>No date</div>;
  }

  return (
    <div className={s.style}>
      <ul>
        {categories.map(({ category, amount, percentage }) => (
          <CategoriesListItem
            category={category}
            amount={amount}
            percentage={percentage}
          />
        ))}
      </ul>
    </div>
  );
};

export default CategoriesList;
