import { useState } from "react";
import { Alert } from "./components/Alert";
import { Buscador } from "./components/Buscador";
import { Formulario } from "./components/Formulario";
import { Listado } from "./components/Listado";
import { BaseColaboradores } from "./assets/BaseColaboradores";
import "./App.css";

const App = () => {
  const [colaboradores, setColaboradores] = useState(BaseColaboradores);
  const [filtrados, setFiltrados] = useState(colaboradores);
  const [alert, setAlert] = useState({ mensaje: "", color: "" });


  return (
    <>
      <div className="container">
        <h2>Lista de colaborares</h2>

        <Formulario colaboradores={colaboradores} setColaboradores={setColaboradores} setFiltrados={setFiltrados} setAlert={setAlert} />

        <Alert mensaje={alert.mensaje} color={alert.color} />

        <Buscador colaboradores={colaboradores} setFiltrados={setFiltrados} />

        <Listado filtrados={filtrados} />
      </div>
    </>
  );
};

export default App;
