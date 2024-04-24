//import './App.css';
import NavbarGo from '../components/Navbar'
import Footerbox from '../components/Footer'
//import Note from "../components/Note"

function Home() {

  // const url = "http://127.0.0.1:8000/" + 'api/cars/';

  return (
    <div>
      <NavbarGo />
      
      <section className="bg-dark text-primary p-4 text-center">
        <div className="container">
            <div>
                <div>
                    <h1>Welcome to Fausto's Seashack!</h1>
                    <h4>Check out what we have to offer below!</h4>
                </div>
            </div>
        </div>
      </section>

      <section className="p-4">
        <div className="container-fluid">
            <div className="row text-center">
                <div className="col-md">
                    <div className="card bg-light text-dark pb-2">
                        <div className="card-body text-center">
                            <h1 className="card-title mb-3 text-warning">
                                Daily Discounts
                            </h1>
                            <p className="card-text mb-3">
                                This will list all the items that are discounted.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md">
                    <div className="card bg-light text-dark pb-2">
                        <div className="card-body text-center">
                            <h1 className="card-title mb-3 text-warning text-wrap">
                                Promotional Items
                            </h1>
                            <p className="card-text">
                                This will list all the items that we think customers should try out this season.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md">
                    <div className="card bg-light text-dark pb-2">
                        <div className="card-body text-center">
                            <h1 className="card-title mb-3 text-warning">
                                Hours of Operation
                            </h1>
                            <p className="card-text">
                                <ul className="text-dark text-wrap">
                                    <li className="pb-4">
                                        Monday thru Thursday: 9AM to 8PM
                                    </li>
                                    <li className="pb-4">
                                        Friday: 9AM to 6PM
                                    </li>
                                    <li className="mb-2">
                                        Saturday thru Sunday: <span className="text-warning">CLOSED</span>
                                    </li>
                                </ul>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      <Footerbox />
    </div>
  );
}

export default Home;