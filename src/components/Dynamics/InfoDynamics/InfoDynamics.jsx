import { useDropzone } from 'react-dropzone';
import { useEffect, useState } from 'react';
import style from './InfoDynamics.module.scss';
import floorPlan from '../../../assets/img/floor_plan-x1.png';

const InfoDynamics = () => {
  const [image] = useState(floorPlan);
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    accept: {
      'image/png': ['.png', '.jpg'],
    },
  });
  // const file = acceptedFiles;
  console.log(acceptedFiles[0]);

  useEffect(() => {
    if (acceptedFiles.length > 0) {
      const formData = new FormData();
      formData.append('image', acceptedFiles[0]);
      console.log(formData);
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
