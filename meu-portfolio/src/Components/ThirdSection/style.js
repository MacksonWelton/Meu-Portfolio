import styled from 'styled-components';

export const Section = styled.section`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h2`
  width: 100%;
  height: 30px;
  font-size: 25px;
  margin: 45px 0px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.15px;
  text-align: center;
  color: #191958;
`;

export const Content = styled.div`
  width: 400px;
  margin: 0px 2.5% 45px 2.5%;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.32px;
  color: #191958;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  @media screen and (max-width: 930px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
  }
`;

export const TitleContent = styled.h3`
  font-size: 55px;
  margin-bottom: 20px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.32px;
  color: #191958;
`;

export const Text = styled.p`
  width: 247px;
  height: 133px;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.22px;
  color: #191958;
`;