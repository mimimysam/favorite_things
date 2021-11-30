import React from 'react';
import Item from './Item';

const FavoritesList = ({favoritesList, deleteItem}) => {
    return (
        <div>
            <h2>Favorites List</h2>
                {favoritesList.map(item => {
                    return (
                        <Item item={item} key={item.id} deleteItem={deleteItem}/>
                    )
                })}
        </div>
    );
 };
  
 export default FavoritesList;