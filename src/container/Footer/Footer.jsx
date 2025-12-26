import { FooterOverlay, Newsletter } from "../../components";
import { FiFacebook, FiInstagram } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { images } from "../../constants";
import "./Footer.css";

function Footer() {
  return (
    <div className="app__footer section__padding" id="login">
      <FooterOverlay />
      <Newsletter />

      <div className="app__footer-links">
        <div className="app__footer-links_contacts ">
          <h1 className="app__footer-headtext"> Contact US </h1>
          <p className="p__opensans">9 W 53rd St, New York, NY 10019, USA</p>
          <p className="p__opensans">+1 212-555-1230</p>
          <p className="p__opensans">+1 212-555-1230</p>
        </div>
        <div className="app__footer-links_logo">
          <img src={images.gericht} alt="footer" />
          <p className="p__opensans">
            The best way to find yourself is to lose yourself in the service of
            others
          </p>
          <img
            src={images.spoon}
            alt="spoon"
            className="spoon__img"
            style={{ marginTop: "15" }}
          />
          <div className="app__footer-links_icons">
            <FiFacebook />
            <FaXTwitter />
            <FiInstagram />
          </div>
        </div>

        <div className="app__footer-links_work">
          <h1 className="app__footer-headtext"> Working Hours </h1>
          <p className="p__opensans">Monday-Friday</p>
          <p className="p__opensans">8:00am - 9:00pm</p>
          <p className="p__opensans">Saturday - Sunday</p>
          <p className="p__opensans">7:00am - 8:00pm</p>
        </div>
      </div>
      <div className="footer__copyright">
        <p className="p__opensans">2025 Gericht. All Right Reserved</p>
      </div>
    </div>
  );
}

export default Footer;
