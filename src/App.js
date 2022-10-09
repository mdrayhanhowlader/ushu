import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Added from './components/Added/Added';
import Home from './components/Home/Home';
import Main from './layouts/Main';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: () => {
            return fetch('players.json')
          },
          element: <Home></Home>
        },
        {
          path: '/home',
          loader: () => {
            return fetch('players.json')
          },
          element: <Home></Home>
        },
        {
          path: '/added',
          element: <Added></Added>
        }
      ]
    },
    {
      path: '/about',
      element: <About></About>
    }
  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
