import React  from 'react'

import Contact from "../SVG/contact"
import Twitter from "../SVG/twitter"
import Slack from "../SVG/slack"
import Github from "../SVG/github"

import "../../CSS/navbarWeb.css"

export class navbar extends React.Component {
    render() {
        return (
            <div>
                <div className="navbar">
            <a target="blank" href="mailto:ahmetKCC2001@gmail.com"><Contact/></a>
            <a target="blank" href="https://join.slack.com/t/ahmeteneskeeci/shared_invite/zt-ebad7oia-ZKU4KnYNgkoPsmK40_8aKA"><Slack/></a>
            <a target="blank" href="https://twitter.com/KccEnes"><Twitter/></a>
            <a target="blank" href="https://github.com/AhmetEnesKCC"><Github/></a>
          </div>
            </div>
        )
    }
}

export default navbar
