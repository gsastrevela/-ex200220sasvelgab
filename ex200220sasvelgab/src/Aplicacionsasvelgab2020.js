import React, {Component } from 'react'
import Distribucion1sasvelgab2020 from './“Distribucion1sasvelgab2020'
import Distribucion2sasvelgab2020 from './Distribucion2sasvelgab2020'
import Distribucion3sasvelgab2020 from './Distribucion3sasvelgab2020'


class Aplicacionsasvelgab2020 extends Component {
    render(){
        return(
            <div>
                <div className="menusasvelgab">
                        <div className="menusasvelgab__elementosasvelgab"><a href="#">Distribucion 1</a></div>
                        <div className="menusasvelgab__elementosasvelgab"><a href="#">Distribucion 2</a></div>
                        <div className="menusasvelgab__elementosasvelgab"><a href="#">Distribucion 3</a></div>
                        <div className="menusasvelgab__elementosasvelgab"><a href="#">Distribucion 4</a></div>
                </div>
               < Distribucion1sasvelgab2020 />
               <Distribucion2sasvelgab2020 />
               <Distribucion3sasvelgab2020 />
               

            </div>
        )
    }
}

export default Aplicacionsasvelgab2020