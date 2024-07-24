
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Welcome from './pages/Welcome'
import SignIn from './pages/Signin'
import Wip from './pages/wip'
import './assets/styles.css'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Welcome/>}/>
          <Route path="/welcome" element={<Welcome/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/wip" element={<Wip/>}/>
          <Route path="/signin" element={<SignIn/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
