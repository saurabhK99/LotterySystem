import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import HomeScreen from './screens/HomeScreen'
import ErrorScreen from './screens/ErrorScreen'
import AboutScreen from './screens/AboutScreen'

import Header from './components/Header'
import Footer from './components/Footer'

const App = () => {
    return (
        <Router>
            <Header />
            <div  style={{minHeight:'85vh'}}>
            <Routes>
                <Route path='/' element={<HomeScreen />} exact />
                <Route path='/about' element={<AboutScreen />} />
                <Route path='*' element={<ErrorScreen />} />
            </Routes>
            </div>

            <Footer />
        </Router>
    )
}

export default App
