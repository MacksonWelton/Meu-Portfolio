import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  flex-wrap: wrap;
  width: 100%;

  @media screen and (max-width: 930px) {
    width: 100%;
  }
`;

export const Figure = styled.figure`
  width: 40%;
  @media screen and (max-width: 930px) {
    width: 100%;
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  margin: 0px;
`;

export const Div = styled.div`
  width: 60%;
  background-color: #5bb9b9;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  align-items: center;

  @media screen and (max-width: 930px) {
    width: 100%;
  }
`;

export const Content = styled.span`
  width: 40%;
  margin: 20% 30% 20% 15%;
  display: flex;
  flex-direction: column;
  color: #ffffff;
  align-content: center;

  @media screen and (max-width: 930px) {
    width: 60%;
    margin: 20% 5% 20% 10%;
  }
`;

export const Title = styled.h2`
  width: 100%;
  font-size: 50px;
  font-family: 'Montserrat';
  font-weight: 800;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.29px;
  color: #ffffff;
`;

export const Subtitle = styled.h3`
  width: 100%;
  margin: 6px 0px;
  font-size: 24px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.32px;
  color: #ffffff;
`;

export const Text = styled.p`
  width: 100%;
  margin: 6px 0px;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.22px;
  color: #ffffff;
  `;