import React from 'react'
import Header from './Component/Header';
import Signup from './Component/Signup';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<><Header/><Signup/></>}></Route>
        <Route path='/singup' element={<><Signup/></>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App