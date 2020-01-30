import ImageGallery from 'react-image-gallery';
import React from 'react';
import './Gallery.css';
import Layout from '../../components/Layouts/Layout';
import classes from './Gallery.module.css';


const images = [
    {
        original: 'https://picsum.photos/id/1018/1000/600/',
        thumbnail: 'https://picsum.photos/id/1018/250/150/',
        description:'Astrology'
    },
    {
        original: 'https://picsum.photos/id/1015/1000/600/',
        thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
        original: 'https://picsum.photos/id/1019/1000/600/',
        thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
];

class MyGallery extends React.Component {
    render() {
        return (
            <Layout>
                <div className={classes.Container}>
                    <h1>Gallery</h1>
                    <div className={classes.GalleryContainer}>
                        <ImageGallery items={images}/>
                    </div>

                    <div className={classes.GalleryContainer}>
                        <ImageGallery items={images}/>
                    </div>
                </div>
            </Layout>
        );
    }
}

export default MyGallery;