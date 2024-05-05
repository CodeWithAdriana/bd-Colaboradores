import { useState } from "react";
import { limpiar } from "../utils/limpiar";

export const Formulario = ({
  colaboradores,
  setColaboradores,
  setFiltrados,
  setAlert,
}) => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [edad, setEdad] = useState("");
  const [cargo, setCargo] = useState("");
  const [telefono, setTelefono] = useState("");

  function enviarFormulario(e) {
    e.preventDefault();
    if (!nombre || !email || !edad || !cargo || !telefono) {
      setAlert({ mensaje: "Completa todos los campos!", color: "red" });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setAlert({ mensaje: "El formato de correo es incorrecto", color: "red" });
      return;
    }

    //Agregar
    const ultimoId = parseInt(colaboradores[colaboradores.length - 1].id);
    const nuevoColaborador = {
      id: ultimoId + 1,
      nombre: nombre,
      correo: email,
      edad: edad,
      cargo: cargo,
      telefono: telefono,
    };

    setColaboradores([...colaboradores, nuevoColaborador]);
    setFiltrados([...colaboradores, nuevoColaborador]);

    //Mensaje ok
    setAlert({ mensaje: "Colaborador agregado", color: "green" });
    limpiar(setNombre, setEmail, setEdad, setCargo, setTelefono);
    console.log(colaboradores);
  }

  return (
    <>
      <form onSubmit={enviarFormulario} className="formulario form-control">
        <input
          onChange={(e) => setNombre(e.target.value)}
          placeholder="Nombre del colaborador"
          type="text"
          className="form-control"
          value={nombre}
        />
        <input
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Correo del colaborador"
          type="text"
          className="form-control"
          value={email}
        />
        <input
          onChange={(e) => setEdad((e.target.value.length <= 2) ? e.target.value : edad)}
          placeholder="Edad del colaborador"
          type="number"
          className="form-control"
          value={edad}
        />
        <input
          onChange={(e) => setCargo(e.target.value)}
          placeholder="Cargo del colaborador"
          type="text"
          className="form-control"
          value={cargo}
        />
        <input
          onChange={(e) => setTelefono((e.target.value.length <= 10) ? e.target.value : telefono)}
          placeholder="Telefono del colaborador"
          type="number"
          className="form-control"
          value={telefono}
        />
        <button type="submit" className="btn btn-purple text-white">
          Agregar colaborador
        </button>
      </form>
    </>
  );
};
