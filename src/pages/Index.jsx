import React, { useState } from 'react';
import { Box, Button, Input, List, ListItem, IconButton, useToast } from '@chakra-ui/react';
import { FaPlus, FaTrash } from 'react-icons/fa';

const Index = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');
  const toast = useToast();

  const addTask = () => {
    if (input.trim() === '') {
      toast({
        title: 'No task entered',
        status: 'error',
        duration: 2000,
        isClosable: true,
      });
      return;
    }
    setTasks([...tasks, input]);
    setInput('');
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <Box p={5}>
      <Input
        placeholder="Add a new task"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        size="lg"
        mb={3}
      />
      <Button leftIcon={<FaPlus />} colorScheme="blue" onClick={addTask}>
        Add Task
      </Button>
      <List spacing={3} mt={5}>
        {tasks.map((task, index) => (
          <ListItem key={index} d="flex" justifyContent="space-between" alignItems="center">
            {task}
            <IconButton
              icon={<FaTrash />}
              onClick={() => deleteTask(index)}
              colorScheme="red"
              aria-label="Delete task"
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Index;