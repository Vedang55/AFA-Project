import React, {useEffect} from 'react';
import classes from './Equipment.module.css';
import Layout from '../../components/Layouts/Layout';
import EquipmentCard from './EquipmentCard/EquipmentCard'


const Equipment = () => {

    return (
        <Layout>
            <div className={classes.Container}>
                <h1>Equipment</h1>
                <EquipmentCard />
                <EquipmentCard />
                <EquipmentCard />
            </div>
        </Layout>
    );
}

export default React.memo(Equipment);
