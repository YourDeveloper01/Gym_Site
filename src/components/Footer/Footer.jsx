import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

        {/* Logo / About */}
        <div>
          <h2 className="text-2xl font-bold text-red-500 mb-3">
            Gym<span className="text-white">Zone</span>
          </h2>
          <p className="text-white/60 text-sm">
            Build your dream physique with our expert trainers and modern equipment.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-white/70 text-sm">
            <li className="hover:text-red-500 cursor-pointer">Home</li>
            <li className="hover:text-red-500 cursor-pointer">About</li>
            <li className="hover:text-red-500 cursor-pointer">Pricing</li>
            <li className="hover:text-red-500 cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact</h3>
          <p className="text-white/60 text-sm">Email: gym@email.com</p>
          <p className="text-white/60 text-sm">Phone: +91 XXXXXX210</p>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-white/10 mt-8 pt-4 text-center text-white/50 text-sm">
        © {new Date().getFullYear()} GymZone. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer