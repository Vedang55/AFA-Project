import React from 'react';
import Layout from '../../components/Layouts/Layout'
import classes from './Publications.module.css'
import PublicationsCard from './PublicationsCard/PublicationsCard'

const Publications = () => {
    return (
        <Layout>
            <div className={classes.Container}>
                <h1>Publications</h1>
                <PublicationsCard />
                <PublicationsCard />
            </div>
        </Layout>
    );


}

export default Publications;