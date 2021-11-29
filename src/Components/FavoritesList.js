import React from 'react';
import Item from './Item';

const FavoritesList = ({favoritesList}) => {
    return (
        <div>
            <h2>Favorites List</h2>
            {favoritesList.map(item => {
                return (
                    <Item item={item} key={item.id}/>
                )
            })}
        </div>
    );
 };
  
 export default FavoritesList;