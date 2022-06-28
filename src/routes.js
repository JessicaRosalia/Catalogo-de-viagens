import  Form  from "./pages/Form/Form.js";
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import HomePage from "./pages/Home/Home.js";
import { Login } from "./pages/Login/Login.js";

function Routes (){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path = "/home">
                    <HomePage/>
                </Route>
                <Route exact path = "/cadastro-de-destinos">
                    <Form/>
                </Route>
                <Route exact path = "/login">
                    <Login />
                </Route>

                <Route path="*">
                    <Redirect to="/login" />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;