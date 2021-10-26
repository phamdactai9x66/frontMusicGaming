import React, { useEffect, useState } from 'react';
import { handleNameArtist } from 'page/client/common/handleName';

interface ArtistComponentIF<T> {
    artists: Array<any>,
}
interface ItemArtistIF<T>{
    first_Name: T,
    last_name: T,
    image: T,
    gender: boolean,
    birth: T,
    _id: T,
}

const ArtistComponent: React.FC<ArtistComponentIF<any>> = (props) => {

    const artistsTransform = props.artists.slice(0, 20);

    return (
        <div className='limit-items'>
            <h4 className="title_all">Nhạc sĩ</h4>
            <input type='checkbox' id='show-all' />
            <label htmlFor='show-all' className='text-show'>Xem thêm</label>
            <label htmlFor='show-all' className='text-hide'>Ẩn bớt</label>
            <div className='items'>
                <section>
                    {artistsTransform.length !== 0 && artistsTransform.map( (item: ItemArtistIF<string>) => (
                        <div key={item._id}><img src={item.image} alt={handleNameArtist(item.first_Name, item.last_name)} /></div>
                    ))}
                    
                </section>
            </div>
        </div>
    )
}

export default ArtistComponent
