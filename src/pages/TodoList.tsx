import {
  Box,
  Paper,
  InputBase,
  Divider,
  Button
} from '@mui/material';

const TodoList = () => {
  return (
    <Box sx={{ width: 500 }}>
      <Paper
        component="div"
        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center'}}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Enter items"
        />
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        <Button>Add</Button>
      </Paper>
    </Box>
  );
}

export default TodoList;
