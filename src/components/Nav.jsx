import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav >
        <Link to = '/'>
            Inicio
        </Link>
        
        <Link to = '/login' className='mx-5'>
            Login
        </Link>

        
    </nav>
  )
}
export default Nav
