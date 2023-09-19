import React, { useState } from 'react';
import About from './components/aboutMe'
import Header from './components/header';
import Footer from './components/footer';
import Portfolio from './components/portfolio';
import Contact from './components/contact';
import Resume from './components/resume';
import "./App.css";

export  function App() {
    const [active, setActive] = useState('about');

    const renderSelect = () => {
        switch(active) {
            case "about":
                return <About />;
            case "contact":
                return <Contact />;
            case "portfolio":
                return <Portfolio />;
            case "resume": 
                return <Resume />;
            default: 
                return null;
        }
    };

    return (
        <div className='app'>
            <Header active={active} setActive={setActive}/>
            <div>
               <main>{renderSelect()}</main>
            </div>
            <Footer/>
        </div>
    );
}

export default App;