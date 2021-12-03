import GalleryImgBox from "../../components/GalleryImgBox";
import "../Gallery/Gallery.css";
import {db} from '../../services/firebase.config';


import React, { useState, useEffect } from 'react';



function Gallery(params) {


    const [images, setImage] = useState([])


    const fetchData = ()=>{
        db.collection("gallery").get().then((querySnapshot) => {

        // Loop through the data and store
        // it in array to display
        querySnapshot.forEach(element => {
            var data = element.data();
            setImage(arr => [...arr , data]);

        });
    });
    }


    useEffect(() => {

        fetchData();
      

    }, [])


    return (
        <section id="mu-gallery">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="mu-gallery-area">

                            <div className="mu-title">
                                <span className="mu-subtitle">Discover</span>
                                <h2>Our Gallery</h2>
                            </div>

                            <div className="mu-gallery-content">


                                <div className="mu-gallery-body">
                                    {images.map(img => <GalleryImgBox key={img.id} img={img}></GalleryImgBox>)}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Gallery;