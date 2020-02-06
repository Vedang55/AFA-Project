import React, { useState } from 'react'
import classes from './AboutUsCont.module.css';
import data from '../../../data/aboutpage'


//founder tab
const Founder = () => {
    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            <h2 style={{ alignSelf: "center" }}>
                Founder
            </h2>
        </div>
    );
}

//Team tab
const Team = () => {
    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            <h2 style={{ alignSelf: "center" }}>
                Team
            </h2>
        </div>
    );
}

//avs council tab
const Adv = () => {
    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            <h2 style={{ alignSelf: "center" }}>
                Advisory Council
            </h2>
            <p>
                <pre style={{ fontSize: "inherit", fontFamily: "inherit", whiteSpace: "pre-wrap" }}>
                    {data.advisorycouncil}
                </pre>
            </p>
        </div>
    );
}

//exec tab
const Exec = () => {
    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            <h2 style={{ alignSelf: "center" }}>
                Executive Council
            </h2>
            <p>
                <pre style={{ fontSize: "inherit", fontFamily: "inherit", whiteSpace: "pre-wrap" }}>
                    {data.executivecouncil}
                </pre>
            </p>
        </div>
    );
}



const AboutUsCont = (props) => {
    const [activeTab, setActiveTab] = useState(0);

    const tabClick = (index) => {
        setActiveTab(index);
    }

    return (
        <div className={classes.Container}>
            <div className={classes.tabCont}>
                <h2 className={activeTab === 0 ? classes.active : undefined} onClick={tabClick.bind(this, 0)}>Founder</h2>
                <h2 className={activeTab === 1 ? classes.active : undefined} onClick={tabClick.bind(this, 1)}>Team</h2>
                <h2 className={activeTab === 2 ? classes.active : undefined} onClick={tabClick.bind(this, 2)}>Advisory Council</h2>
                <h2 className={activeTab === 3 ? classes.active : undefined} onClick={tabClick.bind(this, 3)}>Executive Council</h2>
            </div>

            {
                activeTab === 0 ? (<Founder />) : (activeTab === 1 ? <Team /> : (activeTab === 2 ? <Adv /> : <Exec />))
            }


        </div>

    );
}


export default AboutUsCont