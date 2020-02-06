import React from 'react';
import Layout from '../../components/Layouts/Layout'
import classes from './Publications.module.css'
import PublicationsCard from './PublicationsCard/PublicationsCard'
import PublicationData from '../../data/publications'

const Publications = () => {
    return (
        <Layout>
            <div className={classes.Container}>
                <h1>Publications</h1>
                {PublicationData.map((item) => {
                    return (
                        <PublicationsCard item={item}/>
                    );
                })}
            </div>
        </Layout>
    );


}

export default Publications;