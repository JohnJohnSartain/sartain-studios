import React from "react";
import "./Greeting.css";
import greeting from "../../../asset/greeting";
import ManSittingOnDesk from "../../../asset/image/ManSittingOnDesk";
import colors from "../../../colors";
import socialMediaDetails from "../../../asset/socialMediaDetails";
import LinkButtons from "../../button/link/LinkButtons"

function GreetingSection() {
  return (
    <div className="greet-main" id="greeting">
      <div className="greeting-main">
        <div className="greeting-text-div">
          <div>
            <h1 className="greeting-text" style={{ color: colors.text }}>
              {greeting.title}
            </h1>
            <h2 className="greeting-nickname" style={{ color: colors.text }}>
              {greeting.subtitle}
            </h2>
            <p
              className="greeting-text-p subTitle"
              style={{ color: colors.secondaryText }}
            >
              {greeting.description}
            </p>
            <LinkButtons links={socialMediaDetails} />
          </div>
        </div>
        <div className="greeting-image-div">
          <ManSittingOnDesk />
        </div>
      </div>
    </div>
  );
}

export default GreetingSection;