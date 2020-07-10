import React from "react";
import * as S from "./style";
import Photo from "../../assets/foto.jpg";
import SocialIcons from "../SocialIcons";

const FirstSection = () => {
  return (
    <S.Section id="principal">
      <S.Figure>
        <S.Img src={Photo} alt="Mackson Welton" />
      </S.Figure>
      <S.Div>
        <S.Content>
          <S.Title>Eu sou</S.Title>
          <S.Title>Mackson Welton</S.Title>
          <S.Subtitle>Desenvolvedor Web Full Stack</S.Subtitle>
          <S.Text>Apaixonado por tecnologia e programação.</S.Text>
        </S.Content>
        <SocialIcons id="hiddeSocialIcons" direction="column" />
      </S.Div>
    </S.Section>
  )
}

export default FirstSection;