// import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import style from './InfoDynamics.module.scss';

const InfoDynamics = () => {
// state => state.contacts.items;
  const [image, setImage] = useState(null);
  // const image = useSelector(state => state.dinamics.image)
  // const dispatch = useDispatch();

  // const onImageChange = event => {
  //   if (event.target.files && event.target.files[0]) {
  //     let img = event.target.files[0];
  //     this.setState({
  //       image: URL.createObjectURL(img)
  //     });
  //   }
  // };

  const handleLoadImg = event => {
    if (event.target.files && event.target.files[0]) {
      setImage(URL?.createObjectURL(event.target?.files[0]));
    }
    console.dir(event.target?.files);
  };
console.log(image);
  // function FileUploadSingle() {
  // const [file, setFile] = useState<File>();

  // const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   if (e.target.files) {
  //     setFile(e.target.files[0]);
  //   }
  // };

  // const handleUploadClick = () => {
  //   if (!file) {
  //     return;
  //   }

  return (
    <div className={style.containerInfo}>
      <div>
        <p className={style.periodOfAccumulating}>After 4 years 1 month</p>
        <div className={style.accumulatBlock}>
          <p className={style.accumulatText}>
            Accumulated, %: <span className={style.accumulatValue}>28%</span>
          </p>
          <p className={style.accumulatText}>
            Accumulated, UAH: <span className={style.accumulatValue}>60 000 &#8372;</span>
          </p>
          <p className={style.accumulatText}>
            And this: <span className={style.accumulatValue}>22 кв. м</span>
          </p>
        </div>
          <p className={style.accumulatBar}>
            <span>22</span> out of <span>60</span> sq.m accumulated
          </p>
      </div>
      <div className={style.picture} >
        <input type="file" onClick={handleLoadImg}/>
      </div>
    </div>
  );
};

export default InfoDynamics;
