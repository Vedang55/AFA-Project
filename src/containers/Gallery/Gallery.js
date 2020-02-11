import ImageGallery from 'react-image-gallery';
import React from 'react';
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




class MyGallery extends React.Component {

    state = {
        astro: [],
        events: [],
        loaded: 0
    }

    componentDidMount = () => {
        Promise.all([
            fetch('https://spreadsheets.google.com/feeds/cells/1nHjqTJw_4lQRFPedIghCAdHc6UhP-mmtr6yk7_Zd9fo/3/public/full?alt=json'),
            fetch('https://spreadsheets.google.com/feeds/cells/1nHjqTJw_4lQRFPedIghCAdHc6UhP-mmtr6yk7_Zd9fo/4/public/full?alt=json'),
        ]).then(([astro, events]) => Promise.all([astro.json(), events.json()]))
            .then(([astroData, eventsData]) => {

                const eventsArr = [];
                const astroArr = [];

                eventsData.feed.entry.forEach(element => {
                    if (eventsArr[element['gs$cell'].row] === undefined && element['gs$cell'].row !== "1") {
                        eventsArr[element['gs$cell'].row] = {};
                    }

                    if (element['gs$cell'].row !== '1') {
                        switch (element['gs$cell'].col) {
                            case '1':
                                eventsArr[element['gs$cell'].row].original = element.content['$t'];
                                break;
                            case '2':
                                eventsArr[element['gs$cell'].row].thumbnail = element.content['$t'];
                                break
                        }
                    }
                });


                astroData.feed.entry.forEach(element => {
                    if (astroArr[element['gs$cell'].row] === undefined && element['gs$cell'].row !== "1") {
                        astroArr[element['gs$cell'].row] = {};
                    }

                    if (element['gs$cell'].row !== '1') {
                        switch (element['gs$cell'].col) {
                            case '1':
                                astroArr[element['gs$cell'].row].original = element.content['$t'];
                                break;
                            case '2':
                                astroArr[element['gs$cell'].row].thumbnail = element.content['$t'];
                                break
                        }
                    }
                });




                this.setState({
                    astro: astroArr.filter(function (element) {
                        return element !== undefined;
                    }).map((item) => {
                        const newitem = { ...item };
                        if (item.thumbnail === "" || item.thumbnail === undefined) {
                            newitem.thumbnail = item.original;
                        }
                        if (item.original === "" || item.original === undefined) {
                            newitem.original = item.thumbnail;
                        }
                        // newitem.description = "sample description";
                        return newitem;
                    }),
                    events: eventsArr.filter(function (element) {
                        return element !== undefined;
                    }).map((item) => {
                        const newitem = { ...item };
                        if (item.thumbnail === "" || item.thumbnail === undefined) {
                            newitem.thumbnail = item.original;
                        }
                        if (item.original === "" || item.original === undefined) {
                            newitem.original = item.thumbnail;
                        }
                        return newitem;
                    }),
                    loaded: 1
                })
            }



            ).catch((error) => {
                this.setState({ loaded: -1 });
            });
    }




    render() {
        return (
            <Layout>
                {
                    this.state.loaded === 1 ?
                        <div className={classes.Container}>
                            <h1>Gallery</h1>
                            <div className={classes.GalleryContainer}>
                                <ImageGallery  autoPlay={true} items={this.state.astro} lazyLoad={true} useBrowserFullscreen={true} showFullscreenButton={true} />
                            </div>

                            <div className={classes.GalleryContainer}>
                                <ImageGallery autoPlay={true} items={this.state.events} lazyLoad={true} useBrowserFullscreen={true} showFullscreenButton={true} />
                            </div>
                        </div> : <div className={classes.loadingCont}> {this.state.loaded === -1 ? <h4 style={{ color: 'black' }}>Failed to load image data, Refresh page</h4> : <ReactLoading type={'bubbles'} height={100} width={100} color={'black'} />}</div>}
                }



            </Layout>
        );
    }
}

export default MyGallery;