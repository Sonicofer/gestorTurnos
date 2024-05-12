import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AppLayout from './layouts/AppLayout'
import Inicio from './views/Inicio'
import Login from './views/Login'

const Router = () => {
  return (
    <BrowserRouter>
       <Routes>
            <Route element = {<AppLayout/>}>
                <Route path='/' element = {<Inicio/>} index/>
                <Route path='/login' element = {<Login/>} />
            </Route>
       </Routes>
    </BrowserRouter>
  )
}

export default Router
