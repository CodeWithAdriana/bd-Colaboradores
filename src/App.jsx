import { useState } from "react";
import { Alert } from "./components/Alert";
import { Buscador } from "./components/Buscador";
import { Formulario } from "./components/Formulario";
import { Listado } from "./components/Listado";
import { BaseColaboradores } from "./assets/BaseColaboradores";
import "./App.css";

const App = () => {
  const [colaboradores, setColaboradores] = useState([BaseColaboradores]);
  const [filtrados, setFiltrados] = useState(BaseColaboradores);
  const [alertInfo, setAlertInfo] = useState({ message: "", type: "" });

  const agregarColaborador = (nuevoColaborador) => {
    if (
      !nuevoColaborador.nombre ||
      !nuevoColaborador.correo ||
      !nuevoColaborador.edad ||
      !nuevoColaborador.cargo ||
      !nuevoColaborador.telefono
    ) {
      setAlertInfo({
        message: "Error: Todos los campos son necesarios.",
        type: "error",
      });
      return;
    }

    const nuevosColaboradores = [...colaboradores, nuevoColaborador];
    setColaboradores(nuevosColaboradores);
    setFiltrados(nuevosColaboradores);
    setAlertInfo({
      message: "Colaborador agregado correctamente!",
      type: "success",
    });
  };

  return (
    <>
      <h2>Lista de colaborares</h2>

      {alertInfo.message && (
        <Alert message={alertInfo.message} type={alertInfo.type} />
      )}

      <Formulario agregarColaborador={agregarColaborador} />
      <Buscador colaboradores={colaboradores} setFiltrados={setFiltrados} />
      <Listado colaboradores={filtrados} />
    </>
  );
};

export default App;
