import {ComponentType } from 'react';
import { To } from 'react-router-dom';
import { FaUser } from "react-icons/fa";
import { GoHomeFill } from "react-icons/go";
import { PiUsersThreeFill } from "react-icons/pi";
import SignUpPage from '../page/signUp';
import SignInPage from '../page/signIn';
import ErrorPage from '../page/error';
import MainPage from '../page/main';

export interface RouteConfig {
    icon?: any;
    name: string;
    path?: string;
    component?: ComponentType<any> | null;
    lazyComponent?: () => Promise<{ default: ComponentType<any> }>;
    to?: To;
    outlet?: OutletConfig;
    isProtected?: boolean;
}

export interface OutletConfig {
    [key: string]: RouteConfig;
}


export const mainOutlet: OutletConfig = {
    HOME: { name: 'Home', icon:GoHomeFill, path: '/home', lazyComponent: () => import('../page/main/outlet/home'),  isProtected: false },
    ABOUT: { name: 'About', icon:PiUsersThreeFill,path: '/about', lazyComponent: () => import('../page/main/outlet/about'), isProtected: false }
};

export const userOutlet: OutletConfig = {
    USER_PROFILE: { name: 'Profile', icon: FaUser, path: '/user/profile', lazyComponent: () => import('../page/main/outlet/profile'),  isProtected: true },
};

export const routes = Object.freeze({
    MAIN: {name: 'Main', path: '/', component: MainPage, outlet: { ...mainOutlet, ...userOutlet }, isProtected: false },
    SIGNUP: { name: 'Sign Up', path: '/sign-up', component: SignUpPage, isProtected: false },
    SIGNIN: { name: 'Sign In', path: '/sign-in', component: SignInPage, isProtected: false },
    ERROR: { name: 'Error', path: '/badpage', component: ErrorPage, isProtected: false },
    ERRORREDIRECT: { name: 'ErrorRedirect', path: '*', to: '/badpage', isProtected: false },
});