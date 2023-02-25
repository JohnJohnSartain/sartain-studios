import "./link-buttons.css";
import styled from "styled-components";
import colors from "../../../colors";

const IconWrapper = styled.span`
  i {
    background-color: ${(props) => props.backgroundColor};
  }
  &:hover i {
    background-color: ${() => colors.text};
    transition: 0.3s ease-in;
  }
`;

function LinkButtons({ links }) {
  return (
    <div className="social-media-div">
      {links.map((link, key) => {
        return (
          <a
            href={link.link}
            className={`icon-button`}
            target="_blank"
            rel="noopener noreferrer"
            key={key}
          >
            <IconWrapper {...link}>
              <i className={`fab ${link.icon}`}></i>
            </IconWrapper>
          </a>
        );
      })}
    </div>
  );
}

export default LinkButtons;