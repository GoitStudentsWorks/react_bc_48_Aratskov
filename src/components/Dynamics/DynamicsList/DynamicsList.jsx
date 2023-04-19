import style from './DynamicsList.module.css';

const DynamicsList = () => {
  return (
    <>
      <ul className={style.list}>
        <li>
          <div className={style.list_block}>
            <p>Income, &#8372;</p>
            <p>600</p>
          </div>
        </li>
        <li>
          <div className={style.list_block}>
            <p>Expenses, &#8372;</p>
            <p>300</p>
          </div>
        </li>
        <li>
          <div className={style.list_block}>
            <p>Accumulated, &#8372;</p>
            <p>300</p>
          </div>
        </li>
        <li>
          <div className={style.list_block}>
            <p>Plan, &#8372;</p>
            <p>450</p>
          </div>
        </li>
        <li>
          <div className={style.list_block}>
            <p>Plan, %</p>
            <p>70%</p>
          </div>
        </li>
      </ul>
    </>
  );
};

export default DynamicsList;
