import NavBar from './components/NavBar/NavBar'
import 'font-awesome/css/font-awesome.min.css';
import Container from './components/Container/Container';
import Home from './components/Home/Home';
import Favourite from './components/Favourite/Favourite';
import About from './components/About/About';
import NotFound from './components/NotFound/NotFound';
import { Routes, Route } from 'react-router-dom';




const App = () => {
  return (
    <main>
      <NavBar/>
      <Container>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/favourite" element={<Favourite/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
        
      </Container>   
    </main>
  );
};
export default App;