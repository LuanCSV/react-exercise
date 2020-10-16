import React, { Component } from 'react';
import Slider from 'react-slick';
import slides from './slides.json';
import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import './styles.css';


console.log(slides);

export default class SimpleSlider extends Component {
    render() {
        const settings = {
            accessibility: true,
            adaptativeHeight: false,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 4000,
            className: 'simple-slider-slide',
            dots: true,
            draggable: true,
            easing: 'ease-in-out',
            infitine: true,
            speed: 500, 
            slidesToShow: 1,
            slidersToScroll: 1,
            swipeToSlider: true
        };
    
        return (
            <div className="mega-ultra-slider">
                <h2>Mega ultra slider</h2>
                <Slider {...settings}>
                    {
                        slides.map((item, index) => {
                            return (
                                <img
                                    key={index}
                                    src={item.imgSrc}
                                    alt={`Esse e o slide ${item.id+1}`}
                                    height="auto"
                                    width="100%"
                                />
                            )
                        })
                    }
                </Slider>
            </div>
        )
    }
}