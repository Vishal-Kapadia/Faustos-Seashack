//import './App.css';
import NavbarGo from '../components/Navbar'
import EntreesSection from '../components/Entrees'
import EntreesBoxes from '../components/Boxes'
import AddToCart from '../components/AddToCart'
import Footer from '../components/Footer';

//import Note from "../components/Note"

function Entrees() {

  // const url = "http://127.0.0.1:8000/" + 'api/cars/';

  return (
    <div>
      <NavbarGo />
      <EntreesSection/>
      <EntreesBoxes/>
      <AddToCart />
      <Footer/>
    </div>
  );
}

export default Entrees;