import React from 'react';
import * as S from "./style";

const ThirdSection = () => {
  return (
    <S.Section>
      <S.Title>Meus conhecimentos</S.Title>
      <S.Content>
        <S.TitleContent>Front-end</S.TitleContent>
        <S.Text>
          Desenvolvimento de aplicações
          web utilizando HTML, CSS e
          JavaScript.

          Criação de sites responsivos
          seguindo princípio de
          Mobile First.
          </S.Text>
      </S.Content>
      <S.Content>
        <S.TitleContent>Back-end</S.TitleContent>
        <S.Text>
          Aplicações utilizando NodeJS,
          Typescript e MySQL.
          Criação de API´s para
          comunicação com front-end
          seguindo princípio de Clean Code.
        </S.Text>
      </S.Content>
    </S.Section>
  )
}


export default ThirdSection;
