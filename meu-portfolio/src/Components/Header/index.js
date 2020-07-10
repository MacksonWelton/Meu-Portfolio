import React from "react";
import * as S from "./style";

const Header = () => {
  return (
    <S.Wrapper>
      <S.Title><a href="#principal">Mackson Welton</a></S.Title>
      <S.Nav>
        <S.Link href="#quem-sou-eu">quem sou eu</S.Link>
        <S.Link href="#projetos">projetos</S.Link>
        <S.Link href="#contato">contato</S.Link>
      </S.Nav>
    </S.Wrapper>
  )
}

export default Header;