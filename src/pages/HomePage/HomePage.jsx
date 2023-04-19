
const ManPhoto = () =>{
  return(<>
    <picture className="hero__picture">
        <source
          srcSet="assets/img/man_desktop.png 1x, assets/img/man_desktop-2x.png 2x"
          media="(min-width: 1280px)"
        />
        <source
          srcSet="../../assets/img/man_tablet.png 1x, ../../assets/img/man_tablet-2x.png 2x"
          media="(min-width: 768px)"
        />
        <source
          srcSet="../../assets/img/man_mob.png 1x, ../../assets/img/man_mob-2x.png 2x"
          media="(max-width: 767px)"
        />
        <img
          src="../../assets/img/man_desktop.png"
          alt="logo man"
          className="hero__image"
        />
      </picture>
  </>)
}

const HomePage = () => {
  return (
    <>
    <div className="wrapper">
      <div>
        <h1>Planner</h1>
        <p>for joint</p>
        <p>savings for an apartment</p>
      </div>
<ManPhoto />
      </div>
    </>
  );
};

export default HomePage;
