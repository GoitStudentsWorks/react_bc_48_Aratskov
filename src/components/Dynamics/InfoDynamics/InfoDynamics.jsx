import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import style from './InfoDynamics.module.scss';
import floorPlan from '../../../assets/img/floor_plan-x1.png';
import { uploadImage } from 'redux/Dynamics/dinamicsOperation';

const InfoDynamics = () => {
  const [image, setImage] = useState(floorPlan);
  const formData = new FormData();
  const dispatch = useDispatch();
  const asd = useSelector(state=>state.dinamics);
  console.log("InfoDynamics  asd:", asd)

  formData.append('image', image);

  const handleLoadImg = event => {
    setImage(event.target?.files[0]);
    console.dir(event.target?.files);
  };

  const handleSubmitImage = () => {
    dispatch(uploadImage());
  };

  return (
    <div className={style.containerInfo}>
      <div>
        <p className={style.periodOfAccumulating}>After 4 years 1 month</p>
        <div className={style.accumulatBlock}>
          <p className={style.accumulatText}>
            Accumulated, %: <span className={style.accumulatValue}>28%</span>
          </p>
          <p className={style.accumulatText}>
            Accumulated, UAH:{' '}
            <span className={style.accumulatValue}>60 000 &#8372;</span>
          </p>
          <p className={style.accumulatText}>
            And this: <span className={style.accumulatValue}>22 кв. м</span>
          </p>
        </div>
        <p className={style.accumulatBar}>
          <span>22</span> out of <span>60</span> sq.m accumulated
        </p>
      </div>
      <label htmlFor="" className={style.picture}>
        <img src={image} alt="" />
        <input
          // style={{ visibility: 'hidden' }}
          type="file"
          name="user_img"
          onChange={handleLoadImg}
        />
        <button onClick={handleSubmitImage}>Submit Image</button>
      </label>
    </div>
  );
};

export default InfoDynamics;
