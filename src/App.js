import React from 'react';
import './App.css';
import Header from "./component/Header/Header";
import MainInfo from "./component/MainInfo/MainInfo";
import Skills from "./component/Skills/Skills";
import Projects from "./component/Projects/Projects";
import Slogan from "./component/Slogan/Slogan";
import Contacts from "./component/Contacts/Contacts";
import Footer from "./component/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <MainInfo/>
      <Skills/>
      <Projects/>
      <Slogan/>
      <Contacts/>
      <Footer/>
    </div>
  );
}

export default App;
