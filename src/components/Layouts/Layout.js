import React, { useState } from 'react';
import classes from './Layout.module.css';
import Toolbar from '../../navigation/Toolbar/Toolbar';
import SideDrawer from '../../navigation/SideDrawer/SideDrawer';
import WrapperComp from '../WrapperComp';

//wrapper comp added for performance (react memo)

const Layout = (props) => {
    const [showSideDrawer, setShowSideDrawer] = useState(false);
    const sideDrawerClosedHandler = () => {
        setShowSideDrawer(false);
    }

    const toggleSideDrawer = () => {
        if (showSideDrawer) {
            setShowSideDrawer(false);
        }
        else {
            setShowSideDrawer(true);
        }
    }

    return (
        <div className={classes.Cont}>
            <div>
                <Toolbar click={toggleSideDrawer} stickyNavbar={props.stickyNavbar} />
                <SideDrawer closed={sideDrawerClosedHandler} open={showSideDrawer} />
            </div>

            <main className={classes.Content}>
                <WrapperComp>
                    {props.children}
                </WrapperComp>
            </main>

        </div>
    );
}

export default Layout;