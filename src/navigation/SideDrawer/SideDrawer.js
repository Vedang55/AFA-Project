import React from 'react';
import NavigationItems from '../Toolbar/NavigationItems/NavigationItems';
import classes from './SideDrawer.module.css';
import Auxi from '../../hoc/auxi';
import Backdrop from '../../components/UI/Backdrop/Backdrop';

const styleProp = { flexDirection: 'column', justifyContent: 'flex-start' };

const SideDrawer = (props) => {
    const attachedClasses = [classes.SideDrawer, classes.Close];
    if(props.open){
        attachedClasses[1] = classes.Open;
    }

    return (

        
        <Auxi>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={attachedClasses.join(' ')}>
                <NavigationItems style={styleProp} />
            </div>
        </Auxi>
    );
}

export default React.memo(SideDrawer);