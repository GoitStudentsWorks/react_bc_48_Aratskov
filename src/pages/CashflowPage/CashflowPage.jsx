import TransactionDataList from 'components/TransactionDataList/TransactionDataList';
import { useFormik } from 'formik';

import { Button } from 'components/Button/Button';
 import { usePopup } from 'hooks/usePopup';
import { ModalAddIncome } from 'components/ModalAddIncome/ModalAddIncome';
import { ModalAddBalance } from 'components/ModalAddBalance/ModalAddBalance';

const CashflowPage = () => {
   const { show, showPopup, closePopup } = usePopup();
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

     <div>
      <TransactionDataList />
      <Button
        onClick={showPopup}
        nativeProps={{ style: { width: 150, marginBottom: 20 } }}
      >
        Add income
      </Button>
      <ModalAddIncome show={show} onClose={closePopup} />

      <Button onClick={showPopup} nativeProps={{ style: { width: 150 } }}>
        Add balance
      </Button>
      <ModalAddBalance show={show} onClose={closePopup} />
    </div> 
  );
};

export default CashflowPage;
