import React from 'react';
import {Carousel} from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const CarCarousel = () => {
    const Icons = [
        {adres: require("./Icons/car1.webp"), title: "Toyota Corolla"},
        {adres: require("./Icons/car2.webp"), title: "Seat Arona"},
        {adres: require("./Icons/car3.webp"), title: "Toyota CH-R"},
        {adres: require("./Icons/car4.webp"), title: "Fiat 500"},
        {adres: require("./Icons/car5.webp"), title: "Citroen Jumper"},
        {adres: require("./Icons/car6.webp"), title: "Opel Movano"},
        {adres: require("./Icons/car7.webp"), title: "Tesla Model 3"},
        {adres: require("./Icons/car8.webp"), title: "Toyota Yaris IV"}
    ];

    console.log(Icons[0].adres)

    return (
        <Carousel autoPlay infiniteLoop showArrows>
                {Icons.map((item, index) => {
                    return <div key={index}>
                        <img src={item.adres} alt="1"/>
                        <p className="legend">{item.title}</p>
                    </div>
                })}
        </Carousel>
    );
};

export default CarCarousel;
