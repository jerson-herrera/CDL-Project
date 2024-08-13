import React from "react";
import { Link } from "react-router-dom";
import "../styles/headFoot/footer.css"; // Importa el archivo de estilos
import {
  footerX,
  footerYoutube,
  footerTwitch,
  footerInsta,
} from "../assets/footer/socialIndex";

const Footer = () => {
  return (
    <nav className="Footer">
      <Link to="https://twitter.com/CODLeague">
        <img src={footerX} alt="cdl-x" className="footer-x" />
      </Link>

      <Link to="https://www.twitch.tv/callofduty">
        <img src={footerTwitch} alt="cdl-twitch" className="footer-twitch" />
      </Link>

      <Link to="https://www.youtube.com/CODLeague">
        <img src={footerYoutube} alt="cdl-youtube" className="footer-youtube" />
      </Link>
      <Link to="https://www.instagram.com/codleague">
        <img src={footerInsta} alt="cdl-instagram" className="footer-insta" />
      </Link>
    </nav>
  );
};

export default Footer;
