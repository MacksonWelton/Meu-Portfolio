import React from "react";
import Astromatch from "../../assets/Astromatch.png";
import Ifuture from "../../assets/iFuture.png";
import Spotenu from "../../assets/Spotenu.png";
import * as S from "./style";

const FifthSection = () => {

  const openGithub = (project) => {
    window.open(`https://github.com/MacksonWelton/${project}`);
  }

  return (
    <S.Section id="projetos">
      <S.Content className="left">
        <S.Title id="show-controlled">Meus projetos</S.Title>
        <S.Img src={Astromatch} />
        <S.TitleContent>Astromatch</S.TitleContent>
        <S.SubtitleContent>Front-end</S.SubtitleContent>
        <S.Text>
          Projeto consiste em uma aplicação similar ao Tinder no qual o usuário poderá selecionar um pretendente
          que aparece em sua tela clicando no botão com o ícone de coração ou ingorar e passar para outro clicando
          no x vermelho. A aplicação poderá ser resetada clicando no botão Limpar swipes e matches.
        </S.Text>
        <S.Button onClick={() => openGithub("Astromatch")}>ver no GitHub</S.Button>
      </S.Content>
      <S.Content className="center">
        <S.Title id="hidde-controlled">Meus projetos</S.Title>
        <S.Img src={Ifuture} />
        <S.TitleContent>iFuture</S.TitleContent>
        <S.SubtitleContent>Front-end</S.SubtitleContent>
        <S.Text>
          Projeto consiste em uma aplicação que permite que o usuário ao fazer login ou cadastrar-se, pesquisar,
          selecionar um restaurante, escolher um ou mais pratos disponíveis e concluir sua compra no carrinho.
        </S.Text>
        <S.Button id="center-button" onClick={() => openGithub("iFuture")}>ver no GitHub</S.Button>
        <S.Button id="hidde-more-project" onClick={() => openGithub("")}>mais projetos</S.Button>
      </S.Content>
      <S.Content className="right">
        <S.Img src={Spotenu} />
        <S.TitleContent>Spotenu</S.TitleContent>
        <S.SubtitleContent>Full Stack</S.SubtitleContent>
        <S.Text>
          Projeto consiste em uma aplicação de música na qual é possível se cadastrar como ouvinte gratuito, pagante ou 
          banda e ter acesso a recursos, como ouvir músicas, pesquisar músicas, criar playlists e torná-las colaborativas, 
          criar albums, adicionar gêneros musicais e muito mais.
        </S.Text>
        <S.BoxButtons>
          <S.Button onClick={() => openGithub("frontend-spotenu")}>front-end GitHub</S.Button>
          <S.Button onClick={() => openGithub("backend-spotenu")}>back-end GitHub</S.Button>
        </S.BoxButtons>
        <S.Button id="show-more-project" onClick={() => openGithub("")}>mais projetos</S.Button>
      </S.Content>
    </S.Section>
  )
}

export default FifthSection;