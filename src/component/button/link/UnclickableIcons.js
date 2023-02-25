import React from "react";
import "./unclickable-icons.css";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

function UnclickableIcons({ icons }) {
    return (
        <div>
            <div className="software-skills-main-div">
                <ul className="dev-icons">
                    {icons.map((icon, key) =>
                        <OverlayTrigger
                            key={key}
                            placement={"top"}
                            overlay={
                                <Tooltip id={`tooltip-top`}>
                                    <strong>{icon.name}</strong>
                                </Tooltip>
                            }
                        >
                            <li className="software-skill-inline" name={icon.name}>
                                <span
                                    className="iconify"
                                    data-icon={icon.icon}
                                    style={icon.style}
                                    data-inline="false"
                                ></span>
                            </li>
                        </OverlayTrigger>
                    )}
                </ul>
            </div>
        </div>
    );
}

export default UnclickableIcons;