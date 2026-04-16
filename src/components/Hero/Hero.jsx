import React from 'react'
import BannerImage from '../../assets/gym-banner2.jpg'

const Hero = () => {
  return (
    <div
      className="relative w-full min-h-[80vh] md:min-h-screen flex items-center justify-center text-center overflow-hidden px-4"
      style={{
        backgroundImage: `url(${BannerImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/85 z-0" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage:
            'linear-gradient(rgba(220,38,38,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(220,38,38,0.4) 1px, transparent 1px)',
          backgroundSize: '30px 30px',
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-3xl mx-auto py-16 md:py-24">

        {/* Badge */}
        <span className="inline-block bg-red-600 text-white text-[10px] md:text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4 md:mb-6">
          Start Your Fitness Journey
        </span>

        {/* Headline */}
        <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white leading-tight tracking-tight mb-4">
          Hustle <span className="text-red-500">For</span>
          <br className="hidden sm:block" />
          Muscle
        </h1>

        {/* Tagline */}
        <p className="text-white/70 italic text-sm md:text-base tracking-wide mb-8 md:mb-10">
          "Be Your Best Version"
        </p>

        {/* Buttons */}
        <div className="flex gap-3 md:gap-4 justify-center flex-wrap mb-10">
          <button className="bg-red-600 hover:bg-red-700 text-white text-sm md:text-base font-medium px-6 md:px-8 py-2.5 md:py-3.5 rounded-full transition-all duration-200 hover:scale-105">
            Get Started
          </button>
          <button className="border border-white/40 hover:border-white text-white text-sm md:text-base font-medium px-6 md:px-7 py-2.5 md:py-3.5 rounded-full transition-all duration-200 hover:scale-105">
            Explore Plans
          </button>
        </div>

        {/* Scroll hint */}
        <div className="flex flex-col items-center mt-6">
          <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-bounce" />
        </div>
      </div>
    </div>
  )
}

export default Hero