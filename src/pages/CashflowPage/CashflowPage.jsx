import TransactionDataList from 'components/TransactionDataList/TransactionDataList';
import style from './CashflowPage.module.scss';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getCategoryList, getPresevingDate} from 'redux/Cashflow/cashflowOperations';
// import ExpensesLimits from 'components/ExpensesLimits/ExpensesLimits';

import { getCurrentBalance } from 'redux/Auth/authSelectors';

const CashflowPage = () => {
  const dispatch = useDispatch();
  const balance = useSelector(getCurrentBalance)

  useEffect(() => {
    dispatch(getCategoryList());
  },[dispatch]);


  useEffect(() => {
    dispatch(getPresevingDate());
    // eslint-disable-next-line 
  }, [balance]);

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
