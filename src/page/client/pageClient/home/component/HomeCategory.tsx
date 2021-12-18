import React, { useEffect, useState } from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
import topicApi from 'api/topicApi';

interface HomeCategoryIF<T> {
    settings_category: object
}
interface CategoryIF {
    _id: string,
    name: string,
    image: string,
    id_Topic: string,
}

const HomeCategory: React.FC<HomeCategoryIF<any>> = ({ ...props }) => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const getCategories = async () => {
            const { data } = await topicApi.getAll({ _limit: 20 });
            setCategories(data);
        }
        getCategories();
    }, []);

    return (
        <>
            <div>
                <Slider {...props.settings_category}>
                        {categories.length !== 0 && categories.map((item: CategoryIF) => (

                            <Link to={{
                                pathname: '/subCategory',
                                // search: `?idTopic=${item._id}`,
                                state: item,
                                // searchParams: `?idTopic=${item._id}&id_subCate=123`
                            }} key={item._id}>

                                <div className="box">
                                    <figure>
                                        <img src={item.image} alt={item.image} />
                                    </figure>
                                    <div className="icon-box_category">
                                        <div>
                                            <h6 className="icon " style={{ fontSize: "1.3rem" }}>{item.name}</h6>
                                        </div>
                                    </div>
                                </div>
                            </Link>

                        ))}
                </Slider>
            </div>
        </>
    )
}

export default HomeCategory
