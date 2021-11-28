import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'
 
const Item = ({item}) => {
   return (
       <div>
            {item.id}. {item.item}
            <span> </span>
            {/* <button className="thumbs-up" > */}
            <FontAwesomeIcon icon={faThumbsUp} />
            {/* </button> */}
       </div>
   );
};
 
export default Item;