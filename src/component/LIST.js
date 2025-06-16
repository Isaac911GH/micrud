import React from 'react';
import Item from './ITEM'

function List({items, deleteItem, editItem}){
    return(
        <ul>
            {items.map((item)=> (
                <item
                key={item.id}
                item={item}
                deleteItem={deleteItem}
                editItem={deleteItem}
            />
            ))}
        </ul>
    );
}

export default List;