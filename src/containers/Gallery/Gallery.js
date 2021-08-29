import ImageGallery from 'react-image-gallery';
import React, { useEffect, useState } from 'react';
import './Gallery.css';
import Layout from '../../components/Layouts/Layout';
import classes from './Gallery.module.css';
import ReactLoading from 'react-loading';


const images = [
    {
        original: 'https://picsum.photos/id/1018/1000/600/',
        thumbnail: 'https://picsum.photos/id/1018/250/150/',
    },
    {
        original: 'https://picsum.photos/id/1015/1000/600/',
        thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
        original: 'https://picsum.photos/id/1019/1000/600/',
        thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
    {
        original: 'https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823__340.jpg',
        thumbnail: 'https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823__340.jpg'
    }

];






function MyGallery() {
    let eventsArray = [];
    let astroArray = [];
    const [astro, setAstro] = useState(astroArray)
    const [events, setEvents] = useState(eventsArray)
    const [loaded, setLoaded] = useState(0)

    useEffect(() => {
        Promise.all([
            fetch(`https://sheets.googleapis.com/v4/spreadsheets/1nHjqTJw_4lQRFPedIghCAdHc6UhP-mmtr6yk7_Zd9fo/values/events images?alt=json&key=${process.env.REACT_APP_GOOGLE_KEY}`),
            fetch(`https://sheets.googleapis.com/v4/spreadsheets/1nHjqTJw_4lQRFPedIghCAdHc6UhP-mmtr6yk7_Zd9fo/values/astro images?alt=json&key=${process.env.REACT_APP_GOOGLE_KEY}`),
        ]).then(([astro, events]) => Promise.all([astro.json(), events.json()]))
            .then(([astroData, eventsData]) => {

                for (const property in eventsData.values) {
     
                    eventsArray.push({
                        original:eventsData.values[property][0],
                        thumbnail:eventsData.values[property][1] ? eventsData.values[property][1] : eventsData.values[property][0],
                        //description is removed as it doesn't look good 
    
                    })
                    

                }
                for (const property in astroData.values) {
     
                    astroArray.push({
                        original:astroData.values[property][0],
                        thumbnail:astroData.values[property][1] ? astroData.values[property][1] : astroData.values[property][0],
                        //description is removed as it doesn't look good 
                    })
                    

                }
                eventsArray = eventsArray.splice(0,1)
                astroArray = astroArray.splice(0,1)
                setLoaded(1)

            }



            ).catch((error) => {
                setLoaded(-1)
            });
       
    }, [])

    return (
        <Layout>
                {
                    loaded === 1 ?
                        <div className={classes.Container}>
                            <h1>Gallery</h1>
                            {console.log(events)}
                            <div className={classes.GalleryContainer}>
                                <ImageGallery  autoPlay={true} items={events} lazyLoad={true} useBrowserFullscreen={true} showFullscreenButton={true} />
                            </div>

                            <div className={classes.GalleryContainer}>
                                <ImageGallery autoPlay={true} items={astro} lazyLoad={true} useBrowserFullscreen={true} showFullscreenButton={true} />
                            </div>
                        </div> : <div className={classes.loadingCont}> {loaded === -1 ? <h4 style={{ color: 'black' }}>Failed to load image data, Refresh page</h4> : <ReactLoading type={'bubbles'} height={100} width={100} color={'black'} />}</div>}
            </Layout>
    )
}

export default MyGallery

