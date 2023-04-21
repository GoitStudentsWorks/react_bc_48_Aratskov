// import PlanInputsList from 'components/PlanInputsList/PlanInputsList';
import { Button } from 'components/Button/Button';
import Input from 'components/Input/Input';

import { useFormik } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { postPlanPre } from 'redux/PersonalPlan/personalPlanOperationg';
import style from './OwnPlanPage.module.scss'

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
  const dispatch = useDispatch();

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
      dispatch(postPlanPre(values));
    },
  });

  return (
    <div className={style.container}>
       <form onSubmit={formik.handleSubmit}> 
     
      <ul className={style.list}>
        <li className={style.item}>
          <Input
            id="salary"
            name="salary"
            value={formik.values.salary}
            placeholder="Enter text"
            label="1. RFP of both spouses,"
            onChange={formik.handleChange}
          />
          {formik.submitCount > 0 && formik.errors.salary && (
            <p style={{ color: 'white' }}>{formik.errors.salary}</p>
          )}
        </li>
        <li className={style.item}>
          <Input
            id="passiveIncome"
            name="passiveIncome"
            value={formik.values.passiveIncome}
            placeholder="Enter text"
            label="2. Passive income, months,"
            onChange={formik.handleChange}
          />
          {formik.submitCount > 0 && formik.errors.passiveIncome && (
            <p style={{ color: 'white' }}>{formik.errors.passiveIncome}</p>
          )}
        </li>
        <li className={style.item}>
          <Input
            id="savings"
            name="savings"
            value={formik.values.savings}
            placeholder="Enter text"
            label="3. Savings,"
            onChange={formik.handleChange}
          />
          {formik.submitCount > 0 && formik.errors.savings && (
            <p style={{ color: 'white' }}>{formik.errors.savings}</p>
          )}
        </li>
        <li className={style.item}>
          <Input
            id="cost"
            name="cost"
            value={formik.values.cost}
            placeholder="Enter text"
            label="4. Specify the cost of your future apartment,"
            onChange={formik.handleChange}
          />
          {formik.submitCount > 0 && formik.errors.cost && (
            <p style={{ color: 'white' }}>{formik.errors.cost}</p>
          )}
        </li>
        <li className={style.item}>
          <Input
            id="footage"
            name="footage"
            value={formik.values.footage}
            placeholder="Enter text"
            label="5. Specify the number of sq.m. of your future apartment"
            onChange={formik.handleChange}
          />
          {formik.submitCount > 0 && formik.errors.footage && (
            <p style={{ color: 'white' }}>{formik.errors.footage}</p>
          )}
        </li>
        <li className={style.item}>
          <Input
            id="procent"
            name="procent"
            value={formik.values.procent}
            placeholder="Enter text"
            label="6. Accumulation, %"
            onChange={formik.handleChange}
          />
          {formik.submitCount > 0 && formik.errors.procent && (
            <p style={{ color: 'white' }}>{formik.errors.procent}</p>
          )}
          <p className={style.description}>
            Specify the percentage that you would like to accumulate per month
            from the total amount of income and you will see when you reach the
            goal
          </p>
        </li>
        </ul>
         <Button
        nativeProps={{ style: { width: 150, marginBottom: 20 } }}
        type="submit"
      >
        Pre Plan
      </Button>
    </form>
   </div>
  );
};

//  <PlanInputsList
//         onChange={formik.handleChange}
//         salary={formik.values.salary}
//         passiveIncome={formik.values.passiveIncome}
//         savings={formik.values.savings}
//         cost={formik.values.cost}
//         footage={formik.values.footage}
//         procent={formik.values.procent}
//       />

export default OwnPlanPage;
