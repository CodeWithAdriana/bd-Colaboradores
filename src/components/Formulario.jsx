import React, { useState } from "react";

export const Formulario = ({ agregarColaborador }) => {
  {
    /*useState: se usa para mantener los valores de los campos
del formulario y actualizarlos */
  }
  const [colaborador, setColaborador] = useState({
    nombre: "",
    correo: "",
    edad: "",
    cargo: "",
    telefono: "",
  });
  {
    /*handleChange: Actualiza el estado del formulario 
cada vez que se cambia un campo */
  }
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setColaborador((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  {
    /*handleSubmit: Se encarga de la logica de validacion y de invocar una funcion
para anadir el colaborador a la lista principal */
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !colaborador.nombre ||
      !colaborador.correo ||
      !colaborador.edad ||
      !colaborador.cargo ||
      !colaborador.telefono
    ) {
      alert("Todos los campos son obligatorios");
    } else {
      agregarColaborador(colaborador);
      setColaborador({
        nombre: "",
        correo: "",
        edad: "",
        cargo: "",
        telefono: "",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="nombre"
        value={colaborador.nombre}
        onChange={handleInputChange}
        placeholder="Nombre"
      />
      <input
        type="email"
        name="correo"
        value={colaborador.correo}
        onChange={handleInputChange}
        placeholder="Correo"
      />
      <input
        type="text"
        name="edad"
        value={colaborador.edad}
        onChange={handleInputChange}
        placeholder="Edad"
      />
      <input
        type="text"
        name="cargo"
        value={colaborador.cargo}
        onChange={handleInputChange}
        placeholder="Cargo"
      />
      <input
        type="text"
        name="telefono"
        value={colaborador.telefono}
        onChange={handleInputChange}
        placeholder="Teléfono"
      />
      <button type="submit">Agregar Colaborador</button>
    </form>
  );
};
