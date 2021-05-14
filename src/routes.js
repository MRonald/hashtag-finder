import { Route, Switch } from "react-router";
import Home from "./pages/Home";
import Login from "./pages/Login";
import About from "./pages/About";

export default function Routes() {
    return (
        <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/login" component={Login} />
            <Route path="/about" component={About} />
            <Route component={() => <div>Page 404</div>} />
        </Switch>
    );
}
