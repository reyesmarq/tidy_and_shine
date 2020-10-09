import { useEffect, useState } from 'react';
import Scrollspy from 'react-scrollspy';
import Reviews from './Reviews';
import Services from './Services';

const Landing = () => {
  let [burger, setBurger] = useState(false);

  // Effec to control the navbar at scroll
  useEffect(() => {
    const handleScrollY = () => {
      let navbar = document.getElementById('navbar');
      let navHome = document.getElementById('navHome');

      navbar.classList.toggle('sticky', window.scrollY > 1);
      navHome.classList.toggle('is-active', window.scrollY <= 0)
    };
    addEventListener('scroll', handleScrollY);

    return () => removeEventListener('scroll', handleScrollY);
  }, []);

  // useEffect(() => {
  //   // const handleScrollY = () => {
  //   //   setScrollY(window.scrollY);
  //   //   console.log(scrollY)
  //   // };

  //   window.addEventListener('scroll', () => {
  //     // console.log('window.scrollY', window.scrollY);
  //     // console.log('window.pageYOffset', window.pageYOffset);

  //     // setScrollY(window.scrollY);
  //     setScrollY(window.pageYOffset);

  //     console.log(scrollY);
  //   });

  //   // return window.removeEventListener('scroll', handleScrollY);
  // }, []);

  // function logit() {
  //   // setScrollY(window.pageYOffset);
  //   setScrollY(window.scrollY);
  //   console.log(scrollY)
  //   var navbar = document.getElementById('mainNavbar');
  //   if (scrollY != 0) {
  //     navbar.classList.add('sticky')
  //   } else {
  //     navbar.classList.remove('sticky')
  //   }

  //   // navbar.classList.toggle('sticky', scrollY > 0);
  // }

  // useEffect(() => {
  //   function watchScroll() {
  //     window.addEventListener('scroll', logit);
  //   }
  //   watchScroll();
  //   // return () => {
  //   //   window.removeEventListener('scroll', logit);
  //   // };
  // });

  // useEffect(() => {
  //   let mainNavLinks = document.querySelectorAll(
  //     'nav .navbar-menu .navbar-end .navbar-item a'
  //   );

  //   const handleScrollY: EventListener = () => {
  //     let fromTop = window.scrollY;

  //     mainNavLinks.forEach((link) => {
  //       // @ts-ignore
  //       let section = document.querySelector(link.hash);

  //       if (
  //         section.offsetTop <= fromTop &&
  //         section.offsetTop + section.offsetHeight > fromTop
  //       ) {
  //         link.classList.add('is-active');
  //       } else {
  //         link.classList.remove('is-active');
  //       }
  //     });

  //   }

  //   window.addEventListener('scroll', handleScrollY);

  //   return () => {
  //     window.removeEventListener('scrol', handleScrollY)
  //   }
  // }, []);

  return (
    <div className="_landing">
      <section className="hero is-medium __mainhero" id="home">
        <div className="hero-head">
          <nav className="navbar is-fixed-top" id="navbar">
            <div className="navbar-brand">
              <img src="/images/logo_hotizontal.svg" alt="Logo" />
              <span
                className={
                  burger
                    ? 'navbar-burger burger is-active'
                    : 'navbar-burger burger'
                }
                data-target="navbarBurgerMenu"
                onClick={() => setBurger(!burger)}
              >
                <span />
                <span />
                <span />
              </span>
            </div>
            <div
              id="navbarBurgerMenu"
              className={burger ? 'navbar-menu is-active' : 'navbar-menu'}
            >
              <div className="navbar-end">
                <Scrollspy
                  className="navbar-item _items"
                  items={[
                    'Home',
                    'aboutUs',
                    'services',
                    'reviews',
                    'aboutTeam',
                  ]}
                  currentClassName="is-active"
                  componentTag="div"
                >
                  <a href="#home" className="navbar-item" id="navHome">
                    Home
                  </a>

                  <a href="#aboutUs" className="navbar-item">
                    About us
                  </a>

                  <a href="#services" className="navbar-item">
                    Services
                  </a>

                  <a href="#reviews" className="navbar-item">
                    Reviews
                  </a>

                  <a href="#aboutTeam" className="navbar-item">
                    About our team
                  </a>
                </Scrollspy>
                <div className="navbar-item">
                  <button className="button is-link">
                    <span>BOOKING</span>
                  </button>
                </div>
              </div>
            </div>
          </nav>
        </div>
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
      {/* About us */}
      <section id="aboutUs">
        <div className="columns _aboutus">
          <div className="column">
            <div>
              <button className="button is-large is-link">About us</button>
              <p className="is-size-5">
                Do you search the internet for the best and most reliable
                cleaning services available? If so, then you will definitely
                find Tidy & Shine as your best option. This company is your
                partner in making your office spaces and homes a whole lot
                cleaner. Tidy & shine is truly committed to giving you excellent
                cleaning. We have continued to develop and expand our business
                into dynamic progress based on a high standard of our work,
                competitive prices and responsibility. Apart from our private
                residential clients we have serviced and continue to service
                commercial clients and undertake work on behalf of property
                management companies, major estate and letting agents. Tidy &
                shine follows the best known techniques and methods of cleaning
                in the industry together with keeping a close eye on the
                competition and constantly developing new technologies. Our
                cleaning services have been carefully mastered to perfection
                throughout the years. We successfully cover all these Counties,
                Denton, Collin, Dallas, Tarrant, Rockwall, Kaufman, Ellis,
                Johnson, Hunt, Midland and more… Devoted to our clients we
                choose only experienced cleaners who are trained to satisfy all
                personal requirements. So when it comes to choosing professional
                cleaning service at the right price, make sure you contact Tidy
                & Shine.
              </p>
            </div>
          </div>
          <div className="column"></div>
        </div>
      </section>
      {/* End About us */}
      {/* Services */}
      <section id="services">
        <Services />
        {/* <div className="_services-container">
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
        </div> */}
        {/* Services carousel */}
        {/* <div className="columns _service-carousel">
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
                  Bathrooms, Tile walls, shower doors, vanity, sink, mirrors,
                  and chrome fixtures, floors, carpets, toilets, windows sills,
                  ledges, blinds and doors Kitchen & Eating area, Counter tops,
                  range hood, drip pans or glass, sink and chrome, microwave,
                  front of all appliances, cobwebs removed, floor damp mopped
                  and general dusting.
                </p>

                <p className="is-size-5">
                  Sleeping & leaving areas, Flat areas hand wiped, doors and
                  door frames spot cleaned, picture frames, ceiling fans, lamp
                  shades, intricate items, heavy knickknack areas, windows
                  sills, ledges, blinds and more…
                </p>
              </div>
              <button className="button is-large is-link">
                BOOK THIS SERVICE
              </button>
            </div>
          </div>
          <div className="column"></div>
        </div> */}
      </section>
      {/* End Services carousel */}
      {/* Reviews Banner */}
      <section id="reviews">
        <div className="_reviews-container">
          <div className="hero is-medium _reviews">
            <div className="hero-body">
              <div className="container">
                <h2 className="button is-link">Reviews</h2>
              </div>
            </div>
          </div>
        </div>
        {/* End Reviews Banner */}
        {/* Reviews Content */}
        <Reviews />
      </section>
      {/* End Reviews Content */}
      {/* Our Team */}
      <section id="aboutTeam">
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
                  Our cleaning team is trainied to meet high standars of
                  cleaning, managing households with the skill and experience
                  our cleints have come to expect.
                </p>
                <p className="is-size-5">
                  We deliver an outstanding service custom - tailored to each
                  and every one of our clients - bug or small
                </p>
                <p className="is-size-5">We will be happy to assist you!</p>
              </div>
            </div>
          </div>
          <div className="column"></div>
        </div>
      </section>
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
                <span className="icon">
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
                <span className="icon">
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
                <span className="icon">
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
                      <a href="#home">Home</a>
                    </li>
                    <li>
                      <a href="#aboutUs">About us</a>
                    </li>
                    <li>
                      <a href="#services">Services</a>
                    </li>
                    <li>
                      <a href="#reviews">Reviews</a>
                    </li>
                    <li>
                      <a href="#aboutTeam">About out team</a>
                    </li>
                    <li>
                      <a href="">Booking</a>
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
              <div className="column is-6 _logo">
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
