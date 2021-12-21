
import { Link} from "react-router-dom";


function Nav() {

    return (
        <nav className="navbar navbar-default mu-main-navbar" role="navigation">
          <div className="container">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>


              <a className="navbar-brand" href="index.html"><img src="assets/img/logo.png" alt="Logo img" /></a>


            </div>
            <div id="navbar" className="navbar-collapse collapse">
              <ul id="top-menu" className="nav navbar-nav navbar-right mu-main-nav">
                <li><Link to="/">HOME</Link></li>
                <li><Link to="/menu">MENU</Link></li>
                <li><Link to="/gallery">GALLERY</Link></li>
                <li><Link to="/reservation">RESERVATION</Link></li>

                 <li className="user"><Link to="/register">REGISTER</Link></li>
              
              </ul>
            </div>
          </div>
        </nav>
    )
}


export default Nav;