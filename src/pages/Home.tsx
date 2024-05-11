import { Link } from 'react-router-dom';
import {
  Box,
  Button,
  ButtonGroup
} from '@mui/material';

const menu = [
  {
    path: 'todo-list',
    label: 'Todo List'
  }
]

const Home = () => {
  return (
    <Box>
      <ButtonGroup orientation="vertical">
        {menu.map((val, i) => 
          <Button
            key={i}
            component={Link} 
            to={val.path}>
              {val.label}
          </Button>
        )}
      </ButtonGroup>
    </Box>
  )
}

export default Home;
