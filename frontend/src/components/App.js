import React from 'react'
import './App.css'
import Navbar from './global/Navbar'
import Footer from './global/Footer'
import Main from './Main'
import { AuthProvider } from './helpers/Auth'
import ErrorBoundary from './helpers/ErrorBoundary'

const App = () => (
  <div className='App'>
    <ErrorBoundary>
      <AuthProvider>
        <Navbar/>
        <Main />
        <Footer/>
      </AuthProvider>
    </ErrorBoundary>
  </div>
);

export default App;
