import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import SignIn from './pages/Signin'
import SignUp from './pages/Signup'
import Wip from './pages/wip'
import TermsCondition from './pages/Terms_condition'
import './assets/styles.css'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<SignIn/>}/>
          <Route path="/admin/signin" element={<SignIn/>}/>
          <Route path="/admin/signup" element={<SignUp/>}/>
          <Route path="/admin/terms" element={<TermsCondition/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/wip" element={<Wip/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
