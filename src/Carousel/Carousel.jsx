import React from "react";
import "./Carousel.css"

export const Carousel = () => {
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
    const delay = 2500;
    const iconLength = Icons.length

    const [index, setIndex] = React.useState(0);
    const timeoutRef = React.useRef(null);

    function resetTimeout() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }

    React.useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
            () =>
                setIndex((prevIndex) =>
                    prevIndex === iconLength - 1 ? 0 : prevIndex + 1
                ), delay
        );

        return () => {
            resetTimeout();
        };
    }, [index]);

    return (
        <div className="slideShow">
            <div className="slideshowSlider"
                 style={{transform: `translate3d(${-index * 200}px, 0, 0)`}}
            >
                {Icons.map((item, index) => {
                    return <div className="slide" >
                        <img className="imageSlide" src={item.adres} alt=""/>
                        <p>{item.title}</p>
                    </div>

                })
                }
            </div>
        </div>
    )
}