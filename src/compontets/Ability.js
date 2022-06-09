import React from "react";
import "./Ability.css";
const Ability = props => {

	return (
        <div className="ability-body">
            <div className="ability-info">
                <h2 className="ability-type">{props.type}</h2>
                <h2 className="ability-name">{props.name}</h2>
                <p className="ability-description">{props.description}</p>
            </div>
            <div className="img-contrainer">
                <img
                    src={require(`../img/abilities/sage/${props.name
                        .toLowerCase()
                        .replace(" ", "_")}.svg`)}
                    alt="hello"
                ></img>
            </div>
        </div>
    );
}

export default Ability