import React from 'react';
import Container from '@material-ui/core/Container';
import Navbar from './components/Navbar';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import TodoContextProvider from './contexts/TodoContext';

function App() {
  return (
    <TodoContextProvider>
      <Navbar />
      <Container maxWidth="sm">
        <div className="appContainer">
          <TodoForm />
          <TodoList />
        </div>
      </Container>
    </TodoContextProvider>
  );
}

export default App;
