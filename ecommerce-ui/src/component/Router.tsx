import {AnimatePresence, LayoutGroup} from 'framer-motion';
import {Routes, useLocation} from 'react-router-dom';
import {routes} from '../constant/routes';
import {nestedRoutes} from '../helper/nestedRoutes';
import {Suspense, useEffect} from 'react';
import {findRouteNameByPath} from '../helper/findRouteNameByPath';
import {APP_NAME} from '../config/app';
import FallbackSpinner from './FallbackSpinner';

const rootRoutes = Object.values(routes);

function Router() {
    const location = useLocation();

    //Update the website title according to the current route path.
    useEffect(() => {
        const routeName = findRouteNameByPath(location.pathname, routes);
        if (routeName) {
            document.title = `${routeName} - ${APP_NAME}`;
        }
    }, [location]);

    return (
        <AnimatePresence mode="wait" initial={false}>
            <LayoutGroup key={location.pathname}>
                <Suspense fallback={< FallbackSpinner />}>
                    <Routes location={location}>
                        {nestedRoutes(rootRoutes)}
                    </Routes>
                </Suspense>
            </LayoutGroup>
        </AnimatePresence>
    );
}
export default Router;
