import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const FeedbackData = [
  { name: "Ritesh", feedback: "Great gym with excellent facilities!", rating: 5 },
  { name: "Raj", feedback: "Friendly staff and motivating environment.", rating: 4 },
  { name: "Vicky", feedback: "Affordable prices and good equipment.", rating: 4 },
  { name: "Abhishek", feedback: "The trainers are very helpful and knowledgeable.", rating: 5 },
];

const Feedback = () => {
  const settings = {
    dots: true,
    arrows: false,
    autoplay: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } }
    ]
  };

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-2">What Our Members Say</h2>
          <p className="text-gray-500">Hear from our community about their fitness journey</p>
        </div>

        <Slider {...settings}>
          {FeedbackData.map((item, index) => (
            <div key={index} className="px-3">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(item.rating)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{item.feedback}"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center font-bold text-blue-600">
                    {item.name[0]}
                  </div>
                  <h3 className="ml-3 font-semibold text-gray-900">{item.name}</h3>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Feedback;