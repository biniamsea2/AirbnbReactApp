import React from "react";
import "./Footer.css";
import LanguageIcon from "@material-ui/icons/Language";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";

function Footer() {
  return (
    <div>
      <div className="footer">
        <p className="airbnb_demo">© 2021 Airbnb Demo</p>
        <button>
          <a href="https://www.airbnb.com/help/article/2855/privacy-policy">
            Privacy
          </a>
        </button>
        <button>
          <a href="https://www.airbnb.com/help/article/2908/terms-of-service">
            Terms
          </a>
        </button>
        <button>
          <a href="https://www.airbnb.com/sitemaps/v2">Sitemap</a>
        </button>

        <div className="footerRightContainer">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/airbnb"
          >
            <TwitterIcon className="footerRight" style={{ color: "black" }} />{" "}
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/airbnb/"
          >
            <InstagramIcon className="footerRight" style={{ color: "black" }} />{" "}
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.facebook.com/airbnb"
          >
            <FacebookIcon className="footerRight" style={{ color: "black" }} />{" "}
          </a>

          <a
            className="footerRight"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.airbnb.com/"
            Style="color:black;"
          >
            $ USD
          </a>

          <div className="footerRight">
            <a
              className="footerRight"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.airbnb.com/"
              Style="color:black;"
            >
              English (US)
            </a>
          </div>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.airbnb.com/"
          >
            <LanguageIcon
              className="footerRight"
              fontSize="small"
              style={{ color: "black" }}
            />{" "}
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
