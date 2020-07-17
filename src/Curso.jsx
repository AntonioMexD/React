import React from 'react'
import PropTypes from 'prop-types'

const Curso = ({title, image, price, paralelo, magister}) => (
    <article className="card" id={title}>
      <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
        <img src={image} alt={title} />
      </div>
      <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
        <h3 className="center">{title}</h3>
        <div className="s-main-center">
          {`Magister: ${magister}`}
        </div>
        <div className="s-main-center">
          {`Paralelo: ${paralelo}`}
        </div>
        <div className="s-main-center">
          <a className="button--ghost-alert button--tiny" href="#">{`$ ${price} USD`}</a>
        </div>
      </div>
    </article>
)

Curso.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.number,
  magister: PropTypes.string,
  paralelo: PropTypes.string
}

Curso.defaultProps = {
  title: "No se encontro titulo",
  image: "No hay imagen",
  price: "--",
  magister: "",
  paralelo: "--"
}

export default Curso