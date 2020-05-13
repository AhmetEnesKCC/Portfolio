import React from 'react'

import "../../CSS/infoWeb.css"
import Learn  from "./learn"
import Profile from "../../Images/Asset 2.png"


export class Info extends React.Component {
        state={
            change: "below",
            platform: "web",
        }

    
    render() {
        
        
        
        return (
            <div className="info flex-container">
               <div className="text">
                   {this.state.platform !== "web" ? <Learn/> : <div>                   <h2>Ahmet Enes Keçeci</h2>
        <p>Hello My Name is Ahmet Enes Keçeci. I am an Istanbul Technical University student. I <span className="myColor">love</span> designing and programming. Using and learning listed {this.state.change}:</p>
</div>}            
{this.state.platform === "web" ? <Learn/> : <div>                   <h2>Ahmet Enes Keçeci</h2>
        <p>Hello My Name is Ahmet Enes Keçeci. I am an Istanbul Technical University student. I <span className="myColor">love</span> designing and programming. Using and learning listed {this.state.change}:</p>
</div>}
               
               </div>
               <div className="picture">
                   <div className="profileImg">
                       <img src={Profile} alt="profileImg"/>
                   </div>
               </div>
            </div>
        )
    }
}

export default Info
