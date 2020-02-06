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
                <p>
                The Association activities are grouped into seven clubs and being a member of AFA (Goa) entitles you to participate in the events of all the clubs as per your interest…
                </p>

                {data.map((item,index)=>{
                    return <ClubsCard index={index}/>
                })}
            </div>
        </Layout>
    );
}

export default React.memo(Clubs);
