
import React, {useCallback, useState, useEffect} from 'react';
import ItemDisplay from './ItemDisplay';
import AddItemForm from './AddItemForm'
import {Box} from "@material-ui/core";

const API_URL = process.env.REACT_APP_API_URL;

function TodoListCard() {
    const [items, setItems] = useState(null);

    useEffect(() => {
        fetch(API_URL)
            .then(r => r.json())
            .then(setItems);
    }, []);

    const onNewItem = useCallback(
        (newItem) => {
            setItems([...items, newItem]);
        },
        [items],
    );

    const onItemUpdate = useCallback(
        (item) => {
            const index = items.findIndex(i => i.id === item.id);
            setItems([
                ...items.slice(0, index),
                item,
                ...items.slice(index + 1),
            ]);
        },
        [items],
    );

    const onItemRemoval = useCallback(
        (item) => {
            const index = items.findIndex(i => i.id === item.id);
            setItems([...items.slice(0, index), ...items.slice(index + 1)]);
        },
        [items],
    );

    if (items === null) return 'Loading...';

    return (
        <>
            <Box mb={3}>
                <AddItemForm onNewItem={onNewItem}/>
            </Box>
            {items.length === 0 && (
                <p className="text-center">No items yet! Add one above!</p>
            )}
            {items.map(item => (
                <ItemDisplay
                    item={item}
                    key={item.id}
                    onItemUpdate={onItemUpdate}
                    onItemRemoval={onItemRemoval}
                />
            ))}
        </>
    );
}

export default TodoListCard;
