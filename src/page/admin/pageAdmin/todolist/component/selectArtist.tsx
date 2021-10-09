import React, { useEffect, useState } from 'react'
import { Select, MenuItem } from "@mui/material";
import { ErrorMessage, Formik } from "formik";
import apiAlbumes from "api/albumApi";
import { HandleGet } from "component/MethodCommon";
import { useFormikContext } from "formik";

interface SelectArtist<T> {

}

const SelectArtist: React.FC<SelectArtist<any>> = ({ ...props }) => {
    const [Artist, setArtist] = useState({ display: false, data: [] });
    const formik = useFormikContext();
    useEffect(() => {
        (async () => {
            if (Artist.display) return
            const query = {};
            const [data, error] = await HandleGet(apiAlbumes.getAll, query);
            // console.log(data)
            if (error) return setArtist(value => ({ ...value, display: true }));
            setArtist(value => ({ ...value, data: data.data }));

        })()
        return () => {
            setArtist(value => ({ ...value, display: true }));
        }
    }, [])
    return (
        <div>
            <b>Artist</b>
            <Select className="select"
                {...formik.getFieldProps('id_Artist')}
                variant="standard">
                {Artist.data.map((currenValue: any, index) => (
                    <MenuItem value={currenValue._id} key={index}>{currenValue.title}</MenuItem>
                ))}
            </Select>
            <ErrorMessage className="err" name="image" />
        </div>
    )
}
export default SelectArtist
