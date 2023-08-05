import './App.css';
import React from 'react';
import HeaderComponent from './HeaderComponent';
import FooterComponent from './FooterComponent';
import MainPage from './MainPage';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function App() {
    return (
        <div className='app'>
            <HeaderComponent />
            <MainPage />
            <FooterComponent />
        </div>
    );
}

export default App;
