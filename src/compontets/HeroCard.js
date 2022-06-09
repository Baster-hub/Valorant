import React from "react";
import "./HeroCard.css";

const HeroCard = (props) => {
    return (
        <li class="hero">
            <img
                src={require("../img/heros/" + props.name + ".png")}
                alt=""
            ></img>
            <div className="hero-info">
                <h1 className="hero-name">{props.name}</h1>
                <h2 className="hero-country">{props.country}</h2>
            </div>
            <ul class="abilities">
                {props.abilities.map((item) => (
                    <li>
                        <img
                            src={require(`../img/abilities/${props.name}/${item}.svg`)}
                        ></img>
                    </li>
                ))}
            </ul>
        </li>
    );
};

export default HeroCard;
