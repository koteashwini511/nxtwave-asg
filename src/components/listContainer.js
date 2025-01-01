// ListContainer.js
import React from 'react';
import ListItem from './listItem';

const ListContainer = ({ items }) => {
    return (
        <div className="list-container">
            <h2>Items List</h2>
            <ul>
                {items.map((item, index) => (
                    <ListItem key={index} item={item} />
                ))}
            </ul>
        </div>
    );
};

export default ListContainer;
