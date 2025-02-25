import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/LandingPage'
import SignIn from './routes/SignIn'
import Checkout from './pages/payment/Checkout'
import Razorpay from './pages/razorpay/razorpay'
import Success from './pages/razorpay/Success'
function App() {
  return (<Router>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/signin' element={<SignIn/>} />
      <Route path='/checkout' element={<Checkout/>} />
      <Route path='/razorpay' element={<Razorpay/>} />
      <Route path='/paymentsuccess' element={<Success/>} />
    </Routes>
  </Router>
  )
}

export default App
