import React, { useEffect, useState } from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import categoryApi from '../../../../../api/categoryApi';
import { Link } from 'react-router-dom';

import { AiOutlineDownload,AiOutlineLink } from 'react-icons/ai';
import { FiPlayCircle } from 'react-icons/fi';
import { HiOutlineDotsCircleHorizontal } from 'react-icons/hi';
import { MdNavigateNext } from 'react-icons/md';
import {  BiHeart } from 'react-icons/bi';
import { Select, MenuItem } from "@mui/material"

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
            <div>
                <Slider {...props.settings_category}>
                    {categories.length !== 0 && categories.map( (item: CategoryIF) => (
                        <Link to={`/playlistDetail/${item._id}`} key={item._id}>
                             <div className="box">
                            <figure>
                                <img src={item.image} alt={item.image} />
                            </figure>
                            <div className="icon-box">
                                <div>
                                    <BiHeart className="icon" />
                                    <FiPlayCircle className="icon" />
                                    <HiOutlineDotsCircleHorizontal className="icon" />
                                </div>
                            </div>
                            <Select className="option">
                                <MenuItem>
                                    <AiOutlineDownload/> Tải xuống
                                    </MenuItem>
                                <MenuItem>
                                    <AiOutlineLink/> Sao chép link
                                    </MenuItem>
                            </Select>
                            <h6>{item.name}</h6>
                        </div>
                        </Link>
                    ))}
                </Slider>
            </div>
        </>
    )
}

export default HomeCategory
