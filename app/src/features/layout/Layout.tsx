import React from "react";
import { Redirect, Route, Switch } from "react-router";
import { Counter } from "../counter/Counter";
import { Nav } from "../nav/Nav";
import { Router } from "../router/Router";

type LayoutProps = {
    children?: React.ReactNode;
};

export const Layout: React.FC<LayoutProps> = props =>
    <div>
        Layout
        <br />
        <Nav />
        <br />
        {props.children}
    </div>
