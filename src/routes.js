import { Route, Switch } from "react-router";
import Login from "./pages/Login";

export default function Routes() {
    return (
        <Switch>
            <Route path="/" component={() => <div>Página inicial</div>} exact />
            <Route path="/login" component={Login} />
            <Route component={() => <div>Page 404</div>} />
        </Switch>
    );
}
