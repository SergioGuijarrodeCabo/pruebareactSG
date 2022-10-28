import React, { Component } from "react";
import { NavLink } from "react-router-dom";
export default class Menu extends Component {
  render() {
    return (    
      <nav className="navbar navbar-expand-lg navbar-light bg-light"> 
      {/* navbar-dark bg-dark o custom -> style={{backgroundColor: "#e3f2fd"}} pero dejando className="navbar navbar-expand-lg" */}
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            Ir a Home
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/prueba">
                  Prueba
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Componente 2
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/error">
                  Sin ruta ❗
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Departamentos (por poner un ejemplo)
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      this.state.nombre
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      No uses map() si solo obtienes 1 objeto
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Utiliza Axios.get(url).then(res {'=>'} setState)
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
