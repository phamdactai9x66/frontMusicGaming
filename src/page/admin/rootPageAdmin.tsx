import React from 'react'
import "./admin.scss"
import Header from "../partials/admin/header";
import Footer from "../partials/admin/footer";
import Sidebar from "../partials/admin/sidebar";
import { FiMenu } from 'react-icons/fi';

interface rootPageAdmin<T> {

}

const rootPageAdmin: React.FC<rootPageAdmin<any>> = ({ ...props }) => {
    return (
        <>
        <div>
            <input hidden type="checkbox" name="" className="nav__check" id="nav-input"/> 
            <label className="toggle" htmlFor="nav-input"></label>                              
            <div className="main_admin">  
               <aside>
                 <Sidebar/>  
               </aside>              
                <article className="main_render_admin">
                    <Header />
                    <main>
                        {
                            props.children
                        }
                    </main>
                    <Footer />
                </article>              
            </div>
        </div>
           
        </>
    )
}

export default rootPageAdmin
