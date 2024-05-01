import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import NavBarGo from '../components/Navbar';
import AddToCart from '../components/AddToCart';

const DealsPage = () => {
    return (
        <div>
            <NavBarGo />
            <div className="container">
                <p className="text-info">Weekly deals!</p>
            </div>

            <div className="overlay">
                <div className="container">
                    <h1 className="text-white">Summer Bonanza!!</h1>
                </div>
            </div>

            <section className="p-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md mb-2">
                            <div className="card bg-light text-dark">
                                <div className="card-body text-center">
                                    <p className="font-weight-bold">Iberian Paella</p>
                                    <p className="text-justify">Revolutionary in its rich blend of flavors and textures, our signature paella transports your taste buds from the vibrant streets of Spain to the azure shores of the Mediterranean...</p>
                                    <button className="btn btn-success">50</button>
                                </div>
                            </div>
                        </div>
                        <div class="col-md">
                    <div class="card bg-light text-dark">
                        <div class="card-body text-center">
                            <i class="bi bi-app"></i> 
                                <p class="font-weight-bold"> Burglar Burger</p>
                            <p class="text-justify">Embark on a mouthwatering journey inland with our discounted burgers, a more traditional option bursting with flavor. Crafted with care and seasoned to perfection, these hearty delights are a celebration of culinary heritage. For just 10 shells, experience the satisfaction of sinking your teeth into a timeless classic, bringing comfort and satisfaction to your plate.</p>                     
                                <button class="btn btn-success">
                                        <p> 10 </p>
                                </button>
                        </div>
                    </div>
             </div>

             <div class="col-md">
                <div class="card bg-light text-dark">
                    <div class="card-body text-center">
                        <i class="bi bi-app"></i> 
                        <p class="font-weight-bold"> Shrimp Cocktail</p>
                        <p class="text-justify">Dive into indulgence with our shrimp cocktail, a tantalizing blend of succulent shrimp, tangy cocktail sauce, and a refreshing squeeze of lemon. Refreshingly chilled and elegantly presented, this classic appetizer is the perfect prelude to a memorable dining experience. Treat yourself to a taste of luxury for just 20 shells and elevate your evening with each flavorful bite.</p>                     
                        <button class="btn btn-success">
                            <p> 20 </p>
                            </button>

                    </div>
            </div>
        </div>
                    </div>
                </div>
            </section>
            <AddToCart />
        </div>
    );
}

export default DealsPage;
