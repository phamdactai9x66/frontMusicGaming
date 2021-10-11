import songApi from 'api/songApi';
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';

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
                        <img src={item.image} alt={item.title} />
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default RecentlyComponent
