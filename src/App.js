import {  Route, Routes } from "react-router-dom";
import {AuthProvider} from "./context/AuthContext";
import Gallery from "./views/Gallery/Gallery";
import LendingPage from "./views/LandingPage/LandingPage";
import Login from "./views/Login/Login";
import Menu from "./views/Menu/Menu";
import Register from "./views/Register/Register";
import Reservation from "./views/Reservation/Reservation";
import Header from "./components/Header";
import Footer from "./components/Footer"
import AddItem from "./views/AddItem/AddItem";



function App() {
  return (
   <AuthProvider>
    <div className="App">

      <Header/>
      <main>
        <Routes>
          <Route path="/" element={<LendingPage />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/add-item" element={<AddItem />} />
        </Routes>
      </main>

      <Footer/>
    </div>
    </AuthProvider>
  );
}

export default App;
