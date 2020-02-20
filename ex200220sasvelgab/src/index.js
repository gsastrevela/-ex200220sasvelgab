import React from 'react';
import ReactDOM from 'react-dom'
import Aplicacionsasvelgab2020 from './Aplicacionsasvelgab2020.js'
/*import Distribucion2sasvelgab2020 from './Distribucion2sasvelgab2020.js'*/
import Distribucion3sasvelgab2020 from './Distribucion3sasvelgab2020.js'

import { Router, Link } from "@reach/router";

import './estilos/hojaestilosasvelgab.css'
import Distribucion2sasvelgab2020 from './Distribucion2sasvelgab2020.js';

/*const Aplicacionsasvelgab2020 = () => ( 
    <div>
         
          <nav>
               <Link to="Distribucion1sasvelgab2020"></Link>
               <Link to="distribucion2sasvelgab2020"></Link>
         </nav>
          <Router>
             <Distribucion1sasvelgab2020 path="/Distribucion1" />
              <Distribucion2sasvelgab2020 path="/distribucion2" />
         </Router>
         
     </div>
     ); */


ReactDOM.render(<Aplicacionsasvelgab2020 />, document.getElementById('root'));


