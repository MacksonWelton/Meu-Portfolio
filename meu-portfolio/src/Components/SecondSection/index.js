import React from "react";
import * as S from "./style";
import Notebook from "../../assets/notebook.png";
import Curriculo from "../../assets/Currículo.pdf";



const SecondSection = () => {

  const hardSkills = [
    "Git e GitHub", "HTML5", "CSS", "JavaScript", "React", "Redux",
    "TypeScript", "Node", "Express", "Jest", "MySQL", "AWS", "Firebase"
  ];

  const cvDownload = () => {
    window.open(Curriculo);
  }

  return (
    <S.Section id="quem-sou-eu">
      <S.Content>
        <S.Title>Sobre mim</S.Title>
        <S.Text>
          Cursando graduação tecnológica em Coding, graduado em administração com um
          pouco de experiência em marketing digital, técnico em informática e formação
          em desenvolvimento web full stack por meio de bootcamp intensivo com 1000h de
          aprendizado e projetos práticos com foco na empregabilidade.
        </S.Text>
        <S.ListSkills>
          {hardSkills.map((item, index) => {
            return <S.Skill key={index}><S.Separator /> {item}</S.Skill>
          })}
        </S.ListSkills>
        <div>
          <S.Button onClick={cvDownload}>CV em PDF</S.Button>
        </div>
      </S.Content>
      <S.Img src={Notebook} />
    </S.Section>
  )
}

export default SecondSection;