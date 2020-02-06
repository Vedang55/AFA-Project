import ImageGallery from 'react-image-gallery';
import React from 'react';
import './Gallery.css';
import Layout from '../../components/Layouts/Layout';
import classes from './Gallery.module.css';


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
    render() {
        return (
            <Layout>
                <div className={classes.Container}>
                    <h1>Gallery</h1>
                    <div className={classes.GalleryContainer}>
                        <ImageGallery items={images} lazyLoad={true} useBrowserFullscreen={false} showFullscreenButton={false}/>
                    </div>

                    <div className={classes.GalleryContainer}>
                        <ImageGallery items={images} lazyLoad={true} useBrowserFullscreen={false} showFullscreenButton={false}/>
                    </div>
                </div>
            </Layout>
        );
    }
}

export default MyGallery;