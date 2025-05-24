import React, { useState } from "react";
import './Navbaar.css'
import { Link } from "react-router-dom";

const Navbaar = () =>{
    const handelButtonToggle = () =>{
        // console.log("heloo");
        setshowMenu(!showMenu);
    }

    const [showMenu , setshowMenu] = useState(false);
    return(
        
        <header>
        <div className="container">
            <div className="grid grid-navbar">
                <div className="logo">
                   <Link to="/"><img src="./images/main_logo.png" alt="logo" height={50}/></Link>
                </div>
                <nav className={showMenu ? "menu-mobile" : "menu-web"}>
                    <ul>
                        <li>
                            <Link to="/">HOME</Link>
                        </li>
                        <li>
                            <Link to="/events">EVENTS</Link>
                        </li>
                        <li>
                            <Link to="/contact">CONTACTS</Link>
                        </li>
                    </ul>
                </nav>
                <div className="toggle-menu">
                    <button onClick={handelButtonToggle}>
                    ☰
                    </button>
                </div>


            </div>

        </div>


        </header>
        
        


    );
};

export default Navbaar;