import songApi from 'api/songApi';
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AiOutlineDownload,AiOutlineLink } from 'react-icons/ai';
import { FiPlayCircle } from 'react-icons/fi';
import { HiOutlineDotsCircleHorizontal } from 'react-icons/hi';
import {  BiHeart } from 'react-icons/bi';
import { Select, MenuItem } from "@mui/material"
interface RecentlyComponentIF<T> {
    settings_category: object
}

const RecentlyComponent: React.FC<RecentlyComponentIF<any>> = ({...props}) => {
    const [songs, setSongs] = useState([]);

    useEffect( () => {
        const getSongs = async () => {
            const { data } = await songApi.getAll( {_limit: 20, view: 'desc', date: "desc"} );
            setSongs(data);
        }
        getSongs();
    }, []);
    return (
        <div>
            <Slider {...props.settings_category}>
                {songs.length !== 0 && songs.map( (item: any) => (
                    <div className="box" key={item._id}>
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
                ))}
            </Slider>
        </div>
    )
}

export default RecentlyComponent
