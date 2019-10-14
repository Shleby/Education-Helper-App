import Login from './views/Login/Login';
import Home from './views/Home/Home';
import CreateRelease from './views/CreateRelease/CreateRelease';

const dashboardRoutes = [
    {
        path: "/login",
        name: "Login",
        icon: "",
        component: Login,
        layout: "/"
    },
    {
        path: "/home",
        name: "Home",
        icon: "",
        component: Home,
        layout: "/home"
    },
    {
        path: "/create",
        name: "Create Release Notes",
        icon: "",
        component: CreateRelease,
        layout: "/home"
    }
];

export default dashboardRoutes;