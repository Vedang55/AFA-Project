import React, { useEffect, useState } from 'react';
import classes from './Toolbar.module.css';
import Logo from '../../components/Logo/Logo'
import NavigationItems from '../../navigation/Toolbar/NavigationItems/NavigationItems';

const Toolbar = (props) => {


    const [containerClasses, setContainerClasses] = useState([classes.Cont, classes.Small]);
    useEffect(() => {
        const cc = [...containerClasses];
        if (props.stickyNavbar === "true") {
            window.addEventListener('scroll', getWindowHeight);
            cc[1] = classes.Big;
            setContainerClasses(cc);
        }
        else {
            cc[1] = classes.Small;
            setContainerClasses(cc);
        }
        return (() => {
            window.removeEventListener('scroll', getWindowHeight);
        });
    }, []);

    const getWindowHeight = () => {

        const distanceY = window.pageYOffset || document.documentElement.scrollTop
        const shrinkOn = 150;

        if (distanceY > shrinkOn) {
            setContainerClasses((state) => {
                if (state[1] !== classes.Small) {
                    const cc = [...state];
                    cc[1] = classes.Small;
                    return cc;
                }
                else {
                    return state;
                }
            });


        }
        else {
            setContainerClasses((state) => {
                if (state[1] !== classes.Big) {
                    const cc = [...state];
                    cc[1] = classes.Big;
                    return cc;
                }
                else {
                    return state;
                }
            });
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

export default React.memo(Toolbar);