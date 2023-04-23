import TransactionDataList from 'components/TransactionDataList/TransactionDataList';
import style from './CashflowPage.module.scss';

import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getCategoryList, getPresevingDate} from 'redux/Cashflow/cashflowOperations';
// import ExpensesLimits from 'components/ExpensesLimits/ExpensesLimits';

const CashflowPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategoryList());
  },[dispatch]);

  
  useEffect(() => {
    dispatch(getPresevingDate());
    console.log('jiji')
  }, [dispatch]);

  return (
   

    <div className="container">
      <div className={style.wrapper}>
        <TransactionDataList />
        {/* <ExpensesLimits /> */}
      </div>
    </div>
  );
};

export default CashflowPage;
