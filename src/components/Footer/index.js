import React, { useEffect, useState, useContext } from "react";
import NoContent from "../NoContent";
import { GlobalContext } from "../../context/store";
import { ImFacebook2 } from "react-icons/im";
import { FaGithubSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { ImLinkedin } from "react-icons/im";

import "./styles.css";

const Footer = () => {
  const [socials, setSocials] = useState([]);
  const { dispatch, getSocials } = useContext(GlobalContext);

  const getSocialIcon = (icon) => {
    switch (icon.toLowerCase()) {
      case "facebook":
        return <ImFacebook2 />;
      case "linkedin":
        return <ImLinkedin />;
      case "instagram":
        return <FaInstagramSquare />;
      case "github":
        return <FaGithubSquare />;
      case "twitter":
        return <FaTwitterSquare />;
      default:
        return null;
    }
  };

  const fetchSocials = async () => {
    const socials = await getSocials()(dispatch);

    setSocials(socials);
  };

  useEffect(() => {
    fetchSocials();
  }, []);

  return (
    <div className="footer">
      <div className="nick">
        TheTechGuy<sup> &trade;</sup>
      </div>
      <div className="socials">
        {socials.length === 0 ? (
          <NoContent message="No socials" />
        ) : (
          <div className="social-wrapper">
            {socials.map((social, key) => (
              <a
                className="each-social"
                href={social.address}
                key={key}
                target="_blank"
              >
                {getSocialIcon(social.name)}
              </a>
            ))}
          </div>
        )}
      </div>
      <div className="copyright">
        {new Date().getFullYear()} <sup>&copy;</sup>{" "}
      </div>
    </div>
  );
};

export default Footer;
