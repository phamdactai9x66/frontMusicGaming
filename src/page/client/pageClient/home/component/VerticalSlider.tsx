import React, { useEffect, useState } from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slideApi from '../../../../../api/slideApi';
import { playSong } from "redux/audio/actionAudio";
import { useDispatch } from 'react-redux';

interface VerticalSliderIF<T> {
    settings_banner: object
}
interface SlideIF {
    _id: string,
    name: string,
    image: string,
    content: string,
    id_Songs: string
}

const VerticalSlider: React.FC<VerticalSliderIF<any>> = ({...props}) => {
    const [sliders, setSliders] = useState([]);
    const dispatch = useDispatch();

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
                        <img height={362} src={item.image} onClick={() => dispatch(playSong({_id: item.id_Songs}))} alt={item.name} />
                    </div>    
                ))}
            </Slider>
        </div>
    )
}

export default VerticalSlider
