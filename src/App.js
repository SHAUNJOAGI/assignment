import logo from './logo.svg';
import './App.css';
import Add from './components/Add';
import Navibar from './components/Navibar';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Navibar/>
      <Routes>
        <Route path='/house' element={<Home/>}/>
        <Route path='/plus' element={<Add/>}/>
      </Routes>
      {/*<home/>*/}
      {/*<Add/>*/}
    </div>
  );
}

export default App;
