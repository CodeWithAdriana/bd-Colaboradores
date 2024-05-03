import React, { useState } from "react";

export const Buscador = ({ colaboradores, setFiltrados }) => {
  const [busqueda, setBusqueda] = useState("");

  const handleChange = (e) => {
    const valor = e.target.value.toLowerCase();
    setBusqueda(valor);
    const filtrados = colaboradores.filter(
      (colaborador) =>
        colaborador.nombre.toLowerCase().includes(valor) ||
        colaborador.correo.toLowerCase().includes(valor) ||
        colaborador.cargo.toLowerCase().includes(valor) ||
        colaborador.edad.includes(valor) ||
        colaborador.telefono.includes(valor)
    );
    setFiltrados(filtrados);
  };

  return (
    <input
      type="text"
      placeholder="Busca colaboradores..."
      value={busqueda}
      onChange={handleChange}
    />
  );
};
