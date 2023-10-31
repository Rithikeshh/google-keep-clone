import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Main from './Components/Main';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div>
      <Header/>
      <Outlet/>
    </div>
  );
}

export default App;
