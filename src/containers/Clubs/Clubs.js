import React from 'react';
import classes from './Clubs.module.css';
import Layout from '../../components/Layouts/Layout';
import ClubsCard from './ClubsCard/ClubsCard'


const Clubs = () => {


    return (
        <Layout>
            <div className={classes.Container}>
                <h1>Clubs</h1>
                <ClubsCard />
                <ClubsCard />
                <ClubsCard />
            </div>
        </Layout>
    );
}

export default Clubs;
