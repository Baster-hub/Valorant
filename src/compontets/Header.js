import React from "react";
import "./Header.css";

const Header = () => {
    return (
        <header>
            <div id="riot_games">
                <img src={require("../img/riot_games.png")}></img>
            </div>
            <div className="logo">
                <img src={require("../img/logo.png")}></img>
            </div>

            <ul className="gizmo">
                <li>
                    <a href="#">Game</a>
                </li>
                <li>
                    <a href="#">Champions</a>
                </li>
                <li>
                    <a href="#">News</a>
                </li>
                <li>
                    <a href="#">Patch Notes</a>
                </li>
                <li>
                    <a href="#">Discover</a>
                </li>
                <li>
                    <a href="#">Esports</a>
                </li>
                <li>
                    <a href="#">Universe</a>
                </li>
                <li>
                    <a href="#">Shop</a>
                </li>
                <li>
                    <a href="#">Support</a>
                </li>
                <li className="account">
                    <div className="logo"><img src={require('../img/akali.png')}></img></div>
                    <a href="#">Unepickid</a>
                </li>
            </ul>
        </header>
    );
};

export default Header;
