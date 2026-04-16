import React, { useState, useEffect } from 'react'
import logo from '../../assets/new gym-logo.png'
import { BiPhoneCall } from 'react-icons/bi'
import { HiMenuAlt3, HiX } from 'react-icons/hi'

export const Navlinks = [
  { id: 1, title: "About",    link: "/#about"    },
  { id: 2, title: "Services", link: "/#services" },
  { id: 3, title: "Join",     link: "/#join"     },
]

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-4 pt-3">

      {/* White rounded pill navbar */}
      <div className={`max-w-7xl mx-auto px-6 py-3 flex items-center justify-between rounded-full transition-all duration-300
        ${scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg shadow-black/10 border border-gray-200'
          : 'bg-white shadow-md border border-gray-100'
        }`}
      >

        {/* Logo */}
        
        <a href="/" className="flex items-center">
          <img src={logo} alt="logo" className="w-15 h-10 object-contain" />
        </a>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex items-center gap-8">
          {Navlinks.map((navlink) => (
            <li key={navlink.id}>
              <a
                href={navlink.link}
                className="relative text-sm font-medium text-gray-600 hover:text-red-600 transition-colors duration-150 group"
              >
                {navlink.title}
                <span className="absolute left-0 -bottom-0.5 h-px w-0 bg-red-500 transition-all duration-200 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        {/* Right Side */}
        <div className="hidden md:flex items-center gap-3">

          {/* Phone Pill */}
          <div className="flex items-center gap-2 bg-red-50 border border-red-200 rounded-full px-4 py-1.5 cursor-pointer hover:bg-red-100 transition-colors">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <BiPhoneCall className="text-red-500 text-sm" />
            <span className="text-red-600 text-xs font-medium tracking-wide">
              +91 XXXXXX2019
            </span>
          </div>

          {/* CTA Button */}
          <a
            href="/#join"
            className="bg-red-600 hover:bg-red-700 text-white text-sm font-medium px-5 py-2 rounded-full transition-all duration-200 hover:scale-105"
          >
            Join Now
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          className="md:hidden text-gray-700 text-2xl p-1 rounded-full hover:bg-gray-100 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>

      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden mt-2 mx-auto max-w-7xl bg-white border border-gray-100 rounded-2xl px-6 py-4 flex flex-col gap-4 shadow-lg">

          {/* Mobile Nav Links */}
          {Navlinks.map((navlink) => (
            <a
              key={navlink.id}
              href={navlink.link}
              onClick={() => setMenuOpen(false)}
              className="text-gray-600 hover:text-red-600 text-base font-medium transition-colors border-b border-gray-50 pb-2"
            >
              {navlink.title}
            </a>
          ))}

          {/* Mobile Phone */}
          <div className="flex items-center gap-2 text-red-500 text-sm font-medium pt-1 border-t border-gray-100">
            <BiPhoneCall />
            +91 XXXXXX2019
          </div>

          {/* Mobile CTA */}
          <a
            href="/#join"
            className="bg-red-600 hover:bg-red-700 text-white text-sm font-medium text-center py-2.5 rounded-full transition-colors"
          >
            Join Now
          </a>

        </div>
      )}

    </nav>
  )
}

export default Navbar