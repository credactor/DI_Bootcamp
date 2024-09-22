import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const CarouselDemo = (props) => {
    return (
        <Carousel>
            {props.map ((item, index) => {
                return (
                    <div>
                        <img src={item.url} />
                        <p key={index} className="legend">{item.name}</p>
                    </div>)
        })}
        </Carousel>
    )
}
export default CarouselDemo;