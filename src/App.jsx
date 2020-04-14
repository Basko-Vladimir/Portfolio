import React from 'react';
import './App.css';
import Header from "./component/Header/Header";
import MainInfo from "./component/MainInfo/MainInfo";
import Skills from "./component/Skills/Skills";
import Projects from "./component/Projects/Projects";
import Slogan from "./component/Slogan/Slogan";
import Contacts from "./component/Contacts/Contacts";
import Footer from "./component/Footer/Footer";

class App extends React.Component {

    state = {
        isScrollPage: false
    };

    componentDidMount() {
        window.addEventListener('scroll', this.scrollPage)
    }

    scrollPage = () => {
        if (window.pageYOffset > 99){
            this.setState({isScrollPage: true})
        } else {
            this.setState({isScrollPage: false})
        }
    };

    render() {
        return (
            <div className="App" >
                <div className="portfolio">
                    <Header isScrollPage={this.state.isScrollPage} />
                    <MainInfo isScrollPage={this.state.isScrollPage} />
                    <Projects/>
                    <Skills/>
                    <Slogan/>
                    <Contacts/>
                    <Footer/>
                </div>
            </div>
        );
    }

}

export default App;
