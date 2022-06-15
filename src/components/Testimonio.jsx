import React from "react";
import '../stylesheets/Testimonio.css'

function Testimonio(props) {
  return(
    <div className="contenedor-testimonio">
      <img className="imagen-testimonio" src={require('../img/testimonio-emma.png')} alt="emma-img"/>
      <div className="contenedor-texto-testimonio">
        <p className="nombre-testimonio">Emma bostian en Suecia</p>
        <p className="cargo-testimonio">Ingeniera de Software en Spotify</p>
        <p className="texto-testimonio">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit ipsum animi sequi qui rerum fugiat aliquid, perspiciatis, optio delectus earum error fuga cumque corrupti dolores provident ipsam ea? Enim, atque.</p>
      </div>
    </div>
  );
}

export default Testimonio;