import TransactionDataList from 'components/TransactionDataList/TransactionDataList';
import { useFormik } from 'formik';
import style from './CashflowPage.module.scss';

import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getCategoryList } from 'redux/Cashflow/cashflowOperations';
import ExpensesLimits from 'components/ExpensesLimits/ExpensesLimits';

const CashflowPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategoryList());
  });

  useFormik({
    initialValues: {
      category: '',
      comment: '',
      sum: '',
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    //  <> <form onSubmit={formik.handleSubmit}>
    //     <TransactionDataList
    //       onChange={formik.handleChange}
    //       category={formik.values.category}
    //       comment={formik.values.comment}
    //       sum={formik.values.sum}
    //     />
    //   </form>

    <div className="container">
      <div className={style.wrapper}>
        <TransactionDataList />
        <ExpensesLimits />
      </div>
    </div>
  );
};

export default CashflowPage;
