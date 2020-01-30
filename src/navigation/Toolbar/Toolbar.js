import React, { useEffect, useState } from 'react';
import classes from './Toolbar.module.css';
import Logo from '../../components/Logo/Logo'
import NavigationItems from '../../navigation/Toolbar/NavigationItems/NavigationItems';
import { NavLink } from 'react-router-dom';

const Toolbar = (props) => {


    const [containerClasses, setContainerClasses] = useState([classes.Cont, classes.Big]);
    useEffect(() => {
        if (props.stickyNavbar ==="true") {
            window.addEventListener('scroll', getWindowHeight);
        }
        else {
            const cc = [...containerClasses];
            cc[1] = classes.Small;
            setContainerClasses(cc);
        }
        return(() => {
            window.removeEventListener('scroll', getWindowHeight);
        });
    }, []);

    const getWindowHeight = () => {

        const distanceY = window.pageYOffset || document.documentElement.scrollTop
        const shrinkOn = 150;
        
        if (distanceY > shrinkOn) {
            const cc = [...containerClasses];
            cc[1] = classes.Small;
            setContainerClasses(cc);
        }
        else {
            const cc = [...containerClasses];
            cc[1] = classes.Big;
            setContainerClasses(cc);
        }
    }


    return (
        <header className={containerClasses.join(' ')}>

            <a href="/">
                <Logo />
            </a>
            <div className={classes.NavItems}>
                <NavigationItems />
            </div>

            <div className={classes.MenuToggle} onClick={props.click}>
                <div></div>
                <div></div>
                <div></div>
            </div>

        </header >
    );
}

export default Toolbar;