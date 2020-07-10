import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Linkedin from "../../assets/linkedin.svg";
import WhatsApp from "../../assets/whatsapp.svg";
import GitHub from "../../assets/github.svg";
import Twitter from "../../assets/twitter.svg";
import Instagram from "../../assets/instagram.svg";

const Section = styled.section`
  display: flex;
  flex-direction: ${props => props.direction};
`;

const Icon = styled.img`
  width: 30px;
  height: 30px;
  margin: 12px 12px;
`;

const SocialIcons = (props) => {
  return (
    <Section direction={props.direction}>
      <a href="https://www.linkedin.com/in/macksonwelton" target="_blank" rel="noopener noreferrer">
        <Icon src={Linkedin} alt="Linkedin" />
      </a>
      <a href="https://api.whatsapp.com/send?phone=5582988758945" target="_blank" rel="noopener noreferrer">
        <Icon src={WhatsApp} alt="WhatsApp" />
      </a>
      <a href="https://github.com/MacksonWelton" target="_blank" rel="noopener noreferrer">
        <Icon src={GitHub} alt="GitHub" />
      </a>
      <Icon src={Twitter} alt="Twitter" rel="noopener noreferrer"/>
      <a href="https://www.instagram.com/macksonwelton" target="_blank" rel="noopener noreferrer">
        <Icon src={Instagram} alt="Instagram" />
      </a>
    </Section>
  )
}

SocialIcons.propTypes = {
  direction: PropTypes.string
}

export default SocialIcons;