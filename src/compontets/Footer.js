import React from "react";
import "./Footer.css";
import Ability from "./Ability";
import ArrowButton from "./ArrowButton";

const abilities = [
    {
        name: "Slow orb",
        type: "BASIC",
        description:
            "Cast out a radianite orb that breaks into a slowing field upon impact with the ground.",
    },
    {
        name: "Healing Orb",
        type: "SIGNATURE",
        description:
            "Heal an ally or yourself to full health over a few seconds.",
    },
    {
        name: "Resurrection",
        type: "ULTIMATE",
        description:
            "Target a friendly corpse. After a short delay, revive them with full health.",
    },
];

const Footer = props => {
	return (
        <footer>
            <ul className="abilities-list">
                {abilities.map((item) => (
                    <li>
						<Ability
							name={item.name}
							type={item.type}
							description={item.description}
						/>
					</li>
                ))}
            </ul>
            <ArrowButton />
        </footer>
    );
}

export default Footer