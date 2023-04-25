const AppWrap = (Component, idName, classNames) =>
  function HOC() {
    return (
      <div id={idName} className={`app__container ${classNames}`}>
        <div className="app__wrapper app__flex">
          <Component />
          {idName !== "skills" ? (
            <div className="app__copyright">
              <p className="app__p-text">© 2023 ALI MAMEDOV</p>
              <p className="app__p-text">All rights reserved</p>
            </div>
          ) : null}
        </div>
      </div>
    );
  };

export default AppWrap;
