import style from './AccumulateMore.module.scss';
import device from '../../../assets/img/device-2x.png';

const Accumulate = () => {
  return (
    <div className={style.container}>
      <div>
        <p className={style.text}>To add more <span className={style.addSqm}>1 sq.m</span> for planning, it remains to accumulate</p>
        <p className={style.cash}>14 000 &#8372;</p>
      </div>
      <div>
        <img src={device} alt="accumulate" className={style.img} />
      </div>
    </div>
  );
};

export default Accumulate;
