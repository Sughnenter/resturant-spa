import { FooterOverlay, Newsletter } from "../../components";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";

import "./Footer.css";

function Footer() {
  return (
    <div className="app__footer section__padding" id="login">
      <FooterOverlay />
      <Newsletter />
    </div>
  );
}

export default Footer;
