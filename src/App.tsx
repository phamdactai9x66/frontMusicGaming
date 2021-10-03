import { BrowserRouter as Router, Route, Switch, NavLink } from "react-router-dom";
import RootClient from "./page/client/rootPageClient";
import RootAdmin from "./page/admin/rootPageAdmin";
import { Provider } from "react-redux";
import storeGlobal, { storePersiser } from './store';
import { PersistGate } from 'redux-persist/integration/react'

import { handlePage, Client, propertyPage, Admin } from "./router";


function App() {
  return (
    <>
      <Router>
        <Provider store={storeGlobal}>
          <PersistGate loading={null} persistor={storePersiser}>
            <Switch>
              <Route path="/admin" >
                <RootAdmin>
                  <Switch>
                    {handlePage<propertyPage[]>(Admin)}
                  </Switch>
                </RootAdmin>
              </Route>

              <Route path="">
                <RootClient>
                  <Switch>
                    {handlePage<propertyPage[]>(Client)}
                  </Switch>
                </RootClient>
              </Route>
            </Switch>
          </PersistGate>
        </Provider>
      </Router>
    </>
  );
}

export default App;
