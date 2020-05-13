import React from 'react'
//CSS HERE
import "./CSS/mainWeb.css"
//İmport HERE
import Navbar from "./components/JSX/navbar.jsx"
import Info from "./components/JSX/info.jsx"

//SVG HERE

//Components HERE
class Portfolio extends React.Component {
  constructor(props) {
  super(props)   
  this.state = {

  }
}
  render() {
    return(
      <div className="container">
        <div className="middle">
          <Navbar/>
          <Info/>
        </div>
        
      </div>
    )
  }
 
}

export default Portfolio
