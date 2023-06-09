import React, { useEffect, useState } from "react";
import "./Footer.css";

const Footer = () => {
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.innerHeight + window.scrollY;
      const documentHeight = document.documentElement.offsetHeight;
      const threshold = 0.8; // Adjust this value to control when the footer appears

      setShowFooter(scrollPosition >= threshold * documentHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!showFooter) return null;

  return (
    <footer className="unfixed-footer">
      {`Copyright © IMMUNIA  ${new Date().getFullYear()}`}
    </footer>
  );
};

export default Footer;
