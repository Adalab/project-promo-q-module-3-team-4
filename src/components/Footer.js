import logo from '../images/logo-footer.jpg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__text">
        <p>
          Monday haters <small>©2022</small>
        </p>
      </div>
      <div className="footer__logo">
        <a href="./index.html#">
          {' '}
          <img
            className="footer__logo--img"
            src={logo}
            alt="logo"
            title="logo"
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
