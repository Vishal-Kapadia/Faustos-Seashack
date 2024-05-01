import './App.css';
import CustomNavbar from './components/Navbar';
import EntreesSection from './components/Entrees';
import EntreesBoxes from './components/Boxes';

function App() {

  // const url = "http://127.0.0.1:8000/" + 'api/cars/';

  return (
    <div>
      <CustomNavbar />
      <EntreesSection/>
      <EntreesBoxes/>
    </div>
  );
}

export default App;