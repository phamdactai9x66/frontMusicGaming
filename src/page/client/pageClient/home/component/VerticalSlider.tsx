import React, { useEffect, useState } from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slideApi from '../../../../../api/slideApi';

interface VerticalSlider<T> {
    settings_banner: object
}
interface SlideIF {
    _id: string,
    name: string,
    image: string,
    content: string,
    id_Songs: string
}

const VerticalSlider: React.FC<VerticalSlider<any>> = ({...props}) => {
    const [sliders, setSliders] = useState([]);

    useEffect( () => {
        const getSliders = async () => {
            const { data } = await slideApi.getAll({});
            setSliders(data);
        }
        getSliders();
    }, []);

    return (
        <div>
            <Slider {...props.settings_banner}>
                {sliders.length !== 0 && sliders.map( (item: SlideIF) => (
                    <div key={item._id}>
                        <img height={362} src={item.image} alt={item.name} />
                    </div>    
                ))}
            </Slider>
        </div>
    )
}

export default VerticalSlider
