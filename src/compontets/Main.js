import React from "react";
import "./Main.css";
import HeroCard from "./HeroCard";

const Main = (props) => {
    return (
        <main>
            <div className="agents-title">
                <h1>Agents</h1>
                <img src={require("../img/logo_2.png")}></img>
            </div>

            <ul className="hero_container">
                {props.heros.map((item) => (
                    <HeroCard
                        name={item.name}
                        country={item.country}
                        abilities={item.abilities}
                    />
                ))}
            </ul>
        </main>
    );
};

export default Main;
