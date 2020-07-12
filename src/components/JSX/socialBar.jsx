import React, { useState } from "react";
import Twitter_1 from "../SVG/Twitter_1.svg";
import Twitter_2 from "../SVG/Twitter_2.svg";
import Twitter_3 from "../SVG/Twitter_3.svg";
import Github_1 from "../SVG/Github_1.svg";
import Github_2 from "../SVG/Github_2.svg";
import Github_3 from "../SVG/Github_3.svg";
import Slack_1 from "../SVG/Slack_1.svg";
import Slack_2 from "../SVG/Slack_2.svg";
import Slack_3 from "../SVG/Slack_3.svg";

export default function SocialBar(props) {
  const [twitter, setTwitter] = useState(Twitter_1);
  const [github, setGithub] = useState(Github_1);
  const [slack, setSlack] = useState(Slack_1);
  document.addEventListener("DOMContentLoaded", (event) => {
    setInterval(() => {
      setTwitter(Twitter_1);
      setGithub(Github_1);
      setSlack(Slack_1);
      setTimeout(() => {
        setTwitter(Twitter_2);
        setGithub(Github_2);
        setSlack(Slack_2);
      }, 100);
      setTimeout(() => {
        setTwitter(Twitter_3);
        setGithub(Github_3);
        setSlack(Slack_3);
      }, 200);
    }, 300);
  });
  return (
    <div className="socialBarContainer">
      <a target="blank" href="https://twitter.com/KccEnes">
        <img src={twitter} className="socialLink"></img>
      </a>
      <a target="blank" href="https://github.com/AhmetEnesKCC">
        <img src={github} className="socialLink"></img>
      </a>
      <a
        target="blank"
        href="https://join.slack.com/t/ahmeteneskeeci/shared_invite/zt-ebad7oia-ZKU4KnYNgkoPsmK40_8aKA"
      >
        <img src={slack} className="socialLink"></img>
      </a>
    </div>
  );
}
