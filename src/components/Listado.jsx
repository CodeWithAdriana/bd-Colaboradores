import React from "react";
import { BaseColaboradores } from "../BaseColaboradores";

export const Listado = () => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Correo</th>
          <th>Edad</th>
          <th>Cargo</th>
          <th>Teléfono</th>
        </tr>
      </thead>
      <tbody>
        {" "}
        {/*Cuerpo de la tabla*/}
        {/*BaseColaboradores: es la lista de array, .map: es un metodo de 
      los arrays de JS para iterar sobre los elementos, 
      en React transforma arrays de datos en arrays de componentes JSX
      la funcion dentro de .map() toma cada colaborador como argumento y retorna 
      una fila de tabla<tr> para ese colaborador*/}
        {BaseColaboradores.map((colaborador) => (
          <tr key={colaborador.id}>
            {/*key es una propiedad*/}
            <td>{colaborador.id}</td>
            <td>{colaborador.nombre}</td>
            <td>{colaborador.correo}</td>
            <td>{colaborador.edad}</td>
            <td>{colaborador.cargo}</td>
            <td>{colaborador.telefono}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
