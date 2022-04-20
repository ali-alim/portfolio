import { NavigationDots, SocialMedia } from "../components";

const AppWrap = (Component, idName, classNames) =>
  function HOC() {
    return (
      <div id={idName} className={`app__container ${classNames}`}>
        {/* <SocialMedia /> */}

        <div className="app__wrapper app__flex">
          <Component />

          <div className="app__copyright">
            <p className="app__p-text">© 2022 ALI M.</p>
            <p className="app__p-text">All rights reserved</p>
          </div>
        </div>
        <NavigationDots active={idName} />
      </div>
    );
  };

export default AppWrap;
