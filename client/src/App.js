import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './views/home';
import Detail from './views/detail';
import Ver from './views/family/client/src/views/google46f2d02cdf588407.html'




function App() {

  return (
    <div>
      <BrowserRouter>
            <Routes>
                <Route element={<Main/>} path="/" default/>  
                <Route element={<Detail/>} path="/image/:id"/> 
                <Route element={<Ver/>} path="/google46f2d02cdf588407.html"/>
            </Routes>
    	</BrowserRouter>
    </div>
  );
}

export default App;
