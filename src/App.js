import React from 'react';
//import logo from './logo.svg';
import "./styles/styles.scss"
//import './App.css';
import Curso from './Curso'


const App = () => (
  /*<Fragment>
    <div className="Saludo">
        <h1>Hola</h1>
        <p>Que tal?</p>
    </div>
    <div>
        <h1>Bien</h1>
        <p>y tu?</p>
        <img src="https://i.ytimg.com/vi/Gl_v5CLE17s/maxresdefault.jpg"/>
    </div>
  </Fragment>*/
  <>
    <div className="main-banner img-container l-section" id="main-banner">
    <div className = "ed-grid lg-grid-6">
      <div className="lg-cols-4 lg-x-2">
        <img className="main-banner__img" alt="banner" src="https://i.ytimg.com/vi/Gl_v5CLE17s/maxresdefault.jpg" />
        <div className="main-banner__data s-center">
          <p className="t2 s-mb-0">Pagina prohibida</p>
          <p>Ser mayor de edad</p>
          <a href="https://baidu.com" className="button">Quieres entrar?</a>
        </div>
      </div>
    </div>
  </div>
 
  <div className="ed-grid m-grid-3">
    <Curso />
    <Curso />
    <Curso />
  </div>

  </>

)

export default App;



//TODA ETIQUETA DEBE CERRARSE
//COMPONENTES DEBEN DEVOLVER SOLO UN ELEMENTO PADRE
//Apoyarse de los fragments cuando necesito devolver 2 elements
//class----->className
//for------->htmlFor