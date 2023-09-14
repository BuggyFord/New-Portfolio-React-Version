import React from "react";
/*import About from "./aboutMe";
import Contact from "./contact";
import Footer from "./footer";
import Navigation  from "./navigation";
import Portfolio from "./portfolio";
import Resume from "./resume";
*/
function Header() {
    return(
        <div className="header">

           <nav> 
                <button>AboutMe</button>
                <button>Contact</button>
                <button>Portfolio</button>
                <button>Resume</button>
            </nav>
            <h1>Tyler Johnson</h1>
            
        </div>
    )
}

export default Header;