import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  background-color: #0f4271;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 69px 0px;
`;

export const Content = styled.span`
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: left;

  @media screen and (max-width: 930px) {
    width: 100%;
    padding: 20px;
  }
`;

export const Title = styled.h2`
  margin: 20px 0px;
  font-size: 42px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.32px;
  color: #ffffff;
`;

export const Text = styled.p`
  margin: 10px 0px 30px;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.16px;
  color: #ffffff;
`;

export const ListSkills = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Separator = styled.span`
  width: 3px;
  height: 14px;
  margin-right: 5px;
  display: inline-block;
  background-color: #ffffff;
`;

export const Skill = styled.p`
  height: 18px;
  margin: 5px 0px;
  display: flex;
  font-size: 14px;
  margin-right: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  color: #ffffff;
`;

export const Button = styled.button`
  margin: 32px 0px;
  padding: 5px 30px 7px 31px;
  border-radius: 8px;
  border: none;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
  background-color: #99bbdd;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.28px;
  text-align: center;
  color: #ffffff;
  cursor: pointer;
`;

export const Img = styled.img`
  width: 30%;
  margin: 10px;
  padding: 1px;

  @media screen and (max-width: 930px) {
    width: 80%;
  }
`;