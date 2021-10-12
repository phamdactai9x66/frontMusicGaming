import React, { useEffect, useState } from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import categoryApi from '../../../../../api/categoryApi';
import { Link } from 'react-router-dom';
import { MdNavigateNext } from 'react-icons/md';


interface HomeCategory<T> {
    settings_category: object
}
interface CategoryIF {
    _id: string,
    name: string,
    image: string,
    id_Topic: string,
}

const HomeCategory: React.FC<HomeCategory<any>> = ({...props}) => {
    const [categories, setCategories] = useState([]);

    useEffect( () => {
        const getCategories = async () => {
            const { data } = await categoryApi.getAll();
            setCategories(data);
        }
        getCategories();
    }, []);

    return (
        <>
            <h4>Thể loại <MdNavigateNext className="icon" /></h4>
            <div>
                <Slider {...props.settings_category}>
                    {categories.length !== 0 && categories.map( (item: CategoryIF) => (
                        <Link to={`/playlistDetail/${item._id}`} key={item._id}>
                            <div className="box">
                                <img src={item.image} alt={item.name} />
                            </div>
                        </Link>
                    ))}
                </Slider>
            </div>
        </>
    )
}

export default HomeCategory
