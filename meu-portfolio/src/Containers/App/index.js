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

const Main = styled.main`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`

const App = () => {
  return (
    <div>
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