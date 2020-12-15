import React from "react";
import {Container, Box} from '@material-ui/core';
import TodoListCard from './TodoListCard';

function App() {
  return (
      <Container maxWidth="sm">
          <Box pt={5}>
              <TodoListCard/>
          </Box>
      </Container>
  );
}

export default App;
