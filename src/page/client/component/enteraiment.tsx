import React from 'react'
import Audio from './audio';

interface Enteraiment<T> {

}

const Enteraiment: React.FC<Enteraiment<any>> = ({ ...props }) => {
    return (
        <>
            <Audio />
        </>
    )
}

export default Enteraiment
