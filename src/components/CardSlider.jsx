import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProjectCard from "./ProjectCard";
import projects from '../data/projects.json'

export default function SimpleSlider() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
        ]
    };
    return (
        <div className="slider-container">

            <Slider {...settings}>
                {projects.map((project) => {
                    return <ProjectCard key={project.id} id={project.id} title={project.title} description={project.description} skills={project.skills} image={project.image} site={project.site} repo={project.repo} />;
                })}
            </Slider>
        </div>
    );





}