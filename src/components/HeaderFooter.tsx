import React from "react";

// @ts-ignore
import { ReactComponent as Logo } from "../assets/images/logo.svg";
// @ts-ignore
import { ReactComponent as TwitterIcon } from "../assets/social-icons/twitter.svg";
// @ts-ignore
import { ReactComponent as InstagramIcon } from "../assets/social-icons/instagram.svg";
// @ts-ignore
import { ReactComponent as FacebookIcon } from "../assets/social-icons/facebook.svg";

export const Header = () => (
  <nav className="nav">
    <div className="nav-container">
      <div className="nav-logo">
        <a href="https://thecity.nyc/" aria-label="THE CITY">
          <Logo />
        </a>
      </div>
      <div className="nav-title"></div>
      <div className="nav-links">
        <a href="https://donorbox.org/nycdonate">Donate</a>
      </div>
    </div>
  </nav>
);

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="container">
      <div className="footer">
        <div className="footer-credit">
          Made with ♥ in NYC by{" "}
          <a href="https://thecity.nyc/" aria-label="THE CITY">
            THE CITY
          </a>
        </div>
        <div className="footer-icons">
          <a
            className="twitter"
            aria-label="Twitter"
            href="https://twitter.com/intent/follow?screen_name=TheCityNY"
          >
            <TwitterIcon />
          </a>
          <a
            className="instagram"
            aria-label="Instagram"
            href="https://www.instagram.com/thecityny"
          >
            <InstagramIcon />
          </a>
          <a
            className="facebook"
            aria-label="Facebook"
            href="https://www.facebook.com/thecityny"
          >
            <FacebookIcon />
          </a>
        </div>
        <ul className="footer-links">
          <li>
            <a href="https://thecity.nyc/about/us.html">About</a>
          </li>
          <li>
            <a href="https://donorbox.org/nycdonate">Donate</a>
          </li>
          <li>
            <a href="https://thecity.nyc/about/team.html">Team</a>
          </li>
          <li>
            <a href="https://thecity.nyc/about/supporters.html">Funders</a>
          </li>
          <li>
            <a href="https://thecity.nyc/about/ethics.html">Ethics</a>
          </li>
          <li>
            <a href="https://thecity.nyc/about/republish-our-work.html">
              Republishing
            </a>
          </li>
          <br />
          <li>
            <a href="https://thecity.nyc/about/contact-us.html">Contact</a>
          </li>
          <li>
            <a href="https://www.thecity.nyc/legal/terms-of-use">
              Terms of Use
            </a>
          </li>
          <li>
            <a href="https://www.thecity.nyc/legal/privacy-notice">
              Privacy Notice
            </a>
          </li>
          <li>
            <a href="https://www.thecity.nyc/legal/cookie-policy">
              Cookie Policy
            </a>
          </li>
        </ul>
        <div className="copyright">© {year}, THE CITY. All Rights Reserved</div>
      </div>
    </footer>
  );
};
