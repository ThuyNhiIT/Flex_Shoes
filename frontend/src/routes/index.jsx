import Home from '../pages/Home';
import Search from '../pages/Search';
import Listing from '../pages/Listing';
import Login from '../pages/Login';
import Register from '../pages/Register';

import config from '../config';

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.listing, component: Listing },
    { path: config.routes.search, component: Search, layout: null },
    { path: config.routes.search, component: Search },

    { path: config.routes.login, component: Login },
    { path: config.routes.register, component: Register },
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };
