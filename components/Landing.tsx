import { useEffect } from 'react';

const Landing = () => {
  useEffect(() => {
    addEventListener('scroll', () => {
      var navbar = document.getElementById('mainNavbar');
      // navbar.classList.toggle('sticky', window.scrollY > 0);
    });
  }, []);

  return (
    <div className="_landing">
      {/* Navbar */}
      <nav
        className="navbar _navbar"
        role="navigation"
        aria-label="main navigation"
        id="mainNavbar"
      >
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
            <div className="navbar-item _items">
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
      </nav>
      {/* End Navbar */}
      {/* Main Hero */}
      <section className="hero is-medium _mainhero">
        <div className="hero-body">
          <h2 className="title is-1">The Best Cleaning Service in Texas</h2>
          <p className="is-size-5">
            Let <span className="is-italic">REAL</span> Professionals take care
            of your home's Cleanliness while you do whatever you like with your
            free time!
          </p>
          <button className="button is-large is-link is-size-2 mt-6">
            FREE ESTIMATE
          </button>
        </div>
      </section>
      {/* End Main Hero */}
      {/* About us */}
      <div className="columns _aboutus" id="aboutus">
        <div className="column">
          <div>
            <button className="button is-large is-link">About us</button>
            <p className="is-size-5">
              Do you search the internet for the best and most reliable cleaning
              services available? If so, then you will definitely find Tidy &
              Shine as your best option. This company is your partner in making
              your office spaces and homes a whole lot cleaner. Tidy & shine is
              truly committed to giving you excellent cleaning. We have
              continued to develop and expand our business into dynamic progress
              based on a high standard of our work, competitive prices and
              responsibility. Apart from our private residential clients we have
              serviced and continue to service commercial clients and undertake
              work on behalf of property management companies, major estate and
              letting agents. Tidy & shine follows the best known techniques and
              methods of cleaning in the industry together with keeping a close
              eye on the competition and constantly developing new technologies.
              Our cleaning services have been carefully mastered to perfection
              throughout the years. We successfully cover all these Counties,
              Denton, Collin, Dallas, Tarrant, Rockwall, Kaufman, Ellis,
              Johnson, Hunt, Midland and more… Devoted to our clients we choose
              only experienced cleaners who are trained to satisfy all personal
              requirements. So when it comes to choosing professional cleaning
              service at the right price, make sure you contact Tidy & Shine.
            </p>
          </div>
        </div>
        <div className="column"></div>
      </div>
      {/* End About us */}
      {/* Services */}
      <div className="_services-container">
        <div className="tabs is-large _services">
          <h2 className="title is-1">Services</h2>
          <ul>
            <li className="is-active">
              <a>Standard</a>
            </li>
            <li>
              <a>Premium</a>
            </li>
            <li>
              <a>Additional Services</a>
            </li>
          </ul>
        </div>
      </div>
      {/* Services carousel */}
      <div className="columns _service-carousel">
        <div className="column">
          <div>
            <h3 className="title">
              From $30/hour (min 3 hours per visit apply)
            </h3>
            <div className="text-content">
              <p className="is-size-5">
                Every time we clean we provide these services.
              </p>

              <p className="is-size-5">
                Bathrooms, Tile walls, shower doors, vanity, sink, mirrors, and
                chrome fixtures, floors, carpets, toilets, windows sills,
                ledges, blinds and doors Kitchen & Eating area, Counter tops,
                range hood, drip pans or glass, sink and chrome, microwave,
                front of all appliances, cobwebs removed, floor damp mopped and
                general dusting.
              </p>

              <p className="is-size-5">
                Sleeping & leaving areas, Flat areas hand wiped, doors and door
                frames spot cleaned, picture frames, ceiling fans, lamp shades,
                intricate items, heavy knickknack areas, windows sills, ledges,
                blinds and more…
              </p>
            </div>
            <button className="button is-large is-link">
              BOOK THIS SERVICE
            </button>
          </div>
        </div>
        <div className="column"></div>
      </div>
      {/* End Services carousel */}
      {/* Reviews Banner */}
      <section className="_reviews-container">
        <div className="hero is-medium _reviews">
          <div className="hero-body">
            <div className="container">
              <h2 className="button is-link">Reviews</h2>
            </div>
          </div>
        </div>
      </section>
      {/* End Reviews Banner */}
      {/* Reviews Content */}

      <div className="_reviews_content">
        <blockquote>
          <h4 className="title">John Doe</h4>
          <p>
            I love what they do and for what it is woth I'm a Cancer patient and
            it is very important to have and keep and clean environment. If you
            need tomseone to clean your house or business I promise you will not
            be disappointed with this company.
          </p>
        </blockquote>
      </div>
      {/* End Reviews Content */}
      {/* Our Team */}
      <div className="columns _about_our_team">
        <div className="column">
          <div>
            <h3 className="title">Know more about out team</h3>
            <div className="text-content">
              <p className="is-size-5">
                We pride orselves with out team of trained, committed, filly
                vetted and insured cleaners.
              </p>
              <p className="is-size-5">
                Our cleaning team is trainied to meet high standars of cleaning,
                managing households with the skill and experience our cleints
                have come to expect.
              </p>
              <p className="is-size-5">
                We deliver an outstanding service custom - tailored to each and
                every one of our clients - bug or small
              </p>
              <p className="is-size-5">We will be happy to assist you!</p>
            </div>
          </div>
        </div>
        <div className="column"></div>
      </div>
      {/* End Our Team */}
      {/* Cards */}
      <section className="_card-section">
        <h4 className="title has-text-centered">
          Book your cleaning service instantly below.{' '}
          <span>We keep it as simple as...</span>
        </h4>
        <div className="columns">
          <div className="column">
            <div className="card">
              <div className="card-content">
                <span className="_icon">
                  <img src="/images/choose_your_service.svg" alt="" />
                </span>
                <p className="title is-4">Choose your service</p>
                <p className="subtitle is-4">
                  Navigate easily through our website and choose the right
                  service for You and Yor Home or business!
                </p>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <div className="card-content">
                <span className="_icon">
                  <img src="/images/book_with_us.svg" alt="" />
                </span>
                <p className="title is-4">Book with us</p>
                <p className="subtitle is-4">
                  Use our handy menu to book a service on a convenient day and
                  time.
                </p>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <div className="card-content">
                <span className="_icon">
                  <img src="/images/sit_relax.svg" alt="" />
                </span>
                <p className="title is-4">Sit Back and Relax</p>
                <p className="subtitle is-4">
                  We will take care of the rest. All you have to do is enjoy
                  your time off duty.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="box has-text-centered">
          <button className="button is-large is-primary">BOOK NOW</button>
        </div>
      </section>
      {/* End Cards */}
      {/* Footer */}
      <footer className="footer">
        <div className="_footer">
          <div className="box">
            <div className="columns">
              <div className="column is-3 _menu">
                <aside className="menu">
                  <ul className="menu-list">
                    <li>
                      <a>Home</a>
                    </li>
                    <li>
                      <a>About us</a>
                    </li>
                    <li>
                      <a>Services</a>
                    </li>
                    <li>
                      <a>Reviews</a>
                    </li>
                    <li>
                      <a>About out team</a>
                    </li>
                    <li>
                      <a>Booking</a>
                    </li>
                  </ul>
                </aside>
              </div>
              <div className="column _contact_information">
                <h4>Contact information</h4>
                <div>
                  <span className="_icon">
                    <img src="/images/phone_icon.svg" alt="" />
                    <span>214-870-5638</span>
                  </span>
                </div>
                <div>
                  <span className="_icon">
                    <img src="/images/phone_icon.svg" alt="" />
                    <span>
                      <a href="mailto:tidyandshine.contact@gmail.com">
                        tidyandshine.contact@gmail.com
                      </a>
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="box">
            <div className="columns">
              <div className="column"></div>
              <div className="column is-5 _logo">
                <div className="_footer-logo">
                  <img src="/images/logo_vertical.svg" />
                </div>
              </div>
              <div className="column _social-media-container">
                <div className="_social-media">
                  <a href="">
                    <span className="icon has-text-white">
                      <i className="fab fa-facebook-f fa-2x" />
                    </span>
                  </a>
                  <a href="">
                    <span className="icon has-text-white">
                      <i className="fab fa-twitter fa-2x" />
                    </span>
                  </a>
                  <a href="">
                    <span className="icon has-text-white">
                      <i className="fab fa-instagram fa-2x" />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="box section">
            <div className="columns">
              <div className="column has-text-centered">
                <p className="subtitle">2011 Tidy and Shine</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* End Footer */}
    </div>
  );
};

export default Landing;
