import manDesktopX from 'assets/img/man_desktop.png';
import manDesktopXx from 'assets/img/man_desktop-2x.png';
import manTabletX from 'assets/img/man_tablet.png';
import manTabletXx from 'assets/img/man_tablet-2x.png';
import manMobileX from 'assets/img/man_mob.png';
import manMobileXx from 'assets/img/man_mob-2x.png';


const HomePage = () => {
  return (
    <>
      <div className='container'>

    <div className="wrapper">
      <div>
        <h1>Planner</h1>
        <p>for joint</p>
        <p>savings for an apartment</p>
      </div>

<picture className="hero__picture">
        <source
          srcSet={`${manDesktopX} 1x, ${manDesktopXx} 2x`}
          media="(min-width: 1280px)"
        />
        <source
          srcSet={`${manTabletX} 1x, ${manTabletXx} 2x`}
          media="(min-width: 768px)"
        />
        <source
          srcSet={`${manMobileX} 1x, ${manMobileXx} 2x`}
          media="(max-width: 767px)"
        />
        <img
          src={manDesktopX}
          alt="logo man"
          className="hero__image"
        />
      </picture>
      </div>
      </div>
    </>
  );
};

export default HomePage;
