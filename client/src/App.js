import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './views/home';
import Detail from './views/detail';
import Add from './views/add';




function App() {

  return (
    <div>
      <BrowserRouter>
            <Routes>
                <Route element={<Main/>} path="/" default/>  
                <Route element={<Detail/>} path="/image/:id"/>
                <Route element={<Add/>} path="/new"/>
            </Routes>
    	</BrowserRouter>
    </div>
  );
}

export default App;
