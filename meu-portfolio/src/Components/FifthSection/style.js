import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  display: flex;
  flex-wrap: wrap;

  .left {
    padding-top: 100px;
    background-color: #99bbdd;

    @media screen and (max-width: 930px) {
      padding-top: 41px;
    }
  }

  .center {
    background-color: #5589ab;

    @media screen and (max-width: 930px) {
      padding-top: 100px;
    }
  }

  .right {
    padding-top: 100px;
    background-color: #99bbdd;
  }
`;

export const Content = styled.div`
  width: 33.33%;
  padding: 41px 70px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;

  @media screen and (max-width: 1200px) {
    width: 50%;
  }
  

  @media screen and (max-width: 930px) {
    width: 100%;
  }

  #center-button {
    background-color: #99bbdd;
  }

  #hidde-more-project {
    background-color: #191958;

    @media screen and (max-width: 930px) {
    display: none;
    }
  }

  #show-more-project {
    display: none;

    @media screen and (max-width: 930px) {
    display: inline-block;
    background-color: #191958;
    }
  }

  #hidde-controlled {
    @media screen and (min-width: 930px) {
    display: inline-block;
    }
  }

  #show-controlled {
    @media screen and (max-width: 930px) {
    display: inline-block;
    }
  }
`;

export const Title = styled.h2`
  font-size: 25px;
  display: none;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.15px;
  text-align: center;
  color: #191958;
  margin-bottom: 29px;
`;

export const TitleContent = styled.h3`
  height: 52px;
  font-size: 42px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.25px;
  text-align: center;
  color: #191958;
`;

export const SubtitleContent = styled.h4`
  font-size: 21px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.28px;
  text-align: center;
  color: #191958;
  margin-bottom: 23px;
`;

export const Img = styled.img`
  width: 250px;
  height: 480px;
  margin-bottom: 41px;
`;

export const Text = styled.p`
  margin-bottom: 20px;
  font-size: 15px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.16px;
  text-align: center;
  color: #191958;
`;

export const Button = styled.button`
  margin: 32px 2px 0px 2px;
  padding: 5px 30px 7px 31px;
  border-radius: 8px;
  border: none;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
  background-color: #5589ab;
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

export const BoxButtons = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;