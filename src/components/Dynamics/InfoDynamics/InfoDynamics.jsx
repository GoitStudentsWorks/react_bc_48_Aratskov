import { useDropzone } from 'react-dropzone';
import { useEffect, useState } from 'react';
import style from './InfoDynamics.module.scss';
import floorPlan from '../../../assets/img/floor_plan-x1.png';
import { useDispatch } from 'react-redux';
import { uploadImage } from 'redux/Dynamics/dinamicsOperation';
import ProgressBar from '../../../components/ProgressBar/ProgressBar';

const InfoDynamics = () => {
  const [image] = useState(floorPlan);
  const dispatch = useDispatch();
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    accept: {
      'image/png': [],
      'image/jpg': [],
    },
  });
  // const file = acceptedFiles;
  console.log(acceptedFiles[0]);

  useEffect(() => {
    if (acceptedFiles.length > 0) {
      const formData = new FormData();
      formData.append('image', acceptedFiles[0]);
      console.log(formData);
      dispatch(uploadImage(formData));
    }
  }, [acceptedFiles]);

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
        <div style={{ width: '200px', height: '8px' }}>
          <ProgressBar planInProcent={55} />
        </div>
      </div>

      <div className={style.picture}>
        <div {...getRootProps({ className: 'dropzone' })}>
          <input {...getInputProps()} />
          <img src={image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default InfoDynamics;
