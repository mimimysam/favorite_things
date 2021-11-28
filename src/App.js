import React, { useState } from 'react';
import data from './mockData.json';
import FavoritesList from './Components/FavoritesList';
import ItemForm from './Components/ItemForm';
import './App.css';
 
function App() {
  const [ favoritesList, setFavoritesList ] = useState(data);

  const addItem = (userInput ) => {
    let copy = [...favoritesList];
    copy = [...copy, { id: favoritesList.length + 1, item: userInput }];
    setFavoritesList(copy);
  }

 return (
   <div className="App">
     <ItemForm addItem={addItem}/>
     <FavoritesList favoritesList={favoritesList}/>
   </div>
 );
}
 
export default App;