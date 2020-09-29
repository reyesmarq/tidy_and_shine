import React from 'react';

let style: React.CSSProperties = {
  width: '100%',
  height: '200px',
};

const Navbar: React.FC = () => {
  return (
    <nav
      className="navbar is-primary-nav"
      role="navigation"
      aria-label="main navigation"
      style={style}
    >
      <div className="container">
        <div className="navbar-brand">
          <a className="navbar-item" href="https://bulma.io">
            <img
              src="https://bulma.io/images/bulma-logo.png"
              width={112}
              height={28}
            />
          </a>
          <a
            role="button"
            className="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </a>
        </div>
        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-end">
            <div className="navbar-item">
              <a className="navbar-item">Home</a>
              <a className="navbar-item">About us</a>
              <a className="navbar-item">Services</a>
              <a className="navbar-item">Reviews</a>
              <a className="navbar-item">About our team</a>
              <div className="buttons" style={{border: "1px solid black"}}>
                <a className="button is-info">Log in</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export { Navbar };
