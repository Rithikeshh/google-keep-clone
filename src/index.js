import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Components/Main';
import NotesContent from './Components/Main-Components/NotesContent';
import ReminderContent from './Components/Main-Components/ReminderContent';

const router = createBrowserRouter([
  {
    path : '/',
    element : <App/>,
    children :[
      {
        path: '/',
        element : <Main/>,
        children : [
          {
            path :'/',
            element : <NotesContent/>
          },
          {
            path : '/reminders',
            element : <ReminderContent/>
          },
          {
            path : '/archive',
            element : <div>Will add soon...</div>
          },
          {
            path : '/trash',
            element : <div>Will add soon...</div>
          },
        ]
      }
    ]
  }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <RouterProvider router={router}/>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
