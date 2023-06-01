import React from "react";
import {useState} from "react";
import "./Carousel.css"

export const Carousel = () => {
    const Icons = [
        {adres: require("./Icons/car1.png")},
        {adres: require("./Icons/car2.png")},
        {adres: require("./Icons/car3.png")},
    ];

    const [index, setIndex] = useState(0)

    return (
        <div className="slideShow">
            <div className="slideshowSlider"
                 style={{ transform: `translate3d(${-index * 30}%, 0, 0)` }}
            >
                {Icons.map((item, index)=>{
                    return <img className="slide" src={item.adres} alt=""/>
                })
                }
            </div>
        </div>
    )
}