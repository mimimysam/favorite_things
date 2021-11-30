import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react/cjs/react.development';
 
const Item = ({item, deleteItem}) => {

    const [ likes, setLikes ] = useState(item.likes);

    const addLike = (e) => {
        e.preventDefault();
        setLikes(likes +1);
        return fetch('http://localhost:8080/items/'+item.id, {
            method: 'PATCH',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              "likes": likes +1
            })
        });
    };

    const handleDelete = (e) => {
        e.preventDefault();
        deleteItem(item.id);
    };

   return (
       <div className="item">
            {item.item}
            <span> </span>
            <FontAwesomeIcon icon={faThumbsUp} className="thumbIcon" onClick={addLike} />
            <span> </span>
            {likes}
            <span className="deleteBtn" onClick={handleDelete}> delete</span>
       </div>
   );
};
 
export default Item;