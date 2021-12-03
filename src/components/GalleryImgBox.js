


function GalleryImgBox({img}) {

  

    return (
        <div className="mu-single-gallery col-md-4">
            <div className="mu-single-gallery-item">
                <figure className="mu-single-gallery-img">
                    <a className="mu-imglink" href={img.imgUrl}>
                        <img alt="img" src={img.imgUrl} />
                        <div className="mu-single-gallery-info">
                            <img className="mu-view-btn" src="assets/img/plus.png" alt="plus icon img" />
                        </div>
                    </a>
                </figure>
            </div>
        </div>
    )
}


export default GalleryImgBox;