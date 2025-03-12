import HomePage from '../pages/client/HomePage/HomePage';
import LayoutClient from '../components/layout/layoutClient/LayoutClient';
import OrderPage from '../pages/client/OrderPage/OrderPage';
import ProductPage from '../pages/client/ProductsPage/ProductsPage';

const routes = [
    {
        path: "",
        layout: LayoutClient,
        children: [
            { path: "/", component: HomePage },
            { path: "/order", component: OrderPage },
            { path: "/product", component: ProductPage },
        ],
    }
];

export { routes }; // ✅ Đảm bảo bạn export default
