import React from 'react'

const PricingData = [{
    title: "Basic Plan",
    price: "₹799/ for 1 month",
   features:[  "🏋️ Full gym access.",
               "🕒 Flexible timings.",
               "🥗 Diet tips included.",
               "💻 Online workout help.",
               "👨‍🏫 Basic trainer support.",
               "💪 Best for your own fitness.",
],
aosDelay: "0",
}, {
    title: "Pro Plan",
    price: "₹1999/ for 3 month",
    features: ["🏋️ Full gym access.",
               "🕒 Flexible timings.",
               "🥗 Diet tips included.",
               "💻 Online workout help.",
               "👨‍🏫 Basic trainer support.",
               "💪 Good for habbit building.",
],
aosDelay: "50",
}, 
{
    title: "Premium Plan",
    price: "₹3799/ for 6 month",
    features: ["🏋️ Full gym access.",
               "🕒 Flexible timings.",
               "🥗 Diet tips included.",
               "💻 Online workout help.",
               "👨‍🏫 Basic trainer support.",
               "💪 Best for long-term fitness.",
 ],
aosDelay: "100",
}
];

const Pricing = () => {
  return (
    <div className='mt-10 py-09'>
        <div className='container'>
            <h1 className='text-3xl text-center sm:text-5xl font-bold text-red-600 '>Membership</h1>
            {/* Cards Section */}
            <div className=" mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6 md:grid-cols-3">
                {PricingData.map((data, index) => 
                (
                <div key={index} className='space-y-2 text-center bg-slate-200 p-4 sm:py-15 rounded-lg group shadow-2xl
                hover:bg-red-200 transition-all duration-300'>
                    <h1 className='text-3xl font-bold'>{data.title}</h1>
                    <h1 className='font-bold text-red-600'>{data.price}</h1>
                    {data.features.map((feature, featureIndex) => (
                        <p className='font-serif text-center'>{feature}</p>
                ))}
                    <button className='primary-btn'>Learn More</button>
                </div>
                ))}
                    
            </div>
        </div>
    </div>
  )
}

export default Pricing