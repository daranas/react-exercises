import { useRoutes } from 'react-router-dom';

import MainLayout from './components/MainLayout';
import Home from './pages/Home';
import TodoList from './pages/TodoList';

const Router = () => {
  let routeConfig = useRoutes([
    {
      element: <MainLayout/>,
      children: [
        { path: "/", element: <Home/> },
        { path: "/todo-list", element: <TodoList/> }
      ]
    }
  ])

  return routeConfig;
}

export default Router;
