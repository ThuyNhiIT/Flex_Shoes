import Home from '../pages/Home';
import Search from '../pages/Search';
import Cart from '../pages/Cart';
import Checkout from '../pages/Checkout';
import ProductDetail from '../pages/productdetail';
import Listing from '../pages/Listing';
import Login from '../pages/Login';
import Register from '../pages/Register';

// admin
import Dashboard from '../pages/admin/Dashboard';
import PaymentReturn from '../pages/PaymentReturn';
import OrderConfirmation from '../pages/OrderConfirmation';
import PurchasedProductsList from '../pages/PurchasedProductsList';
import ProductDetails from '../pages/admin/ProductDetails';


import config from '../config';
import CheckoutForm from '../pages/Checkout';


// AllProduct
import AllProduct from '../pages/admin/AllProduct/index';

const publicRoutes = [
    { path: config.routes.main, component: Home },
    // { path: config.routes.home, component: Home },
    { path: config.routes.productdetail, component: ProductDetail },
    { path: config.routes.listing, component: Listing },
    { path: config.routes.search, component: Search, layout: null },
    { path: config.routes.cart, component: Cart },
    { path: config.routes.checkout, component: Checkout },
    { path: config.routes.search, component: Search },
    { path: config.routes.purchasedProductsList, component: PurchasedProductsList },
    { path: config.routes.login, component: Login },
    { path: config.routes.register, component: Register },
    { path: config.routes.dashboard, component: Dashboard },
    { path: '/payment-return', component: PaymentReturn },
    { path: '/order-confirmation', component: OrderConfirmation },
    { path: config.routes.ProductDetails, component: ProductDetails },

    // AllProduct
    {path: config.routes.AllProduct, component: AllProduct},
];
const privateRoutes = [];
export { privateRoutes, publicRoutes };
