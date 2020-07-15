import React from 'react';
import './SliderBox.scss';
import Slider from 'react-slick';
import socNet from '../../../images/socialNetwork.png';
import counter from '../../../images/Counter.png';
import cards from '../../../images/cards.png';
import todoList from '../../../images/todoList.png'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css'
import ProjectItem from '../../Projects/ProjectItem/ProjectItem';


function SliderBox() {
    const settings = {
        className: 'center',
        centerMode: true,
        infinite: true,
        centerPadding: 0,
        slidesToShow: window.innerWidth < 760 ? 1 : window.innerWidth < 1100 ? 2 : 3,
        speed: 500,
        dots: window.innerWidth > 760
    };
    const projects = [
        {title: 'Social Network', url: socNet, link: 'https://github.com/Basko-Vladimir/IT-incubator-social-network',
         projectDescription: 'This project is a social network, created using such technologies as React, Redux,' +
             ' react-redux, redux-thunk, react-router-dom, reselect, redux-from, axios'
        },
        {title: 'Counter', url: counter, link: 'https://basko-vladimir.github.io/Counter/',
            projectDescription: 'This application is a counter with settings possibility of maximal and initial' +
                ' values'
        },
        {title: 'TodoList (in progress)', url: todoList, link: 'https://github.com/Basko-Vladimir/Todo-List',
            projectDescription: 'This application let to create  different todo list. Its created using TypeScript,' +
                ' React, redux etc. (in progress)'
        },
        {title: 'Training cards (in progress)', url: cards, link: 'https://basko-vladimir.github.io/Portfolio/',
            projectDescription: 'This application is training simulator. You have to create ' +
                'your account and then you can create training cards with questions, answers and evaluate them.' +
                ' In this project use TypeScript, React, Redux, Scss and other technologies. (in progress) '
        }
    ];

    return (
        <div className={'wrapper'}>
            <Slider {...settings}>
                {projects.map((p, i) => <ProjectItem key={i} link={p.link} url={p.url}
                                                     title={p.title} projectDescription={p.projectDescription}/>)}
            </Slider>
        </div>
    )
}

export default SliderBox;