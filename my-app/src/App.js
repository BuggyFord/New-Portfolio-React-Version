import React, { useState } from 'react';
import About from './components/aboutMe'
import Header from './components/header';
import Footer from './components/footer';
import Portfolio from './components/portfolio';

export  function App() {
    const [active, setActive] = useState('firstCard');

    return (
        <div className='app'>
            <Header/>
            <div>
                <img src='my-app/public/images/180534F2-B242-4A48-803B-EECFE4B1C7BB_1_105_c.jpeg'/>
            </div>
            <Footer/>
        </div>
    );
}

export default App;