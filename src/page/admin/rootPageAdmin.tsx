import React from 'react'

interface rootPageAdmin<T> {

}

const rootPageAdmin: React.FC<rootPageAdmin<any>> = ({ ...props }) => {
    return (
        <>
            <header><h1>header admin</h1></header>

            <main>
                {
                    props.children
                }
            </main>

            <footer><h1>footer admin</h1></footer>
        </>
    )
}

export default rootPageAdmin
