import React from "react";
import "./Slider.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import socNet from "../../../images/socialNetwork.png";
import ProjectItem from "../../Projects/ProjectItem/ProjectItem";
import counter from "../../../images/Counter.png";
import portfolio from "../../../images/portfolio.png";

const SliderBox = () => {
    const settings = {
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 500,
        dots: true
    };

    return (
        <div className={'wrapper'}>
            <Slider {...settings}>
                <ProjectItem link={socNet} projectName={'Social Network'}/>
                <ProjectItem link={counter} projectName={'Counter'}/>
                <ProjectItem link={portfolio} projectName={'Portfolio'} />
                <ProjectItem link={portfolio} projectName={'Portfolio'} />
            </Slider>
        </div>
    )
};

export default SliderBox;