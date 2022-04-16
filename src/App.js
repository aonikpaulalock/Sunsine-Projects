import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Services from './Pages/Home/Services/Services';
import WeddingGallery from './Pages/Home/WeddingGallery/WeddingGallery';
import Login from './Pages/Login/Login/Login';
import Signup from './Pages/Login/Signup/Signup';
import Footer from './Pages/Sheared/Footer/Footer';
import Header from './Pages/Sheared/Header/Header';
import Notfound from './Pages/Sheared/Notfound/Notfound';

function App() {
  return (
    <>
    <Header/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/service' element={<Services/>}></Route>
        <Route path='/gallery' element={<WeddingGallery/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="*" element={<Notfound/>}></Route>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
