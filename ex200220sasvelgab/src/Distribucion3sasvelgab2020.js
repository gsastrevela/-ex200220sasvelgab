import React, {Component } from 'react'
import Imagen from 'react-image'

class Distribucion3sasvelgab2020 extends Component {
	render(){
		return(
			<div>
                <div className="fotossasvelgab">
                    <div><Imagen alt="foto 1" src={require('./img/Paisaje1.jpg')} /></div>
                    <div><Imagen alt="foto 2" src={require('./img/Paisaje2.jpg')} /></div>
                    <div><Imagen alt="foto 3" src={require('./img/Paisaje3.jpg')} /></div>
                    <div><Imagen alt="foto 4" src={require('./img/Paisaje4.jpg')} /></div>
                    <div><Imagen alt="foto 5" src={require('./img/Paisaje5.jpg')} /></div>
                    <div><Imagen alt="foto 6" src={require('./img/Paisaje6.jpg')} /></div>
                    <div><Imagen alt="foto 7" src={require('./img/Paisaje7.jpg')} /></div>
                    <div><Imagen alt="foto 8" src={require('./img/Paisaje8.jpg')} /></div>
                    <div><Imagen alt="foto 9" src={require('./img/Paisaje9.jpg')} /></div>
                    <div><Imagen alt="foto 10" src={require('./img/Paisaje10.jpg')} /></div>
                   
                </div>
			</div>
        )	
	}
}

export default Distribucion3sasvelgab2020