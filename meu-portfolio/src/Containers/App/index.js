import React from 'react';
import Header from "../../Components/Header";
import FirstSection from '../../Components/FirstSection';
import SecondSection from '../../Components/SecondSection';
import styled from 'styled-components';
import ThirdSection from '../../Components/ThirdSection';
import FourthSection from '../../Components/FourthSection';
import FifthSection from '../../Components/FifthSection';
import SixthSection from '../../Components/SixthSection';
import Footer from '../../Components/Footer';
import Head from '../../Components/Head';

const Main = styled.main`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`

const App = () => {
  return (
    <div>
      <Head 
      title="Mackson Welton - Desenvolvedor Web Full Stack" 
      description="Desenvolvimento de sites e sistemas web utilizando tecnologias modernas, como: HTML5, CSS3, JavaScript, 
      React, Redux, TypeScript, Node, Express, MySQL, AWS e Firebase."
      keywords="Programador WEB, Desenvolvedor WEB, HTML, CSS, JavaScript, React, Node, TypeScript"
      author="Mackson Welton Dias da Silva"
      />
      <Header/>
      <Main>
        <FirstSection/>
        <SecondSection/>
        <ThirdSection/>
        <FourthSection/>
        <FifthSection/>
        <SixthSection/>
        <Footer/>
      </Main>
    </div>
  );
}

export default App;