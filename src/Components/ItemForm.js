import React, { useState } from 'react';
import Picker from 'emoji-picker-react';

const ItemForm = ({ addItem }) => {

    const [ userInput, setUserInput ] = useState('');
    const [ showPicker, setShowPicker ] = useState(false);

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addItem(userInput);
        setUserInput("");
    }

    const onEmojiClick = (event, emojiObject) => {
        setUserInput(prevInput => prevInput + emojiObject.emoji);
        setShowPicker(false);
    };
    
    return (
        <form onSubmit={handleSubmit}>
            <input value={userInput} type="text" onChange={handleChange} placeholder="Enter item..."/>
            <img
                className="emoji-icon"
                src="https://icons.getbootstrap.com/assets/icons/emoji-smile.svg"
                onClick={() => setShowPicker(val => !val)} />
                {showPicker && <Picker
                pickerStyle={{ width: '40%' }}
                onEmojiClick={onEmojiClick} />}
            <span> is/are one of my favorite things.</span>
        </form>
    );
};

export default ItemForm;