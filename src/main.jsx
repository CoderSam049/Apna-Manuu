import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import Contact from './pages/Contact';
import TestPage from './pages/TestPage';
import ComputerHTest from './pages/ComputerHTest';
import DataStructure from './pages/DataStructure';
import Micropro from './pages/Micropro';
import SoftwareEng from './pages/SoftwareEng';
import NotesPage from './pages/NotesPage';
import Signin from './pages/Signin';
import REactPage from './pages/REactPage';
import DSASection from './pages/DsaSheet';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
   
      {
        path: '/contact',
        element: <Contact/>
      },
      {
        path: '/test',
        element: <TestPage/>
      },
      {
        path: '/test/chn',
        element: <ComputerHTest/>
      },
      {
        path: '/test/dsa',
        element: <DataStructure/>
      },
      {
        path: '/test/microprocessor',
        element: <Micropro/>
      },
      {
        path: '/test/softwareEng',
        element: <SoftwareEng/>
      },
      {
        path: '/test/react',
        element: <REactPage/>
      },
      {
        path: '/notes',
        element: <NotesPage/>
      },
      {
        path: '/login',
        element: <Signin/>
      },
      {
        path: '/dsaSheet',
        element: <DSASection/>
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
