import PlanInputsList from 'components/PlanInputsList/PlanInputsList';
import { useFormik } from 'formik';
import * as yup from 'yup';

const validation = yup
  .number('It`s must be a number')
  .required('This line is required')
  .positive('It`s must be a positive number')
  .integer('It`s must be a integer');

const initialValues = {
  salary: '',
  passiveIncome: '',
  savings: '',
  cost: '',
  footage: '',
  procent: '',
};

const OwnPlanPage = () => {
  const formik = useFormik({
    initialValues,
    validationSchema: yup.object({
      salary: validation,
      passiveIncome: validation,
      savings: validation,
      cost: validation,
      footage: validation,
      procent: validation,
    }),

    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));

      formik.initialValues = initialValues;
    },
  });
  console.log(formik.errors.salary);
  return (
    <form onSubmit={formik.handleSubmit}>
      <button type="submit">Pre Plan</button>
      <PlanInputsList
        onChange={formik.handleChange}
        salary={formik.values.salary}
        passiveIncome={formik.values.passiveIncome}
        savings={formik.values.savings}
        cost={formik.values.cost}
        footage={formik.values.footage}
        procent={formik.values.procent}
      />
      {formik.submitCount > 0 && formik.errors.salary && (
        <p style={{ color: 'white' }}>{formik.errors.salary}</p>
      )}
    </form>
  );
};

export default OwnPlanPage;
