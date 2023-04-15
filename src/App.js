import './App.css';
import Navbar from './Components/Navbar';
import {Home} from './Screens/Home';
import {About} from './Screens/About';
import {News} from './Screens/News';
import {Carbon} from './Screens/carbon';
import {Route ,Routes, Navigate} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
          <Route path='/' element={<Navigate to="/Home"/>}/>
          <Route path='/Home' element={<Home/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/News' element={<News/>}/> 
          <Route path='/Carbon' element={<Carbon/>}/>
        </Routes>
    </div>
  );
}

export default App;
