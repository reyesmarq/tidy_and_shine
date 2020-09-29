const Navbar = () => (
  <nav
    className="navbar"
    role="navigation"
    aria-label="main navigation"
    style={{ paddingBottom: '75px', paddingTop: '75px' }}
  >
    <div className="container">
      <div className="navbar-brand">
        <img
          src="/images/logo_hotizontal.svg"
          style={{
            width: '70%',
            marginLeft: '30px',
          }}
        />
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
          <div
            className="navbar-items"
            style={{ display: 'flex', borderBottom: '1px solid black' }}
          >
            <a className="navbar-item" style={{ marginRight: '15px' }}>
              Home
            </a>
            <a className="navbar-item" style={{ marginRight: '15px' }}>
              About us
            </a>
            <a className="navbar-item" style={{ marginRight: '15px' }}>
              Services
            </a>
            <a className="navbar-item" style={{ marginRight: '15px' }}>
              Reviews
            </a>
            <a className="navbar-item" style={{ marginRight: '15px' }}>
              About our team
            </a>
          </div>
          <div className="navbar-item">
            <div className="buttons">
              <button
                className="button is-link is-small"
                style={{
                  marginLeft: '10px',
                  borderRadius: '0',
                  paddingLeft: '17px',
                  paddingRight: '17px',
                }}
              >
                BOOKING
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
);

export default Navbar;
