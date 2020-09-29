import Navbar from 'trunx/component/Navbar';
import Button from 'trunx/component/Button';
import Buttons from 'trunx/component/Buttons';
import Container from 'trunx/component/Container';

const Nav = () => (
  <Navbar
    style={{
      width: '100%',
      height: '200px',
    }}
  >
    <Container>
      <Navbar.Brand>
        <Navbar.Item href="https://bulma.io">
          <img
            src="https://bulma.io/images/bulma-logo.png"
            width="112"
            height="28"
          />
        </Navbar.Item>
      </Navbar.Brand>

      <Navbar.Burger />

      <Navbar.Menu>
        <Navbar.End>
          <Navbar.Item>
            <div
              className="navbar-items-main"
              style={{ display: 'flex', borderBottom: '1px solid black' }}
            >
              <Navbar.Item>Home</Navbar.Item>
              <Navbar.Item>About us</Navbar.Item>
              <Navbar.Item>Services</Navbar.Item>
              <Navbar.Item>Reviews</Navbar.Item>
              <Navbar.Item>About our team</Navbar.Item>
            </div>

            <Buttons>
              <Button isInfo isSmall style={{ marginLeft: '50px' }}>
                {'Booking'.toUpperCase()}
              </Button>
            </Buttons>
          </Navbar.Item>
        </Navbar.End>
      </Navbar.Menu>
    </Container>
  </Navbar>
);

export { Nav };
