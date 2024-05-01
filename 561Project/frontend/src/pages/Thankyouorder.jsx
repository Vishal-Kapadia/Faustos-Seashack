import logo from '../components/logo.svg';
import '../styles/Thankyouorder.css';
import NavbarGo from '../components/Navbar'

function Thankyouorder() {
  return (
    <div className="App">
        <NavbarGo />

      <header className="App-header">
       
       <div class="container">
    <div class="row">
      <div class="col-md-8 offset-md-2 overlay">
  
        <h1 class="heading">Thank You for Your Order!</h1>
        <p class="message">We hope you enjoy your meal!</p>
      </div>
    </div>
  </div>

        
      </header>
    </div>
  );
}

export default Thankyouorder;