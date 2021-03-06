import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Addrecepie from './component/Addrecepie';
import Search from './component/Search';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import View from './component/View';

function App() {
  return (
    <div>
<BrowserRouter>
<Routes>
  <Route path='/'exact element={<Addrecepie/>}/>
  <Route path='/search' exact element={<Search/>}/>
  <Route path='/view' exact element={<View/>}/>
</Routes>

</BrowserRouter>
    </div>
  );
}

export default App;
