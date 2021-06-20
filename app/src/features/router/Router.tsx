import { Redirect, Route, Switch } from "react-router";
import { Counter } from "../counter/Counter";

export function Router() {

    return <>
        Router
        <Switch>
            <Route exact path="/" component={Counter} />
            <Redirect to="/" />
        </Switch>
    </>

}