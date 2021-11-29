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
        console.log(json)
        setFavoritesList(json)
      })
  }

  const addItem = (userInput) => {
    setUserInput(userInput)
    return fetch('http://localhost:8080/items', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "item": userInput,
        "likes": 0
      })
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json)
        // return json.data;
      })
      .catch((error) => {
        console.error(error);
      });
  };

 return (
   <div className="App">
     <ItemForm addItem={addItem}/>
     <FavoritesList favoritesList={favoritesList}/>
   </div>
 );
}
 
export default App;