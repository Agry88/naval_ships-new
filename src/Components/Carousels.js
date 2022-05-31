import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Carousels.css";

export default function Carousels() {
    return (
        <Carousel>
            <div>
                <img src="./Imgs/lo1.jpeg" />
            </div>
            <div>
                <img src="./Imgs/lo2.jpeg" />
            </div>
            <div>
                <img src="./Imgs/lo3.jpeg" />
            </div>
            <div>
                <img src="./Imgs/lo4.jpeg" />
            </div>
            <div>
                <img src="./Imgs/lo5.jpeg" />
            </div>
            <div>
                <img src="./Imgs/lo6.jpeg" />
            </div>
        </Carousel>
    );
}
