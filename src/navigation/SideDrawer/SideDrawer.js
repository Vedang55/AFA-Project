import React from 'react';
import NavigationItems from '../Toolbar/NavigationItems/NavigationItems';
import classes from './SideDrawer.module.css';
import Auxi from '../../hoc/auxi';
import Backdrop from '../../components/UI/Backdrop/Backdrop';

const SideDrawer = (props) => {
    let attachedClasses = [classes.SideDrawer, classes.Close];
    if(props.open){
        attachedClasses = [classes.SideDrawer, classes.Open];
    }

    return (

        
        <Auxi>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={attachedClasses.join(' ')}>
                <NavigationItems style={{ flexDirection: 'column', 'justify-content': 'flex-start' }} />
            </div>
        </Auxi>
    );
}

export default SideDrawer;