import './App.css'
import Certificates from './Components/Certificates';
import Contact from './Components/Contact';
import Experience from './Components/Experience';
import Footer from './Components/Footer';
import Intro from './Components/Intro';
import Navbar from "./Components/Navbar";
import Portfolio from './Components/Portfolio';
import Service from './Components/Service';
import Works from './Components/Works';
import { useContext } from 'react';
import { themecontext } from './Context';
function App() {
  const theme=useContext(themecontext);
  const darkmode=theme.state.darkmode;
  return (
    <div className="App " style={{background:darkmode?'black':'',color:darkmode?'white':''}}>
     <Navbar></Navbar>
    <Intro></Intro>
    <Service></Service>
    <Experience></Experience>
    <Works></Works>
    <Portfolio></Portfolio>
    <Certificates></Certificates>
    <Contact></Contact>
    <Footer></Footer>
    </div>
  )
}

export default App;
