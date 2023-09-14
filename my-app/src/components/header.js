import React from "react";
import Navigate  from "./navigate";


function Header(props) {
    const { active, setActive } = props;

    return(
        <div className="header">
            <div>
                <h1>Tyler Johnson</h1>
            </div>
            <Navigate
                active={active}
                setActive= {setActive}
            />
        </div>
    )
}

export default Header;