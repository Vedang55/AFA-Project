import React from 'react';
import classes from '../Clubs/Clubs.module.css';
import Layout from '../../components/Layouts/Layout';
import EquipmentCard from './EquipmentCard/EquipmentCard'
import EquipmentData from '../../data/equipment'


const Equipment = () => {

    return (
        <Layout>
            <div className={classes.Container}>
                <h1>Equipment</h1>
                {EquipmentData.map((item)=>{
                    return <EquipmentCard key={Math.random()} item={item}/>
                })}
            </div>
        </Layout>
    );
}

export default React.memo(Equipment);
