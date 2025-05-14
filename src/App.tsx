import './App.css'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/home/HomePage'
import LoginPage from './pages/login/LoginPage'

function App() {
  return (
    <>
      <Routes>
        <Route path='' element={<HomePage />}></Route>
        <Route path='login' element={<LoginPage />}></Route>
      </Routes>
    </>
  )
}

export default App
