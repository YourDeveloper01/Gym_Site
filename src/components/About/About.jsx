import React from 'react'
import BannerImg from '../../assets/barbel.png'

const About = () => {
  return (
    <div className='py-10  bg-slate-200 duration-200 '>
    <div className='container'>
         <div className="grid grid-cols-1 sm:grid-cols-4 gap-8 place-items-center">
            <section>
            <div>
                <img src={BannerImg} alt="" 
                className='sm:scale-100 max-h-[300px]  drop-shadow-md mx-auto'/>
            </div>
           </section>
           <section className='sm:col-span-2 space-y-4'>
            {/*Heading section*/}
            <div  className='flex items-center gap-4'>
                <div className='text-gray-600 text-4xl '>
                    <h1 className='font-bold'>01</h1>
                </div>
                <div>
                    <h1 className='text-red-600 text-4xl sm:text-4xl font-bold '>About Us</h1>
                </div>
            </div>
            {/*bottom section*/}
            <div>
            <p className='text-gray-600'>
                At UFIT, we don't just build bodies — we build confidence. With cutting-edge workouts,
                passionate trainers, and a vibe that keeps you coming back, your transformation starts here.
            </p>
           </div>
           <button>

           </button>
           </section>
        </div>
    </div>
    </div>
  )
}

export default About