// import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyload/pages";

import { lazy, LazyExoticComponent } from "react";
import { NoLazy } from "../01-lazyload/pages/NoLazy";

type JSXComponent = () => JSX.Element;

interface Route {
    path: string;
    name: string;
    Component: LazyExoticComponent<JSXComponent> | JSXComponent;
    children?: Route[];
}

const LazyLayout = lazy( () => import(/*webpackChunkName: "LazyLayout"*/'../01-lazyload/layout/LazyLayout') );
 
//const LazyPage1 = lazy( () => import(/*webpackChunkName: "LazyPage1"*/'../01-lazyload/pages/LazyPage1') );
// const LazyPage2 = lazy( () => import(/*webpackChunkName: "LazyPage2"*/'../01-lazyload/pages/LazyPage2') );
// const LazyPage3 = lazy( () => import(/*webpackChunkName: "LazyPage3"*/'../01-lazyload/pages/LazyPage3') );

export const routes: Route[] = [
    {
        path: '/lazylayout',
        name:'Lazy Layout',
        Component: LazyLayout
    },
    {
        path: '/no-lazy',
        name: 'No Lazy',
        Component: NoLazy
    }
];