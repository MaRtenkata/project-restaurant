import { useAuth } from "../context/AuthContext";
import Nav from "./Nav";
import NavAdmin from "./NavAdmin";





function Header({ img }) {

  const { currentUser } = useAuth();

  function checkAdmin(currentUser) {
    if (currentUser) {
      if (currentUser.email === 'martin.shindarski@outlook.com') {
        return true
      } else if (currentUser.email == null) {
        return false
      }
    }
  }


  return (
    <header id="mu-header">
      {checkAdmin(currentUser) ? <NavAdmin /> : <Nav />}
    </header>
  )
}


export default Header;