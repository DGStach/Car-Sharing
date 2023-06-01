import React from "react";
import "./Carousel.css"

export const Carousel = () => {
    const Icons = [
        {adres: require("./Icons/car1.png")},
        {adres: require("./Icons/car2.png")},
        {adres: require("./Icons/car3.png")},
    ];
    const delay = 2500;

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
                    prevIndex === 3 - 1 ? 0 : prevIndex + 1
                ), delay
        );

        return () => {
            resetTimeout();
        };
    }, [index]);

    return (
        <div className="slideShow">
            <div className="slideshowSlider"
                 style={{transform: `translate3d(${-index * 100}%, 0, 0)`}}
            >
                {Icons.map((item, index) => {
                    return <img className="slide" src={item.adres} alt=""/>
                })
                }
            </div>
        </div>
    )
}