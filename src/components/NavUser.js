import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";


function NavUser() {

    const [error, setError] = useState('');
    const {currentUser, logout} = useAuth();
    let navigate = useNavigate();
  
  
    async function handleLogout() {
      setError('');
  
      try {
        await logout();
        navigate('/')
      } catch  {
          setError('Failed to log out!')
      }
  
    }

    return (
        <nav className="navbar navbar-default mu-main-navbar" role="navigation">
          <div className="container">
            <div className="navbar-header">
              {error}
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
                <li><Link to="/cart">CART</Link></li>

                {currentUser ? <li className='welcome'>Welcome {currentUser.email} <button onClick={handleLogout}>Logout</button></li>  :   <li className="user"><Link to="/register">REGISTER</Link></li>}
              
              </ul>
            </div>
          </div>
        </nav>
    )
}


export default NavUser;