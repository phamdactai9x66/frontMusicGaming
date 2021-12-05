import React, { useEffect, useState, useRef } from 'react';
import { List, ListItem, ListItemAvatar, Avatar } from '@mui/material';
import { useSelector } from "react-redux";
import { formStateAudio } from "redux/audio/stateAudio"
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { InputAdornment } from '@mui/material';
import Search from '@mui/icons-material/Search';
interface SearchSongs<T> {
    addSongToRoom: (T: string) => void
}

const SearchSongs: React.FC<SearchSongs<any>> = ({ addSongToRoom, ...props }) => {
    const state = useSelector<{ audio: any }>(state => state.audio) as formStateAudio;
    const [listSong, setListSong] = useState<any[]>([]);
    const [inputSearch, setinputSearch] = useState('')
    useEffect(() => {
        if (inputSearch.length >= 2) {
            const listSongs: any = Object.entries(state.likstStaticAudio).map((current: any) => current[1]);
            const findSong = listSongs.filter((current: any) => {
                return (current.title as string).indexOf(inputSearch) !== -1
            })
            return setListSong(findSong);
        }
        setListSong([])
    }, [inputSearch])
    // const findSong = (): JSX.Element[] => {
    //     return listSong.map((current: any, index: number) => {
    //         // console.log(current);
    //         return (
    //             <ListItem
    //                 style={{ display: "flex", cursor: "pointer" }}
    //                 key={index}
    //                 onClick={() => { addSongToRoom(current._id) }}
    //             >
    //                 <ListItemAvatar style={{ marginLeft: "-2rem" }}>
    //                     <Avatar alt="Remy Sharp" sx={{ width: "2.1rem", height: "2.1rem" }} src={current?.image} />
    //                 </ListItemAvatar>
    //                 <div className="key_name">{current?.title}</div>
    //             </ListItem>

    //         )
    //     })
    // }
    const searchSong = (event: Event | any): void => {
        const getValue = (event.target as HTMLInputElement).value;
        setinputSearch(getValue)
        // console.log(getValue);
    }

    return (
        <>
            {/* <div className="search_music">
                <i className="fa fa-search" aria-hidden="true"></i>
                <input type="text" placeholder="Search..." />
                <ul className="results" >
                    <List >
                        {findSong()}
                    </List>

                </ul>
            </div> */}
            <Autocomplete
                id="search-select"
                fullWidth
                options={listSong}
                getOptionLabel={(current) => current.title}
                renderOption={(props: any, current: any) => (
                    <div {...props}>
                        <ListItem
                            style={{ display: "flex", cursor: "pointer" }}
                            onClick={() => { addSongToRoom(current?._id) }}
                        >
                            <ListItemAvatar style={{}}>
                                <Avatar alt="Remy Sharp" sx={{ width: "2.1rem", height: "2.1rem" }} src={current?.image} />
                            </ListItemAvatar>
                            <div className="key_name">{current?.title}</div>
                        </ListItem>
                    </div>
                )}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        label="Search..."
                        variant="standard"
                        value={inputSearch} onChange={searchSong}
                    />
                )}
            />
        </>
    )
}

export default SearchSongs
