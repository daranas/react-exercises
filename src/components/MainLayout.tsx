import { Link, Outlet } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Box,
  Button
} from '@mui/material';

const MainLayout = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Button 
              color="inherit"
              component={Link} 
              to={'/'}
              sx={{ textTransform: 'uppercase' }}>
              React Exercises
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
      <Box sx={{ mt: 6, display: 'flex', justifyContent: 'center' }}>
        <Outlet />
      </Box>
    </>
  )
}

export default MainLayout;
