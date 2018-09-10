import React, { Component } from 'react';
import './Personaje.css'

class Personaje extends Component {
    render() {
        const personajes =  [{nombre: 'Eric Cartman', foto: 'https://upload.wikimedia.org/wikipedia/en/7/77/EricCartman.png'
    }, {nombre: 'Stan Marsh', foto: 'https://upload.wikimedia.org/wikipedia/en/a/a7/StanMarsh.png'
    }, {nombre: 'Kyle Broflovski', foto: 'https://upload.wikimedia.org/wikipedia/en/2/25/KyleBroflovski.png'
    }, {nombre: 'Kenny McCormick', foto: 'https://vignette.wikia.nocookie.net/southpark/images/6/6f/KennyMcCormick.png/revision/latest?cb=20160409020502'
    }];
let counter = 1;
return(
    <div id="bigbox"><br/>
        <div>
        {personajes.map(elemento => 
            <ul id="medbox">
                <center><h5 id="Info"> Información </h5></center>
                <h5> Tarjeta N°{counter++} : {elemento.nombre}</h5>
                <div> 
                    <img id="avatar" src={elemento.foto} alt=""/>
                </div>
            </ul>
        )}
        </div>
    </div>
        )
    }
}




export default Personaje;