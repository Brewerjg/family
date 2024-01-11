import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './views/home';
import Detail from './views/detail';
import Add from './views/add';
import Login from './views/login';
import Register from './views/register';





function App() {


  return (
    <>
      
        <BrowserRouter>
              <Routes>
                  <Route element={<Login/>} path="/" default/>
                  <Route element={<Register/>} path="/register" /> 
                  <Route element={<Main/>} path="/dashboard" />   
                  <Route element={<Detail/>} path="/image/:id"/>
                  <Route element={<Add/>} path="/new"/>
              </Routes>
          </BrowserRouter>
        
    </>
  );
}

export default App;
