import TransactionDataList from 'components/TransactionDataList/TransactionDataList';
import { useFormik } from 'formik';

const CashflowPage = () => {
  const formik = useFormik({
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
    <form onSubmit={formik.handleSubmit}>
      <TransactionDataList
        onChange={formik.handleChange}
        category={formik.values.category}
        comment={formik.values.comment}
        sum={formik.values.sum}
      />
    </form>
  );
};

export default CashflowPage;
