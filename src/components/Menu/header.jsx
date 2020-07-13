import React from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import './header.scss'
import { ReactComponent as Logo } from '../../assets/chameleon.svg'
import { auth } from '../../firebase/firebase.utils'
export const Header = ({ currentUser }) =>
    (
        <div className='header'>
            <Link to='/'>
                <Logo className='header-logo' /></Link>
            <nav className="header-nav">
                <Link to='/' className='option'> Home</Link>
                <Link to='/portfolio' className='option'> Portfolio</Link>
                <Link to='/about' className='option'> About</Link>
                <Link to='/contact' className='option'>Contact Me</Link>
                {
                    currentUser ?
                        <div className='option' onClick={()=>auth.signOut()}>Sign Out</div>
                        :
                        <Link to='/signing' className='option'>Sign in</Link>

                }
            </nav>
        </div>
    )