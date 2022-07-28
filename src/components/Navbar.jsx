import React from 'react'
import './Navbar.css'
import {AiFillHome} from 'react-icons/ai'
import {FaBookReader} from 'react-icons/fa'
import {FaUniversity} from 'react-icons/fa'
import {MdMiscellaneousServices} from 'react-icons/md'
import {RiQrCodeFill} from 'react-icons/ri'
import {FaInfo} from 'react-icons/fa'

function Navbar() {
    return (
        <nav>
            <a href='#' className='active'><AiFillHome/></a>
            <a href='#About'><FaInfo/></a>
            <a href='#Experience'><FaBookReader/></a>
            <a href='#Services'><MdMiscellaneousServices/></a>
            <a href='#Projects'><FaUniversity/></a>
            <a href='#Contact'><RiQrCodeFill/></a>
        </nav>
    )
}

export default Navbar
