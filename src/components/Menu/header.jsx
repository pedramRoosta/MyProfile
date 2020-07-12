import React from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import './header.scss'
import { ReactComponent as Logo } from '../../assets/chameleon.svg'
export const Header = () =>
    (
        <div className='header'>
            <Link to='/'>
                <Logo className='header-logo' /></Link>
            <nav className="header-nav">
                <Link to='/'> Home</Link>
                <Link to='/portfolio'> Portfolio</Link>
                <Link to='/about'> About</Link>
                <Link to='/contact'>Contact Me</Link>
                <Link to='/signing'>Sign in</Link>
            </nav>
        </div>
    )