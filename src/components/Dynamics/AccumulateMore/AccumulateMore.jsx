import style from './AccumulateMore.module.scss';
import device from '../../../assets/img/device-2x.png';

const Accumulate = () => {
  return (
    <div className={style.container}>
      <div className={style.text}>
        <p>To add more 1 sq.m for planning, it remains to accumulate</p>
        <p>14 000 &#8372;</p>
      </div>
      <div>
        <img src={device} alt="accumulate" />
      </div>
    </div>
  );
};

export default Accumulate;
