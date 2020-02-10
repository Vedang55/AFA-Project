import React, { useState } from 'react'
import classes from './AboutUsCont.module.css';


//founder tab
const Founder = () => {
    return (
        <div className={classes.tabSectionContainer}>
            <h2>
                Founder
            </h2>
            <img alt='Founder' className={classes.tabSectionContainer} src={require('../../../assets/images/aboutus/Founder.jpg')}></img>
            <p className={classes.aboutUsText}>
                Percival Noronha (26/7/1923 - 19/8/2019) was an exceptional man. Having served the Goa government in high offices of civil service, both in the Portuguese and post liberation era, he was multitalented, multifaceted and gifted with unique qualities.
    At 60 on retirement in 1982, he started the second innings of life with even more gusto and enthusiasm and founded The Indian Heritage Society (Goa chapter) &amp; The Association of Friends of Astronomy (Goa). He guided  the Association of Friends of Astronomy till his last days and is fondly remembered as a beacon of  strength and support by the members. He will always be remembered and respected for his demeanor,  kindness, politeness, leadership and joyous nature by the people whose lives he touched. PERCIVAL NORONHA's wise words " Honest intentions always beget Honest results " will forever continue to remain in the heart of AFAians and  inspire them to lead the institution to great heights.

            </p>
        </div>
    );
}

//AFA & PAO tab
const AFA = () => {
    return (
        <div className={classes.tabSectionContainer}>


            <h2>ASSOCIATION OF FRIENDS OF ASTRONOMY (GOA)</h2>
            <p style={{marginTop: 0}}>(Registered NGO: Reg.No. 51/Goa/82)</p>
            <img alt='Team' src={require('../../../assets/images/aboutus/AFA.jpeg')}></img>



            <p className={classes.aboutUsText}>
                The Association of Friends of Astronomy (Goa) was set up in December 1982 by a group of enthusiastic Astronomy buffs. The Association opens its arms to all individuals who are mesmerized by the awesome universe and are curious to know more about it. Activities like workshops, sky observations, lectures, film screenings, exhibitions etc are regularly organized all over Goa for the popularization of science and astronomy among students and the general public. Association of Friends of Astronomy (Goa) has 8 Centers in Goa: The main unit at Panjim and subunits at Margao, Mapusa, Vasco, Porvorim, Canacona, Sakhali and Rural astronomy centres at Morjim & Borim. Any individual regardless of age and education is welcome to join the Association and enrich his life with the beautiful and timeless hobby of appreciating The Mother of Science, ASTRONOMY.
            </p>

            <br></br>

            <h2>
                PUBLIC ASTRONOMICAL OBSERVATORY
            </h2>
            <p style={{marginTop: 0}}>(Under Department of Science, Technology &amp; Environment, Govt. of Goa)</p>
            <img alt='Team' src={require('../../../assets/images/aboutus/pano.png')}></img>


            <p className={classes.aboutUsText}>
                The P.A.O. Panjim was set up by the Association of Friends of Astronomy (Goa) in 1990 and is supported and funded by the Department of Science, Technology &amp; Environment (Govt. of Goa). It is the first public observatory to be set up in India and is voluntarily managed by the members of the Association of Friends of Astronomy (Goa). Another Public Astronomical Observatory was instituted in Margao in 2003 and 3rd one came up in 2010 at Mapusa. The Vasco observatory (Founded: 2013) &amp; Canacona observatory (Founded: 2013) were set up with the assistance of educational institutions. Similarly, the Rural Astronomy centres of Morjim, Borim &amp; Sanquelim villages are also set up with the help of schools and have the distinction of being the only Rural Astronomy centres in the Country. At all these centres general public can view the Cosmos free of cost.
            </p>
            <img alt='Team' src={require('../../../assets/images/aboutus/bridge.png')}></img>
        </div>
    );
}



//team tab
const Team = () => {
    return (
        <div className={classes.tabSectionContainer}>
            {/* <h2 style={{ alignSelf: "center" }}>
                Team
            </h2> */}

            <h2>Executive Council</h2>
            <ul>
                <li><span className={classes.title}>President:</span> Satish Nayak</li>
                <li><span className={classes.title}>Vice President:</span> Govind Potekar and Sangeeta Naik</li>
                <li><span className={classes.title}>Secretary: </span> Erin Viegas </li>

                <li><span className={classes.title}>Joint Secretary and Treasurer:</span> Devansh Cholera</li>
                <li><span className={classes.title}>Councillors:</span> <ul>
                    <li>Helen Rego</li>
                    <li>Khalid Chauhan</li>
                    <li>Shashank Saudagar</li>
                    <li>Nancy Sequeira</li>
                    <li>Jayant Karn</li>
                </ul>
                </li>
            </ul>

            <h2>Advisory Council</h2>

            <ul>
                <li>Anirudh Borkar</li>
                <li>Mohan Chari</li>
                <li>Ramesh Kumar</li>
                <li>Sunil Kher</li>
                <li>Vilas Satarkar</li>
                <li>Sujata Kaisare</li>
                <li>Shrikant Nagvekar</li>

            </ul>
        </div>
    );
}




//Parent component
const AboutUsCont = (props) => {
    const [activeTab, setActiveTab] = useState(0);

    const tabClick = (index) => {
        setActiveTab(index);
    }

    return (
        <div className={classes.Container}>
            <div className={classes.tabCont}>
                <h2 className={activeTab === 0 ? classes.active : undefined} onClick={tabClick.bind(this, 0)}>Founder</h2>
                <h2 className={activeTab === 1 ? classes.active : undefined} onClick={tabClick.bind(this, 1)}>AFA &amp; PAO</h2>
                <h2 className={activeTab === 2 ? classes.active : undefined} onClick={tabClick.bind(this, 2)}>Team</h2>

            </div>

            {
                activeTab === 0 ? (<Founder />) : (activeTab === 1 ? <AFA /> : <Team />)
            }


        </div>

    );
}


export default AboutUsCont