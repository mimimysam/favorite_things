import React, { useState } from 'react';

const ItemForm = ({ addItem }) => {

    const [ userInput, setUserInput ] = useState('');

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addItem(userInput);
        setUserInput("");
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <input value={userInput} type="text" onChange={handleChange} placeholder="Enter item..."/>
            <span> is/are one of my favorite things.</span>
        </form>
    );
};

export default ItemForm;