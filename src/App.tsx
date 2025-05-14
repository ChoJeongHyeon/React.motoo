import './App.css'
import { Routes, Route } from 'react-router-dom'

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
