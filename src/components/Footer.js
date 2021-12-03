import { Link } from "react-router-dom";



function Footer() {

  

    return (
        <footer id="mu-footer">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="mu-footer-area">
                <div className="mu-footer-social">
                  <Link to="#"><span className="fa fa-facebook"></span></Link>
                  <Link to="#"><span className="fa fa-twitter"></span></Link>
                  <Link to="#"><span className="fa fa-google-plus"></span></Link>
                  <Link to="#"><span className="fa fa-linkedin"></span></Link>
                  <Link to="#"><span className="fa fa-youtube"></span></Link>
                </div>
                <div className="mu-footer-copyright">
                  <p>&copy; Copyright <a rel="nofollow" href="http://markups.io">markups.io</a>. All right reserved.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
}


export default Footer;