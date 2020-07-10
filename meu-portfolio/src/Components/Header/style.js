import styled from "styled-components";

export const Wrapper = styled.header`
  width: 100%;
  height: 70px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: center;
  padding: 19px 32px;
  position: fixed;
  top: 0;
  background-color: #ffffff;

  @media screen and (max-width: 930px) {
    padding: 19px 10px;
  }
`;

export const Title = styled.h1`
  display: flex;
  align-items: center;
  font-size: 21px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.28px;
  color: #191958;
  a {
    text-decoration: none;
  }

  @media screen and (max-width: 930px) {
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;

export const Nav = styled.nav`
  display: flex;
  margin-right: 17px;

  @media screen and (max-width: 930px) {
    width: 100%;
  }
`;

export const Link = styled.a`
  margin-left: 32px;
  color: #191958; 
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.22px;
  text-align: center;
  color: #191958;
  text-decoration: none;
`;