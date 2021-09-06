import React from 'react'

interface Home<T> {

}

const Home: React.FC<Home<any>> = ({ ...props }) => {
    return (
        <>
            this Home admin
        </>
    )
}

export default Home
