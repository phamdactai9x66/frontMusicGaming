import { BrowserRouter as Router, Route, Switch, NavLink } from "react-router-dom";
import RootClient from "./page/client/rootPageClient";
import RootAdmin from "./page/admin/rootPageAdmin";
import { Provider } from "react-redux";
import storeGlobal, { storePersiser } from './store';
import { PersistGate } from 'redux-persist/integration/react'
import { handlePage, Client, propertyPage, Admin } from "./router";
import { ProtectAdmin, ProtectRoute, CheckLogin } from "auth/index"
import Signin from "./page/client/pageClient/signin/signin";
import Overview from "./page/client/pageClient/personal/index";

function App() {
  return (
    <>
      <Router>
        <Provider store={storeGlobal}>
          <PersistGate loading={null} persistor={storePersiser}>
            <Switch>
              <ProtectAdmin path="/admin" >
                <RootAdmin>
                  <Switch>
                    {handlePage<propertyPage[]>(Admin)}
                  </Switch>
                </RootAdmin>
              </ProtectAdmin>

              <Route path="">
                <RootClient>
                  <Switch>
                    <ProtectRoute path="/signin" component={Signin} exact={false} />
                    <CheckLogin path="/overview" component={Overview} exact={false} />
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
