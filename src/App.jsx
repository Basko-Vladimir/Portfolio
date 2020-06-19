import React from 'react';
import './App.scss';
import Header from './component/Header/Header';
import MainInfo from './component/MainInfo/MainInfo';
import Skills from './component/Skills/Skills';
import Projects from './component/Projects/Projects';
import Slogan from './component/Slogan/Slogan';
import Contacts from './component/Contacts/Contacts';
import Footer from './component/Footer/Footer';
import {connect} from 'react-redux';
import Preloader from './component/common/Preloader/Preloader';

class App extends React.Component {
    state = {
        isScrollPage: false
    };

    componentDidMount() {
        window.addEventListener('scroll', this.scrollPage)
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.scrollPage)
    }

    scrollPage = () => {
        if (window.pageYOffset > 99) {
            this.setState({isScrollPage: true})
        } else {
            this.setState({isScrollPage: false})
        }
    };

    render() {
        return (
            <div className="App">
                <div className="portfolio">
                    <Header isScrollPage={this.state.isScrollPage}/>
                    <MainInfo isScrollPage={this.state.isScrollPage}/>
                    <Projects/>
                    <Skills/>
                    <Slogan/>
                    <Contacts/>
                    <Footer/>
                    {this.props.isLoading && <Preloader/>}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isLoading: state.portfolio.isLoading
    };
};

export default connect(mapStateToProps, null)(App);
