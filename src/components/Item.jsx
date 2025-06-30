import React from "react";

// Componente que muestra la información de un alumno individual
function Item({ item, deleteItem, editItem }) {
  return (
    <li style={{ marginBottom: '1em', listStyle: 'none', border: '1px solid #ccc', padding: '1em', borderRadius: '8px' }}>
      <p><strong>Nombre:</strong> {item.nombre}</p>
      <p><strong>Asignatura:</strong> {item.asignatura}</p>
      <p><strong>Promedio:</strong> {item.promedio}</p>
      <p><strong>Escala:</strong> {item.escala}</p>
      <button onClick={() => editItem(item)}>Editar</button>
      <button onClick={() => deleteItem(item.id)} style={{ marginLeft: '10px' }}>Eliminar</button>
    </li>
  );
}

export default Item;
