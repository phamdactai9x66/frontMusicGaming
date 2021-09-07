import React from 'react'
import "./admin.scss"
import Header from "../partials/admin/header";
import Footer from "../partials/admin/footer";
import Sidebar from "../partials/admin/sidebar";

interface rootPageAdmin<T> {

}

const rootPageAdmin: React.FC<rootPageAdmin<any>> = ({ ...props }) => {
    return (
        <>
            <section className="main_admin">
               <Sidebar/>
                <section>
                    <Header />
                    <main>
                        {
                            props.children
                        }
                    </main>
                    <Footer />
                </section>
            </section>
        </>
    )
}

export default rootPageAdmin
