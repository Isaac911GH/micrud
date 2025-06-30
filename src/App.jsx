import React, { useState, useEffect } from 'react';
import Form from './components/Form';
import List from './components/List';
import './App.css';

function App() {
  
  const [items, setItems] = useState([]);


  const [itemToEdit, setItemToEdit] = useState(null);

  
  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem('items')) || [];
    setItems(storedItems);
  }, []);

  
  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
  }, [items]);

 
  const addOrUpdateItem = (newItem) => {
    if (itemToEdit) {
      setItems(items.map(item =>
        item.id === itemToEdit.id ? { ...newItem, id: item.id } : item
      ));
      setItemToEdit(null);
    } else {
      setItems([...items, { ...newItem, id: Date.now() }]);
    }
  };

 
  const deleteItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  
  const editItem = (item) => {
    setItemToEdit(item);
  };

  return (
    <div className="App">
      <h1>Aplicación de Evaluación de Alumnos</h1>
      <Form addOrUpdateItem={addOrUpdateItem} itemToEdit={itemToEdit} />
      <List items={items} deleteItem={deleteItem} editItem={editItem} />
    </div>
  );
}

export default App;
