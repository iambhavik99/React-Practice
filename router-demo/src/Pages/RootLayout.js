import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import MainNavigation from "../Components/MainNavigation";

import classes from './Root.module.css';

const RootLayout = () => {
    return (
        <Fragment>
            <MainNavigation />
            <main className={classes.content}>
                <Outlet />
            </main>
        </Fragment>
    );
}

export default RootLayout;

