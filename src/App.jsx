import { useState } from 'react';
import './App.css'
import "./index.css"

import { LoadingScreen } from './components/LoadingScreen';
import { Navbar } from './components/NavBar';
import { MobileMenu } from './components/MobileMenu';
import { Home } from './components/section/Home';
import { About } from './components/section/About';
import { Projects } from './components/section/Project';
import { Contact } from './components/section/Contact';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)}/>}{" "}
        <div className={`min-h-screen transition-opacity-700 duration-700 ${isLoaded ? "opacity-100":"opacity-0"} bg-black text-gray-100`}>
          
          <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
          <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
          <Home/>
          <About/>
          <Projects/>
          <Contact/>
        </div>
        
    
    </>);
}

export default App
