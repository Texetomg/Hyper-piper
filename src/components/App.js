import React from 'react'
import './App.css'
import Navbar from './global/Navbar'
import Footer from './global/Footer'
import Main from './Main'
import AuthProvider from './global/Auth'

const App = () => (
  <div className='App'>
    <AuthProvider>
      <Navbar/>
      <Main />
      <Footer/>
    </AuthProvider>
  </div>
);

export default App;
