import React, { useEffect } from 'react'
import "./home.scss"
interface Home<T> {

}

const Home: React.FC<Home<any>> = ({ ...props }) => {


    return (
        <div>
            <h1 className="test1">test1</h1>
            this Home
        </div>
    )
}

export default Home
