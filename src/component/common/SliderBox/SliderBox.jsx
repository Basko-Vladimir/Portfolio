import React from 'react';
import './SliderBox.scss';
import Slider from 'react-slick';
import socNet from '../../../images/socialNetwork.png';
import counter from '../../../images/Counter.png';
import portfolio from '../../../images/portfolio.png';
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
        slidesToShow: window.innerWidth < 760 ? 2 : 3,
        speed: 500,
        dots: !(window.innerWidth < 760),
        vertical: window.innerWidth < 760,
        verticalSwiping: window.innerWidth < 760,
    };
    const projects = [
        {title: 'Social Network', url: socNet, link: 'https://github.com/Basko-Vladimir/IT-incubator-social-network'},
        {title: 'Counter', url: counter, link: 'https://basko-vladimir.github.io/Counter/'},
        {title: 'TodoList', url: todoList, link: 'https://github.com/Basko-Vladimir/Todo-List'},
        {title: 'Portfolio', url: portfolio, link: 'https://basko-vladimir.github.io/Portfolio/'}
    ];

    return (
        <div className={'wrapper'}>
            <Slider {...settings}>
                {projects.map((p, i) => <ProjectItem key={i} link={p.link} url={p.url} title={p.title}/>)}
            </Slider>
        </div>
    )
}

export default SliderBox;