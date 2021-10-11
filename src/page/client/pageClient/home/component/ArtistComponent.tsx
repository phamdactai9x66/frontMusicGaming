import React, { useEffect, useState } from 'react';
import artistApi from 'api/ArtistApi';
import { handleNameArtist } from 'page/client/common/handleName';

interface ArtistComponentIF<T> {
    
}
interface ItemArtistIF<T>{
    first_Name: T,
    last_name: T,
    image: T,
    gender: boolean,
    birth: T,
}

const ArtistComponent: React.FC<ArtistComponentIF<any>> = () => {
    const [getArtist, setGetArtist] = useState([]);

    useEffect( () => {
        const getSongs = async () => {
            const { data } = await artistApi.getAll( {_limit: 20} );
            setGetArtist(data);
        }
        getSongs();
    }, []);

    return (
        <div className='limit-items'>
            <h4 className="title_all">Nhạc sĩ</h4>
            <input type='checkbox' id='show-all' />
            <label htmlFor='show-all' className='text-show'>Xem thêm</label>
            <label htmlFor='show-all' className='text-hide'>Ẩn bớt</label>
            <div className='items'>
                <section>
                    {getArtist.length !== 0 && getArtist.map( (item: ItemArtistIF<string>) => (
                        <div><img src={item.image} alt={handleNameArtist(item.first_Name, item.last_name)} /></div>
                    ))}
                    
                </section>
            </div>
        </div>
    )
}

export default ArtistComponent
