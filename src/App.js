import './App.css';
import { Routes, Route} from 'react-router-dom'
import GlobalStyle from './globalStyles';


import Header from './components/header/Header'
import Home from './components/home/Home'
import About from './components/about/About'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'


function App() {
  return ( 
    <>
    <GlobalStyle /> 
    <Header />
      <Routes>
        <Route path='/'  element={<Home />} ></Route>
        <Route path='/about' element={<About />} ></Route>
        <Route path='/portfolio' element={<Portfolio />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
      </Routes>
    <Footer />
    </>

  );
}

export default App;
