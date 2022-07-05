import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Carousels.css";
import lo1 from "../Imgs/lo1.jpeg";
import lo2 from "../Imgs/lo2.jpeg";
import lo3 from "../Imgs/lo3.jpeg";
import lo4 from "../Imgs/lo4.jpeg";
import lo5 from "../Imgs/lo5.jpeg";
import lo6 from "../Imgs/lo6.jpeg";

export default function Carousels() {
    return (
        <Carousel>
            {/* <div>
                <img src={lo1} />
            </div>
            <div>
                <img src={lo2} />
            </div>
            <div>
                <img src={lo3} />
            </div> */}
            <div>
                <img src={lo4} />
            </div>
            {/* <div>
                <img src={lo5} />
            </div>
            <div>
                <img src={lo6} />
            </div> */}
        </Carousel>
    );
}
