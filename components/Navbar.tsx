import Navbar from 'trunx/component/Navbar';
import Button from 'trunx/component/Button';
import Buttons from 'trunx/component/Buttons';

let style: React.CSSProperties = {
  width: '100%',
  height: '200px',
};

const Nav: React.FC = () => (
  <Navbar>
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
      <Navbar.Start>
        <Navbar.Item>Home</Navbar.Item>

        <Navbar.Item>Documentation</Navbar.Item>

        <Navbar.Item hasDropdown isHoverable>
          <Navbar.Link>More</Navbar.Link>

          <Navbar.Dropdown>
            <Navbar.Item>About</Navbar.Item>

            <Navbar.Item>Jobs</Navbar.Item>

            <Navbar.Item>Contact</Navbar.Item>

            <Navbar.Divider />

            <Navbar.Item>Report an issue</Navbar.Item>
          </Navbar.Dropdown>
        </Navbar.Item>
      </Navbar.Start>

      <Navbar.End>
        <Navbar.Item>
          <Buttons>
            <Button isPrimary>
              <strong>Sign up</strong>
            </Button>

            <Button isLight>Log in</Button>
          </Buttons>
        </Navbar.Item>
      </Navbar.End>
    </Navbar.Menu>
  </Navbar>
);

export { Nav };
