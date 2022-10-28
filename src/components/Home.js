import React, { Component } from "react";
import prueba from './../assets/images/img-prueba.jpg'

export default class Home extends Component {
  render() {
    return (
      <div>
        <h1>Bienvenido a Home</h1>
        <hr />
        <br />

{/* ------------ TABLA DEFAULT PARA EL EXAMENNN ------------------------------ */}
        <table className="table table-secondary">
          {" "}
          {/* Añade al className color con table-primary, secondary, success, danger, warning
        info, ligth y dark 😎  */}
          {/* Si quieres que resalten tonalidades distintas añade también al className:
            table-striped  --> Las filas resaltan
            table-striped-columns  --> Si lo prefieres en columnas 
            table-hover  --> Si quieres que resalten on mouse over
        */}
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            
          </tbody>
        </table>
        <hr />


{/*----------- UN INPUT PARA EL EXAMENNN lo metes dentro del form -------------------- */}

        <h4>
         aaa
        </h4>
        {/* Input con value y todo recuerda cambiarlo a DefaultValue si no deja escribir yatusabe */}
        <form className="form-floating">
          <input
            type="email"
            className="form-control"
            id="floatingInputValue"
            placeholder="name@example.com"
            value="Recuerda cambiar a defaultValue si no te deja modificar este input en los PUT"
          />
          <label for="floatingInputValue">Input with value</label>
        </form>

        <hr />


{/* --------------- BOTONESSS pero mejor USA NavLink 
pero te sirve para darle estilo si al className del NavLink le pones por ejemplo: btn btn-primary DE NADAAA
 */}

        <h4>BOTONES BOTONES BOTONES</h4>
        <h5>De tò loh tipoh y de tò loh coloreh 👁👄👁</h5><br/>
        <button type="button" class="btn btn-primary">Primary</button>
        <button type="button" class="btn btn-secondary">Secondary</button>
        <button type="button" class="btn btn-success">Success</button>
        <button type="button" class="btn btn-danger">Danger</button>
        <button type="button" class="btn btn-warning">Warning</button>
        <button type="button" class="btn btn-info">Info</button>
        <button type="button" class="btn btn-light">Light</button>
        <button type="button" class="btn btn-dark">Dark</button>
        <button type="button" class="btn btn-link">Link</button>
        <br/>
        <button type="button" class="btn btn-outline-primary">Primary</button>
        <button type="button" class="btn btn-outline-secondary">Secondary</button>
        <button type="button" class="btn btn-outline-success">Success</button>
        <button type="button" class="btn btn-outline-danger">Danger</button>
        <button type="button" class="btn btn-outline-warning">Warning</button>
        <button type="button" class="btn btn-outline-info">Info</button>
        <button type="button" class="btn btn-outline-light">Light</button>
        <button type="button" class="btn btn-outline-dark">Dark</button>
        
        <div class="d-grid gap-2 col-4 mx-auto"> {/* TIP: cambia el numero del col-n al que quieras para el width */}
            <button class="btn btn-primary" type="button">Button</button>
            <button class="btn btn-primary" type="button">Button</button>
        </div>

        <hr/>


{/* ------- UN CARD PREDETERMINADO COMO LA PRACTICA DE LA CHAMPIONS (la ficha del jugador) */}

        <h5>Y aqui una card por si acaso 😋</h5>
        <div class="card text-center">
        <div class="card-header">
            Featured
        </div>
        <div class="card-body">
            <h5 class="card-title">Special title treatment</h5>
            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
        <div class="card-footer text-muted">
            2 days ago
        </div>
        </div>

{/* -------------- y ESTO ES PARA LAS IMAGENES, NO USAR COMO ICONO QUE QUEDA FEITO ------------------- */}

        <hr/>
        <h5>Esto lo encontré de paso, por si tenés que poner una imagen</h5>
        <p>Hazlo, pero con estilo 💄</p>
        {/* Copia este cacho de figure a figure */}
        <figure class="figure">
          <img src={prueba} width="300" class="figure-img img-fluid rounded" alt="..." />
          <figcaption class="figure-caption text-end">
            A caption for the above image.
          </figcaption>
        </figure>
      </div>

/* -------------- ESO ES TODO LO QUE SE ME OCURRE DE ELEMENTOS NO QUIERO PETAR ESTO DE MUCHAS COSAS ----------------- */
    );
  }
}
