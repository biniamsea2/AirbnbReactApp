import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div>
      <div className="footer">
        <p>© 2021 Airbnb Demo</p> 
        <button><a href="https://www.airbnb.com/help/article/2855/privacy-policy">Privacy</a></button> 
        <button><a href="https://www.airbnb.com/help/article/2908/terms-of-service">Terms</a></button> 
        <button><a href="https://www.airbnb.com/sitemaps/v2">Sitemap</a></button>

      </div>
    </div>
  );
}

export default Footer;
