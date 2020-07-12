import React, { useEffect, useState } from "react";
import Home_1 from "../SVG/Home_1.svg";
import Home_2 from "../SVG/Home_2.svg";
import Home_3 from "../SVG/Home_3.svg";
import About_Me_1 from "../SVG/About_Me_1.svg";
import About_Me_2 from "../SVG/About_Me_2.svg";
import About_Me_3 from "../SVG/About_Me_3.svg";
import Contact_1 from "../SVG/Contact_1.svg";
import Contact_2 from "../SVG/Contact_2.svg";
import Contact_3 from "../SVG/Contact_3.svg";

export default function Menu(props) {
  const [home, sethome] = useState(Home_1);
  const [aboutMe, setAboutMe] = useState(About_Me_1);
  const [contact, setContact] = useState(Contact_1);
  document.addEventListener("DOMContentLoaded", (event) => {
    setInterval(() => {
      sethome(Home_1);
      setAboutMe(About_Me_1);
      setContact(Contact_1);
      setTimeout(() => {
        sethome(Home_2);
        setAboutMe(About_Me_2);
        setContact(Contact_2);
      }, 150);
      setTimeout(() => {
        sethome(Home_3);
        setAboutMe(About_Me_3);
        setContact(Contact_3);
      }, 250);
    }, 400);
  });
  return (
    <div className="menuContainer">
      <img src={home} className="menuLinkContainer" id="Home" alt="" />
      <img src={aboutMe} className="menuLinkContainer" id="About" alt="" />
      <img src={contact} className="menuLinkContainer" id="Contact" alt="" />
    </div>
  );
}
