import React from 'react';
import classes from './Clubs.module.css';
import Layout from '../../components/Layouts/Layout';
import ClubsCard from './ClubsCard/ClubsCard'
import data from '../../data/clubs'


const Clubs = () => {
    return (
        <Layout>
            <div className={classes.Container}>
                <h1>Clubs</h1>
                {data.map((item)=>{
                    return <ClubsCard item={item}/>
                })}
            </div>
        </Layout>
    );
}

export default React.memo(Clubs);
