import React from 'react'
import Header from "../partials/admin/header";
import Footer from "../partials/admin/footer";
interface rootPageAdmin<T> {

}

const rootPageAdmin: React.FC<rootPageAdmin<any>> = ({ ...props }) => {
    return (
        <>
            <Header />

            <main>
                {
                    props.children
                }
            </main>

            <Footer />
        </>
    )
}

export default rootPageAdmin
