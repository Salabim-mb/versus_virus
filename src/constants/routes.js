import {LoginPage, RegisterPage, UserPage} from "../Components";

const paths = {
    DASHBOARD: "/",
    REGISTER: "/register",
    LOGIN: "/",
    USER: "/user",
    SHOP: "/shop",
    QUESTS: "/quests",
    DAILY_SUMMARY: "/daily",
    RANKING: "/ranking"
};

export default [
    {
        path: paths.DASHBOARD,
        exact: true
    },
    {
        path: paths.LOGIN,
        component: LoginPage,
        exact: true
    },
    {
        path: paths.REGISTER,
        component: RegisterPage,
        exact: true
    },
    {
        path: paths.USER,
        component: UserPage,
        exact: true
    }
]

export {paths};