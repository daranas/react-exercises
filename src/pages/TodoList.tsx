import { useState } from 'react';
import {
  Box,
  Paper,
  InputBase,
  Divider,
  Button,
  Card,
  Typography
} from '@mui/material';

const TodoList = () => {
  const [todoInput, setTodoInput] = useState("");
  const [todoList, setTodoList] = useState<any>([]);

  const generateId = () => {
    const highestId = Math.max.apply(
      Math,
      todoList.map((element:any) => {
        return element.id
      })
    );

    let newId = 1;

    if (highestId > 0) {
      newId = highestId + 1;
    }

    return newId;
  }

  const addItem = () => {
    if (todoInput !== "") {
      const item = { id: generateId(), text: todoInput };
      const tempArr = [...todoList, item];
      setTodoList(tempArr);
    }
    setTodoInput("");
  }

  const deleteItem = (id:any) => {
    setTodoList(todoList.filter((item:any) => item.id !== id));
  }

  return (
    <Box sx={{ width: 500 }}>
      <Paper
        component="div"
        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', mb: 2}}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Enter items"
          value={todoInput}
          onChange={e => {
            setTodoInput(e.target.value);
          }}
          onKeyDown={e => {
            if (e.key === "Enter") {
              addItem();
            }
          }}
        />
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        <Button onClick={addItem}>Add</Button>
      </Paper>
      {todoList.map((item:any) => (
        <Card
          key={item.id} 
          sx={{ 
            py: 1,
            px: 2,
            mb: 1,
            textAlign: 'left',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          <Typography sx={{ fontSize: 14, m: 0 }}>
            {item.text}
          </Typography>
          <Button size="small" color="error" onClick={() => deleteItem(item.id)}>Delete</Button>
        </Card>
      ))}
    </Box>
  );
}

export default TodoList;
