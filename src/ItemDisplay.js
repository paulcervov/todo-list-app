import React from "react";
import {Box, Grid, IconButton, Paper} from '@material-ui/core';
import {
    CheckBox as CheckBoxIcon,
    CheckBoxOutlineBlank as CheckBoxOutlineBlankIcon,
    Delete as DeleteIcon
} from '@material-ui/icons';

const API_URL = process.env.REACT_APP_API_URL;

function ItemDisplay({item, onItemUpdate, onItemRemoval}) {

    const toggleCompletion = () => {
        fetch(`${API_URL}/${item.id}`, {
            method: 'PUT',
            body: JSON.stringify({
                name: item.name,
                completed: !item.completed,
            }),
            headers: {'Content-Type': 'application/json'},
        })
            .then(r => r.json())
            .then(onItemUpdate);
    };

    const removeItem = () => {
        fetch(`${API_URL}/${item.id}`, {method: 'DELETE'})
            .then(() => onItemRemoval(item));
    };

    return (
        <Paper>
            <Box p={2}>
                <Grid container spacing={2}>
                    <Grid item xs="auto">
                        <IconButton size="small" onClick={toggleCompletion} aria-label={
                            item.completed
                                ? 'Mark item as incomplete'
                                : 'Mark item as complete'
                        }>
                            {item.completed ? <CheckBoxIcon fontSize="small"/> :
                                <CheckBoxOutlineBlankIcon fontSize="small"/>}
                        </IconButton>
                    </Grid>
                    <Grid item xs>
                        {item.name}
                    </Grid>
                    <Grid item xs="auto">
                        <IconButton size="small" onClick={removeItem} color="secondary" aria-label="Remove Item">
                            <DeleteIcon fontSize="small"/>
                        </IconButton>
                    </Grid>
                </Grid>
            </Box>
        </Paper>

    );
}

export default ItemDisplay;
