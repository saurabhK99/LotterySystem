import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import HomeScreen from './screens/HomeScreen'
import ErrorScreen from './screens/ErrorScreen'

import Header from './components/Header'
import Footer from './components/Footer'

const App = () => {
    return (
        <Router>
        <Header />
        <Routes>
            <Route path='/' element={<HomeScreen/>} exact />
            <Route path="*" element={<ErrorScreen/>} />
        </Routes>
        <Footer />
        </Router>
    )
}

export default App
