import React from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Portfolio from './components/portfolio';
function App() {
    return (
        <div className='app'>
           <Header/>
           <Portfolio />
           <Footer/>
        </div>
    );
}

export default App;