import React, { useState, useEffect } from 'react';
import FavoritesList from './Components/FavoritesList';
import ItemForm from './Components/ItemForm';
import './App.css';

function App() {
  const [ favoritesList, setFavoritesList ] = useState([]);
  const [ userInput, setUserInput ] = useState("");

  useEffect(() => {
    getFavorites();
  }, [userInput]);

  const getFavorites = () => {
    return fetch('http://localhost:8080/items')
      .then((response) => response.json())
      .then((json) => {
        setFavoritesList(json);
      });
  };

  const addItem = (userInput) => {
    setUserInput(userInput);
    fetch('http://localhost:8080/items', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "item": userInput,
        "likes": 0
      })
    });
    getFavorites();
  };

  const deleteItem = (id) => {
    fetch('http://localhost:8080/items/'+id, {
        method: 'DELETE',
        headers: {
          Accept: 'application/json'
        }
    });
    getFavorites();
};

 return (
   <div className="App">
     <ItemForm addItem={addItem}/>
     <FavoritesList favoritesList={favoritesList} deleteItem={deleteItem}/>
   </div>
 );
};
 
export default App;