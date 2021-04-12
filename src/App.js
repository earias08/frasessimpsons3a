import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Frase from "./components/Frase";
import { useState, useEffect } from "react";
import Spinner from "./components/Spinner";

function App() {
  // creo el state
  const [personaje, setPersonaje] = useState({});
  const [cargando, setCargando] = useState(false);

  useEffect(() => {
    // logica a ejecutar
    consultarApi();
  }, []);

  const consultarApi = async () => {
    setCargando(true);
    const respuesta = await fetch(
      "https://thesimpsonsquoteapi.glitch.me/quotes"
    );
    const resultado = await respuesta.json();
    console.log(respuesta);
    console.log(resultado[0]);

    setTimeout(() => {
      // guardar objeto dentro del state
      setPersonaje(resultado[0]);
      setCargando(false);
    }, 3000);
  };

  // operador ternario (condicion) ? (lo que quiero hacer si la condicion es verdadera) : (lo que quiero que haga si la condicion es falsa)
  const mostrarComponente =
    cargando === true ? (
      <Spinner></Spinner>
    ) : (
      <Frase personaje={personaje}></Frase>
    );

  return (
    <section className="container text-center my-5">
      <article className="d-flex flex-column align-items-center">
        <img
          src={process.env.PUBLIC_URL + "logo.png"}
          alt="Logo de los Simpsons"
          className="w-75"
        />
        <Button
          variant="warning"
          className="my-5"
          onClick={() => consultarApi()}
        >
          Obtener frase
        </Button>
      </article>
      {mostrarComponente}
    </section>
  );
}

export default App;
