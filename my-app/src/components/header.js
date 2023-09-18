import React from "react";
import Navigate  from "./navigate";


function Header(props) {
    const { active, setActive } = props;

    return(
        <div className="header">
            <div>
                <Navigate
                active={active}
                setActive= {setActive}
            />
            </div>
           
        </div>
    )
}

export default Header;