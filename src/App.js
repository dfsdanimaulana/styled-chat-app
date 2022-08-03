import styled from 'styled-components'
// import react router dom
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

// pages
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'

// create styled component
const Container = styled.div``

// create router
const App = () => {
    return (
        <Container>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Routes>
            </Router>
        </Container>
    )
}

export default App
