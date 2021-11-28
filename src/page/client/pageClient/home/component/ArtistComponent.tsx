import React from 'react';
import { handleNameArtist } from 'page/client/common/handleName';

interface ArtistComponentIF<T> {
    artists: Array<any>,
}
interface ItemArtistIF<T>{
    first_Name: T,
    last_Name: T,
    image: T,
    gender: boolean,
    birth: T,
    _id: T,
}

const ArtistComponent: React.FC<ArtistComponentIF<any>> = (props) => {

    const artistsTransform = props.artists.slice(0, 20);
    
    return (
        <div className='limit-items'>
            <h4 className="title_all mb-4 " >Nhạc sĩ</h4>
            <input type='checkbox' id='show-all' />
            <label htmlFor='show-all' className='text-show  rounded-2 px-2 ' style={{fontSize:'1rem' , background:"#0c1020",boxShadow:"0 3px 7px rgb(0 0 0 / 80%)",color:"#6ee9ff"}}>Xem thêm</label>
            <label htmlFor='show-all' className='text-hide  rounded-2 px-2 ' style={{fontSize:'1rem' , background:"#0c1020",boxShadow:"0 3px 7px rgb(0 0 0 / 80%)",color:"#6ee9ff"}} >Ẩn bớt</label>
            <div className='items'>
                <section>
                    {artistsTransform.length !== 0 && artistsTransform.map( (item: ItemArtistIF<string>) => (
                        <section style={{display: "flex", flexDirection: "column"}} key={item._id}>
                        <div>
                            <img src={item.image} alt={handleNameArtist(item.first_Name, item.last_Name)} />     
                        </div>
                        <span className="text-center name">{handleNameArtist(item.first_Name, item.last_Name)}</span>
                        </section>
                    ))}
                    
                </section>
            </div>
        </div>
    )
}

export default ArtistComponent
