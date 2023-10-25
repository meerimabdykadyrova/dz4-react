import React from 'react';

function Button({ handleAddClick, handleDeleteClick }) {
    return (
        <div className="button-container">
            <button className="button" onClick={handleAddClick}>ADD</button>
            <button className="buttonnn" onClick={handleDeleteClick}>DELETE</button>
        </div>
    );
}

export default Button;
