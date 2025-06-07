import React from 'react'
import logo from '../../assets/gym logo.png'
import { BiPhoneCall } from 'react-icons/bi'
import DarkMode from './DarkMode'

export const Navlinks =[
   {
        id: 1,
        title: "About",
        link: "/#about",
    },
    {
        id: 2,
        title: "Services",
        link: "/#services",
    },
    {
        id: 3,
        title: "Join",
        link: "/#join",
    },
]


const Navbar = () => {
  return (
    <>
   <nav className='shadow-md w-full dark:bg-black dark:text-white' >
     <div className="container max-w-7xl mx-auto px-4 py-3 bg-slate-100">
        <div className="flex items-center justify-between ">
            <div>
                <img src={logo} alt="" className='w-20' sm:w-25 m-5/>
            </div>
            <div className='flex items-center'>
                <BiPhoneCall className="text-2xl animate-pulse group-hover:scale-105 hover:text-red-600 duration-200"/>
                <span className='inline-block mx-4 text-lg font-semibold hover:text-red-600'>+91 XXXXXX2019</span>
            </div>
            <div>
                <ul className="flex items-centre gap-10">
                    {Navlinks.map((navlink) => (
                        <li key={navlink.id} className='inline-block mx-5 text-lg font-semibold hover:text-red-600'>
                            <a href={navlink.link}>{navlink.title}</a>
                        </li>
                    ))} 
                    <DarkMode/>
                </ul>
            </div>
        </div>
     </div>
   </nav>
   </>
  )
}

export default Navbar