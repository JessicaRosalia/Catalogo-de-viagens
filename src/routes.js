import  Form  from "./pages/Form/Form.js";
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

function Routes (){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path = "/cadastro-de-destinos">
                    <Form/>
                </Route>

                <Route path="*">
                    <Redirect to="/cadastro-de-destinos" />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;