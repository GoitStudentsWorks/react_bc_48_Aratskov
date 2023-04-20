import manDesktopX from 'assets/img/man_desktop.png';
import manDesktopXx from 'assets/img/man_desktop-2x.png';
import manTabletX from 'assets/img/man_tablet.png';
import manTabletXx from 'assets/img/man_tablet-2x.png';
import manMobileX from 'assets/img/man_mob.png';
import manMobileXx from 'assets/img/man_mob-2x.png';
import st from './HomePage.module.scss';

const HomePage = () => {
  return (
    <>
      <div className="container">
        <h1 className={st.titleWrapper}>
          <span className={st.titleBlue}>Planner</span>
          <span className={st.title}> for joint</span>
          <span className={st.text}>savings for an apartment</span>
        </h1>
      </div>
      <picture className={st.pic}>
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
        <img src={manDesktopX} alt="logo man" className={st.image} />
      </picture>
    </>
  );
};

export default HomePage;
