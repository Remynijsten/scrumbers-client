import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home";
import Register from "./views/Register";
import Login from "./views/Login";
import CreateRoom from "./views/CreateRoom";
import ShareLink from "./views/ShareLink";

Vue.use(Router);

export default new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [
        {
            path: "/",
            name: 'home',
            component: Home
        },
        {
            path: "/register",
            component: Register,
            name: 'register'
        },
        {
            path: "/login",
            component: Login,
            name: 'login'
        },
        {
            path: "/create-room",
            component: CreateRoom,
            name: 'createroom'
        },
        {
            path: "/share-link/:id",
            component: ShareLink,
            name: 'sharelink'
        }
    ]
});
