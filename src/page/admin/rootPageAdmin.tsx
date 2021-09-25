import React from 'react'
import Header from "../partials/admin/header";
import Footer from "../partials/admin/footer";
interface RootPageAdmin<T> {

}

const RootPageAdmin: React.FC<RootPageAdmin<any>> = ({ ...props }) => {
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

export default RootPageAdmin
