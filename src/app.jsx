import React from "react";
import "./Styles/CSS/main.css";
import HomeScreenMiddle from "./components/JSX/HomeScreeen";
import SocialBar from "./components/JSX/socialBar";
import Menu from "./components/JSX/Menu";
import Loading_Screen from "./components/JSX/Loading.jsx";
export function Portfolio() {
  return (
    <div className="App">
      <Loading_Screen />
      <div
        className="container"
        onLoad={() => {
          setTimeout(() => {
            document.getElementsByClassName("loadingScreen")[0].style.display =
              "none";
          }, 500);
        }}
      >
        <Menu />
        <HomeScreenMiddle />
        <SocialBar />
      </div>
    </div>
  );
}
