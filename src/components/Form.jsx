import React, { useState, useEffect } from 'react';

function Form({ addOrUpdateItem, itemToEdit }) {
  const [nombre, setNombre] = useState('');
  const [asignatura, setAsignatura] = useState('');
  const [promedio, setPromedio] = useState('');

  useEffect(() => {
    if (itemToEdit) {
      setNombre(itemToEdit.nombre);
      setAsignatura(itemToEdit.asignatura);
      setPromedio(itemToEdit.promedio);
    } else {
      setNombre('');
      setAsignatura('');
      setPromedio('');
    }
  }, [itemToEdit]);

  const calcularEscala = (prom) => {
    if (prom >= 6.5) return 'Destacado';
    if (prom >= 5.6) return 'Buen trabajo';
    if (prom >= 4.0) return 'Con mejora';
    return 'Deficiente';
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const prom = parseFloat(promedio);
    if (!nombre || !asignatura || isNaN(prom) || prom < 1 || prom > 7) {
      alert('Por favor ingresa todos los campos correctamente. El promedio debe ser entre 1.0 y 7.0');
      return;
    }

    const escala = calcularEscala(prom);

    addOrUpdateItem({
      nombre,
      asignatura,
      promedio: prom,
      escala
    });

    setNombre('');
    setAsignatura('');
    setPromedio('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nombre del alumno"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      <input
        type="text"
        placeholder="Asignatura"
        value={asignatura}
        onChange={(e) => setAsignatura(e.target.value)}
      />
      <input
        type="number"
        step="0.1"
        placeholder="Promedio"
        value={promedio}
        onChange={(e) => setPromedio(e.target.value)}
      />
      <button type="submit">
        {itemToEdit ? 'Actualizar' : 'Agregar'}
      </button>
    </form>
  );
}

export default Form;

