// import { Form, InputGroup, Button } = ReactBootstrap;
import {Grid, Button, TextField} from '@material-ui/core';
import React from "react";

function AddItemForm({onNewItem}) {

    const [newItem, setNewItem] = React.useState('');
    const [submitting, setSubmitting] = React.useState(false);

    const submitNewItem = (e) => {
        e.preventDefault();
        setSubmitting(true);
        fetch('/items', {
            method: 'POST',
            body: JSON.stringify({name: newItem}),
            headers: {'Content-Type': 'application/json'},
        })
            .then(r => r.json())
            .then(item => {
                onNewItem(item);
                setSubmitting(false);
                setNewItem('');
            });
    };

    return (
        <form onSubmit={submitNewItem}>

            <Grid container spacing={3}>
                <Grid item xs>
                    <TextField
                        fullWidth
                        placeholder="New Item"
                        value={newItem}
                        onChange={e => setNewItem(e.target.value)}
                    />
                </Grid>
                <Grid item xs="auto">
                    <Button variant="contained"
                            disabled={!newItem.length || submitting}
                            type="submit"
                    >{submitting ? 'Adding...' : 'Add Item'}</Button>
                </Grid>
            </Grid>

        </form>
    );
}

export default AddItemForm;
