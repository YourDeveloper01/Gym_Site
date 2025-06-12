import React from 'react'
import Slider from "react-slick";

const FeedbackData = [{
    name: "Ritesh",
    feedback: "Great gym with excellent facilities!",
    rating: 5,
    date: "2023-04-01",
    aosDelay: "0",
}, {
    name: "Raj",
    feedback: "Friendly staff and motivating environment.",
    rating: 4,
    date: "2023-05-02",
    aosDelay: "50",
}, {
    name: "Vicky",
    feedback: "Affordable prices and good equipment.",
    rating: 4,
    date: "2023-06-03",
    aosDelay: "100",
}, {
    name: "Abhishek",
    feedback: "Affordable prices and good equipment.",
    rating: 4,
    date: "2023-07-04",
    aosDelay: "100",
}, {
}]

const Feedback = () => {
    var settings = {
    dots: true,
    arrows: false,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className='py-10 '>
        <div className="container">
            {/*header section */}
            <div className="text-center mb-10">
                <h2 className="text-3xl font-bold mb-4">What Our Members Say</h2>
                <p className="text-gray-600">Feedback from our valued members</p>
            {/* Feedback section */}
            <div>
                <Slider {...settings} >
                    {FeedbackData.map((item, index) => (
                        <div key={index} className="p-4">
                            <div className="bg-slate-200 rounded-lg shadow-lg p-6">
                                <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                                <p className="text-gray-700 mb-4">{item.feedback}</p>
                                <div className="flex items-center justify-center mb-2">
                                    {[...Array(item.rating)].map((_, i) => (
                                        <svg key={i} xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" className="w-5 h-5 text-yellow-500">
                                            <path d="M10 15l-5.878 3.09 1.122-6.535L1 7.91l6.556-.955L10 1l2.444 5.955L19 7.91l-4.244 3.645L15.878 18z" />
                                        </svg>
                                    ))}
                                </div>
                            
                            </div>
                        </div>
                    ))}

                </Slider>
            </div>
        </div>
    </div>
</div>
  )
}

export default Feedback