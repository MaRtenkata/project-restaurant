import { useAuth } from "../context/AuthContext";
import { checkAdmin } from "../services/util";
import Nav from "./Nav";
import NavAdmin from "./NavAdmin";
import NavUser from "./NavUser";





function Header({ img }) {

  const { currentUser } = useAuth();


  function checkUser(currentUser) {
    if(currentUser){
        if(checkAdmin(currentUser)){
            return <NavAdmin></NavAdmin>
        }else{
            return <NavUser></NavUser>
        }
    }else{
        return <Nav> </Nav>
    }
}

  

  return (
    <header id="mu-header">
      {checkUser(currentUser)}
    </header>
  )
}


export default Header;