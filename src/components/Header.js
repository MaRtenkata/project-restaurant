import { useAuth } from "../context/AuthContext";
import { checkAdmin } from "../services/util";
import Nav from "./Nav";
import NavAdmin from "./NavAdmin";





function Header({ img }) {

  const { currentUser } = useAuth();

  

  return (
    <header id="mu-header">
      {checkAdmin(currentUser) ? <NavAdmin /> : <Nav />}
    </header>
  )
}


export default Header;