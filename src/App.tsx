import './App.css'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/home/HomePage'
import LoginPage from './pages/login/LoginPage'
import RegisterPage from './pages/register/RegisterPage'

function App() {
  return (
    <>
      <Routes>
        <Route path='' element={<HomePage />}></Route>
        <Route path='login' element={<LoginPage />}></Route>
        <Route path='register' element={<RegisterPage />}></Route>
      </Routes>
    </>
  )
}

export default App
