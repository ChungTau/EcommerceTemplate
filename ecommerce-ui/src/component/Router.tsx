import {AnimatePresence, LayoutGroup} from 'framer-motion';
import {Navigate, Route, Routes, useLocation} from 'react-router-dom';
import {outlet, routes} from '../constant/routes';
import {Suspense, useEffect} from 'react';
import {findRouteNameByPath} from '../helper/findRouteNameByPath';
import {APP_NAME} from '../config/app';
import FallbackSpinner from './FallbackSpinner';
import ErrorPage from '../page/error';
import React from 'react';
import MainPage from '../page/main';
import { LoadingProvider } from '../provider/LoadingProvider';

const Home = React.lazy(()=> import('../page/main/outlet/home'));
const About = React.lazy(()=> import('../page/main/outlet/about'));

function Router() {
    const location = useLocation();

    useEffect(() => {
        const routeName = findRouteNameByPath(location.pathname, routes);
        if (routeName) {
            document.title = `${routeName} - ${APP_NAME}`;
        }
    }, [location]);

    return (
        <AnimatePresence mode="wait" initial={false}>
            <LayoutGroup key={location.pathname}>
            <LoadingProvider>
                <Suspense fallback={< FallbackSpinner />}>
                    <Routes location={location}>
                        <Route key={routes.MAIN.name} path={routes.MAIN.path} element={<MainPage/>}>
                            <Route index key={outlet.HOME.name} path={outlet.HOME.path} element={
                                <React.Suspense fallback={<FallbackSpinner/>}>
                                    <Home/>
                                </React.Suspense>
                            }/>
                            <Route key={outlet.ABOUT.name} path={outlet.ABOUT.path} element={
                                <React.Suspense fallback={<FallbackSpinner/>}>
                                    <About/>
                                </React.Suspense>
                            }/>
                        </Route>
                        <Route key={routes.ERROR.name} path={routes.ERROR.path} element={<ErrorPage/>}/>
                        <Route key={routes.ERRORREDIRECT.name} path={routes.ERRORREDIRECT.path} element={<Navigate to={routes.ERRORREDIRECT.to}/>}/>
                    </Routes>
                </Suspense>
                </LoadingProvider>
            </LayoutGroup>
        </AnimatePresence>
    );
}
export default Router;
