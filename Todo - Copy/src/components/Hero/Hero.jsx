import React from 'react'
import BannerImage from '../../assets/gym-banner2.jpg'

const BgStyle = {
    backgroundImage: `url(${BannerImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    width: '100%',
    backgroundRepeat: 'no-repeat',
}

const Hero = () => {
  return (
    <div style={BgStyle}
    className='bg-black dark:bg-black duration-200'>
        <div className=' dark:bg-black/15 h-full w-full top-0 left-0 z-10 duration-200'>
        
             <div className='container min-h-[620px] flex items-center'>
                <div className='w-full md:w-[550px] mx-auto text-center space-y-10'>
                    <p className='text-red-600 font-bold'>Start Your 
                        Fitness Journey</p>
                        <h1 className='text-5xl md:text-7xl text-white font-black'>Hustle <b>For</b>
                         <h1>Muscle</h1>
                           </h1>
                            <p className='font-extrabold text-white'>"Be Your Best Version"</p>
                    <button className='primary-btn'>Get Started</button>
                </div>
        </div>
     </div>
    </div>
  )
}

export default Hero