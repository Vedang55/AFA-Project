import React, { useState } from 'react';
import Aux from '../../hoc/auxi';
import classes from './Layout.module.css';
import Toolbar from '../../navigation/Toolbar/Toolbar';
import SideDrawer from '../../navigation/SideDrawer/SideDrawer';

const Layout = (props) => {
    const [showSideDrawer, setShowSideDrawer] = useState(false);
    const sideDrawerClosedHandler = () =>{
        setShowSideDrawer(false);
    }

    const toggleSideDrawer = () => {
        if(showSideDrawer){
            setShowSideDrawer(false);
        }
        else{
            setShowSideDrawer(true);
        }
    }
    
    return (
        <div className={classes.Cont}>
            <div>
                <Toolbar click={toggleSideDrawer}/>
                <SideDrawer closed={sideDrawerClosedHandler} open={showSideDrawer}/>
            </div>
            <main className={classes.Content}>
                {props.children}
            </main>
        </div>
    );
}

export default Layout;