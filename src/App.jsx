import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Career from './pages/Career'
import VacancyDetail from './components/VacancyDetail'

const App = () => {
    return (
        <BrowserRouter>

            <Routes>
                <Route path='/' element={<Home />}  ></Route>
                <Route path='/contact' element={<Contact />}></Route>
                <Route path='/career' element={<Career />}></Route>
                <Route path='/vacancy/:url' element={<VacancyDetail />} ></Route>
            </Routes>

        </BrowserRouter>
    )
}

export default App