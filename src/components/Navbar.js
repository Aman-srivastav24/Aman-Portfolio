import React, { useState } from 'react'
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { HiIdentification } from 'react-icons/hi'
// import {HiOutlineMail} from 'react-icons/h1'
// import{BsFillPersonLinesFill} from 'react-icons/bs'
import my_logo from '../assets/my_logo.png'
import { Link } from 'react-scroll'


function Navbar() {
  const [nav, setnav] = useState(false)
  const handleClick = () => setnav(!nav)
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4  bg-[#0a192f] text-gray-300' >
      <div>
        <img src={my_logo} className='w-20 h-20 rounded-full' />
      </div>
      {/*Menu*/}

      <ul className='hidden md:flex'>
        <li>
          <Link to='home' smooth={true} duration={500} >
            Home
          </Link>
        </li>
        <li> <Link to='about' smooth={true} duration={500}>
          About
        </Link></li>
        <li> <Link to='skill' smooth={true} duration={500} >
          Skills
        </Link></li>
        <li> <Link to='project' smooth={true} duration={500} >
          Projects
        </Link></li>
        <li> <Link to='contact' smooth={true} duration={500} >
          Contact
        </Link></li>
      </ul>

      {/*Hamburger*/}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      {/*Mobile View*/}
      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
        <li className='py-6 text-4xl'> <Link onClick={handleClick} to='home' smooth={true} duration={500} >
            Home
          </Link></li>
        <li className='py-6 text-4xl'><Link onClick={handleClick} to='about' smooth={true} duration={500}>
          About
        </Link></li>
        <li className='py-6 text-4xl'><Link onClick={handleClick} to='skill' smooth={true} duration={500} >
          Skills
        </Link></li>
        <li className='py-6 text-4xl'> <Link onClick={handleClick} to='project' smooth={true} duration={500} >
          Projects
        </Link></li>
        <li className='py-6 text-4xl'><Link onClick={handleClick} to='contact' smooth={true} duration={500} >
          Contact
        </Link></li>
      </ul>
      {/*Social Icons*/}
      <div className='hidden lg:flex fixed flex-col  top-[35%] left'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href="https://www.linkedin.com/in/aman-srivastav-838a32200/">
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href="https://github.com/Aman-srivastav24">
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href="https://mail.google.com/mail/u/0/#inbox?compose=new">
              Email<HiOutlineMail size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href="https://www.canva.com/design/DAFL0h5yBgg/_QDG0OROwm91z5D5KfVy6Q/view?utm_content=DAFL0h5yBgg&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink">
              Resume<HiIdentification size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar