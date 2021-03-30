import { Switch, Route } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";

import {
    Perfil,
    Login,
    Cadastro,
    Main,

  } from "../pages";
  
  const Routes = () => {
    return (
      <Switch>
        <PrivateRoute exact path="/perfil" component={Perfil} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/cadastro" component={Cadastro} />
        <Route exact path="/" component={Main} />

      </Switch>
    );
  };
  
  export default Routes;
