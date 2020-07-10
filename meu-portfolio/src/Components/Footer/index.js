import React from "react";
import styled from "styled-components";

const Section = styled.section`
  width: 100%;
  background: #5589ab;
  padding: 21px 60px;
`;

const Text = styled.p`
  font-size: 18px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.24px;
  color: #ffffff;
`;

const Footer = () => {
  return (
    <Section>
      <Text>© 2020 Mackson Welton Dias da Silva</Text>
    </Section>
  )
}

export default Footer;