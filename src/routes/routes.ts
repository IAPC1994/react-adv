// import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyload/pages";

import { lazy, LazyExoticComponent } from "react";

type JSXComponent = () => JSX.Element;

interface Route {
    path: string;
    name: string;
    Component: LazyExoticComponent<JSXComponent> | JSXComponent;
    children?: Route[];
}

const LazyPage1 = lazy( () => import(/*webpackChunkName: "LazyPage1"*/'../01-lazyload/pages/LazyPage1') );
const LazyPage2 = lazy( () => import(/*webpackChunkName: "LazyPage2"*/'../01-lazyload/pages/LazyPage2') );
const LazyPage3 = lazy( () => import(/*webpackChunkName: "LazyPage3"*/'../01-lazyload/pages/LazyPage3') );

export const routes: Route[] = [
    {
        path: '/lazy1',
        name:'Lazy 1',
        Component: LazyPage1
    },
    {
        path: '/lazy2',
        name:'Lazy 2',
        Component: LazyPage2
    },
    {
        path: '/lazy3',
        name:'Lazy 3',
        Component: LazyPage3
    },
];