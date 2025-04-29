
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './Layout'
import Home from './Pages/Home'
import Registration from './Pages/Rigistration'
import Display from './Pages/Display'

function App() {
 

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout/>}>
      <Route path='index' element={<Home/>}/>
      <Route path='home' element={<Home/>}/>
      <Route path='registration' element={<Registration/>}/>
      <Route path='display' element={<Display/>}/> 

      </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
