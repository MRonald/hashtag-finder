import { Route, Switch } from "react-router";
import Home from "./pages/Home";
import Login from "./pages/Login";

export default function Routes() {
    return (
        <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/login" component={Login} />
            <Route component={() => <div>Page 404</div>} />
        </Switch>
    );
}
