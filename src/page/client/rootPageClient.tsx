import React from 'react'
import "./client.scss"
import { RouteComponentProps } from "react-router-dom";
import Header from "../partials/client/header";
import Footer from "../partials/client/footer";
import Sidebar from '../partials/client/sidebar';
interface RootPageClient<T> {

}

const RootPageClient: React.FC<RootPageClient<any>> = ({ ...props }) => {
    return (
        <>
        <div className="container-client">
          <div className="container-main">
              <aside>
                  <Sidebar />
              </aside>
              <article>
              <Header />
                    <main>
                        {props.children}
                    </main>
              </article>
            </div>
             <Footer />
        </div>
        </>
    )
}

export default RootPageClient
