import React from 'react'
import BannerImg from '../../assets/trainer.jpeg'

const About2 = () => {
  return (
    <div className='py-10  bg-white duration-200 '>
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
                    <h1 className='font-bold'>02</h1>
                </div>
                <div>
                    <h1 className='text-red-600 text-4xl sm:text-4xl font-bold '>Facilities</h1>
                </div>
            </div>
            {/*bottom section*/}
            <div>
            <p className='text-gray-600'>
               We offer a range of training options to fit your lifestyle—whether you're at home or in the gym. Our Personal Training, 
               you get one-on-one guidance tailored to your fitness goals. For flexibility and convenience. Stay fit, your way.
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

export default About2