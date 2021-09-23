import React, { useEffect } from 'react'
import "./home.scss"
interface Home<T> {

}

const Home: React.FC<Home<any>> = ({ ...props }) => {


    return (
        <div>
            <p className="test123">this Home</p>
        </div>
    )
}

export default Home
