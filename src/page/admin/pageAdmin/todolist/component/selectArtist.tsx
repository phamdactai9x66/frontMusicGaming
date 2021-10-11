import React, { useEffect, useState } from 'react'
import { Select, MenuItem } from "@mui/material";
import { ErrorMessage, Formik } from "formik";
import ArtistApi from "api/ArtistApi";
import { HandleGet, tranFormData } from "component/MethodCommon";
import { useFormikContext } from "formik";
import { SelectField } from "component/customField/index";
interface SelectArtist<T> {

}

const SelectArtist: React.FC<SelectArtist<any>> = ({ ...props }) => {
    const [Artist, setArtist] = useState({ display: false, data: [] });
    const formik = useFormikContext();
    useEffect(() => {
        (async () => {
            if (Artist.display) return
            const query = {};
            const [data, error] = await HandleGet(ArtistApi.getAll, query);
            if (error) return setArtist(value => ({ ...value, display: false }));
            setArtist(value => ({ ...value, data: data.data }));

        })()
        return () => {
            setArtist(value => ({ ...value, display: false }));
        }
    }, [(formik?.values as any).id_Artist])
    return (
        <div>
            <SelectField name="id_Artist" getId="id_Artist" label="Artist"
                data={tranFormData(Artist.data, 'value', 'first_Name', 'last_Name')}
                other={{ variant: 'standard' }}
            />
        </div>
    )
}
export default SelectArtist
