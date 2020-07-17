import React from 'react';
import "./styles/styles.scss"
//import './App.css';
import Curso from './Curso'

const cursos = [
  {"title": "Introduccion a buitre",
  "image":"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Buitre_Leonado_%2898727731%29.jpeg/375px-Buitre_Leonado_%2898727731%29.jpeg",
  "price":100,
  "paralelo":"1",
  "magister":"Fidel Rojas"
  },
  {
    "title":"Metodos y tecnicas de un buitre",
    "image":"https://elonce-media2.elonce.com.ar/humor/2016/03/15/x_1458046233.jpg",
    "price":130,
    "paralelo":"1",
    "magister":"Carlos Olivera"
  }, 
  {
    "title":"Taller de buitre avanzado",
    "image":"https://i0.wp.com/ancla-la.info/wp-content/uploads/2019/09/vulture-2849304_1280.jpg?w=500&ssl=1",
    "price":150,
    "paralelo":"2",
    "magister":"Antonio Medina"
  }
]

const App = () => (
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
    {
      cursos.map( c => <Curso title={c.title}
                              image={c.image}
                              price={c.price}
                              paralelo={c.paralelo}
                              magister={c.magister}
                />)
    }
  </div>

  </>

)

export default App;



//TODA ETIQUETA DEBE CERRARSE
//COMPONENTES DEBEN DEVOLVER SOLO UN ELEMENTO PADRE
//Apoyarse de los fragments cuando necesito devolver 2 elements
//class----->className
//for------->htmlFor