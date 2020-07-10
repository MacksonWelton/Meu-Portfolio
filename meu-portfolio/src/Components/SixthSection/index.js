import React from "react";
import * as S from "./style";
import SocialIcons from "../SocialIcons";



const SixthSection = () => {
  return (
    <S.Section id="contato">
      <S.Content>
        <S.Title>Contrate-me</S.Title>
        <S.Text>
          Procuro oportunidade de trabalho onde eu possa aprender,
          me desenvolver e evoluir na minha carreia profissional.
            <br /><br />
          E-mail para contato: mackson.welton@gmail.com
          <br/>
          Celular: (82) 98875-8945
        </S.Text>
        <SocialIcons />
      </S.Content>
    </S.Section>
  )
}

export default SixthSection;