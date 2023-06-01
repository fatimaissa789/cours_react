// import logo from './logo.svg';
import './App.css';
import './app2.css';

import ProfilPhoto from './Component/Profile/ProfilPhoto';
// import React from "react";
import React from "react";
// import MyFirstComponent from "./MonpremierComponent";
import Adress from './Component/Profile/Adress';
const App = () => (
 <>
       <div class="card-container">
         <div class="upper-container">
            <div class="image-container">
               <ProfilPhoto/>
            </div>
         </div>
         <div class="lower-container">
            <div>
               <h3>Soukeyna Diallo</h3>
               <h6><Adress/></h6>
            </div>
           {/*  <div>
               <p>sodales accumsan ligula. Aenean sed diam tristique,
                  fermentum mi nec, ornare arch.
               </p>
            </div> */}
            <div>
               <a href="#" class="btn">View profile</a>
            </div>
         </div>
      </div>
 </>
);
export default App;

