import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/home/Home.vue'
import About from '../views/Home.vue'
import Order from '../views/home/Order.vue'
import Account from '../views/home/Account.vue'
import OrderDetail from '../views/OrderDetail.vue'
import ProductDetail from "../views/ProductDetail";
import Express from "../views/Express";
import Job from "../views/Job";
import Activity from "../views/Activity";
import TakeOut from "../views/TakeOut";
import FindLoss from "../views/FindLoss";
import MyAddress from "../views/MyAddress";
import SchoolNotice from "../views/SchoolNotice";
import Market from "../views/Market";
import MyCoupon from "../views/MyCoupon";
import AddressEditView from "../views/AddressEditView";

const routes = [{
        path: '/',
        name: 'Home',
        redirect: '/home',
        component: About,
        children: [{
                path: 'home',
                component: Home
            },
            {
                path: 'order',
                name: 'order',
                component: Order
            },
            {
                path: 'account',
                name: 'account',
                component: Account
            }
        ]
    },
    {
        path: '/order-detail',
        name: 'orderDetail',
        component: OrderDetail
    },
    {
        path: '/product-detail',
        name: 'productDetail',
        component: ProductDetail
    },
    {
        path: '/express',
        name: 'express',
        component: Express
    },
    {
        path: '/job',
        name: 'job',
        component: Job
    },
    {
        path: '/activity',
        name: 'activity',
        component: Activity
    },
    {
        path: '/take-out',
        name: 'takeOut',
        component: TakeOut
    },
    {
        path: '/find-loss',
        name: 'findLoss',
        component: FindLoss
    },
    {
        path: '/my-address',
        name: 'myAddress',
        component: MyAddress
    },
    {
        path: '/school-notice',
        name: 'schoolNotice',
        component: SchoolNotice
    },
    {
        path: '/market',
        name: 'market',
        component: Market
    },
    {
        path: '/my-coupon',
        name: 'myCoupon',
        component: MyCoupon
    },
    {
        path: '/address-edit',
        name: 'AddressEdit',
        component: AddressEditView
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router