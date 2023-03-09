import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from './routes/Home';
import Search from './routes/Home/Search';
import FindUser from './routes/Home/Search/FindUser';
import NotFound from './routes/Home/Search/NotFound';
import Start from './routes/Home/Start';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} >
          <Route index element={<Navigate to={"home"} />} />
          <Route path='home' element={<Start />} />
          <Route path='search' element={<Search />} >
            <Route path=':userName' element={<FindUser />} />
            <Route path='not-found' element={<NotFound/>}/>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
