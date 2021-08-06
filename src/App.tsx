import React from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink } from "react-router-dom";
import RootClient from "./page/client/rootPageClient";
import RootAdmin from "./page/admin/rootPageAdmin";
import { Provider } from "react-redux";
import store from './store';
import { handlePage, Client, propertyPage, Admin } from "./router";


function App() {
  return (
    <>
      <Provider store={store}>
        <Router>

          <Switch>

            <Route path="/admin" exact={true}>
              <RootAdmin>
                <Switch>
                  {handlePage<propertyPage[]>(Admin)}
                </Switch>
              </RootAdmin>
            </Route>

            <Route path="" exact={false}>
              <RootClient>
                <Switch>
                  {handlePage<propertyPage[]>(Client)}

                </Switch>
              </RootClient>
            </Route>
          </Switch>

        </Router>
      </Provider>

    </>
  );
}

export default App;
