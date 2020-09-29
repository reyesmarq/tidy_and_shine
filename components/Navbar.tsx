const Navbar = () => (
  <nav
    className="navbar _navbar"
    role="navigation"
    aria-label="main navigation"
  >
    <div className="container">
      <div className="navbar-brand">
        <img src="/images/logo_hotizontal.svg" />
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
          <div className="navbar-items">
            <a className="navbar-item">Home</a>
            <a className="navbar-item">About us</a>
            <a className="navbar-item">Services</a>
            <a className="navbar-item">Reviews</a>
            <a className="navbar-item">About our team</a>
          </div>
          <div className="navbar-item">
            <div className="buttons">
              <button className="button is-link is-small">BOOKING</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
);

export default Navbar;
