import { ComponentType } from 'react';
import { To } from 'react-router-dom';
import { GoHomeFill } from 'react-icons/go';
import { PiUsersThreeFill } from 'react-icons/pi';
import ErrorPage from '../page/error';
import MainPage from '../page/main';

export interface RouteConfig {
    icon?: any;
    name: string;
    path?: string;
    component?: ComponentType<any> | null;
    lazyComponent?: any;
    to?: To;
    outlet?: OutletConfig;
    isProtected: boolean;
  }

export interface OutletConfig {
  [key: string]: RouteConfig;
}

export const mainOutlet: OutletConfig = {
    HOME: {
      name: 'Home',
      icon: GoHomeFill,
      path: '/home',
      lazyComponent: () => import('../page/main/outlet/home'),
      isProtected: false,
    },
    ABOUT: {
      name: 'About',
      icon: PiUsersThreeFill,
      path: '/about',
      lazyComponent: () => import('../page/main/outlet/about'),
      isProtected: false,
    },
  };

export const outlet = { ...mainOutlet};

export const routes = {
  MAIN: {
    name: 'Main',
    path: '/',
    component: MainPage,
    outlet: { ...mainOutlet},
    isProtected: false,
  },
  ERROR: {
    name: 'Error',
    path: '/badpage',
    component: ErrorPage,
    isProtected: false,
  },
  ERRORREDIRECT: {
    name: 'ErrorRedirect',
    path: '*',
    to: '/badpage',
    isProtected: false,
  },
};