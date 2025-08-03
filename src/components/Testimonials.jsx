// components/Testimonials.jsx
import React from 'react';

const testimonials = [
  {
    name: 'Jane Doe',
    avatar: 'https://i.pravatar.cc/150?img=32',
    quote: 'This platform has completely changed how I sell art!',
    rating: 5,
  },
  {
    name: 'John Smith',
    avatar: 'https://i.pravatar.cc/150?img=12',
    quote: 'The auction experience is seamless and intuitive.',
    rating: 4,
  },
  {
    name: 'Alice Johnson',
    avatar: 'https://i.pravatar.cc/150?img=56',
    quote: 'The best NFT marketplace I’ve used.',
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="bg-[#1E1B2E] text-white px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-10">What Our Users Say</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="bg-purple-900 rounded-xl p-6 shadow-lg text-center"
          >
            <img
              src={t.avatar}
              alt={t.name}
              className="w-16 h-16 rounded-full mx-auto mb-4 border-2 border-purple-500"
            />
            <p className="text-sm italic mb-3">“{t.quote}”</p>
            <div className="text-yellow-400 mb-1">
              {'★'.repeat(t.rating)}
              {'☆'.repeat(5 - t.rating)}
            </div>
            <h4 className="font-semibold text-sm text-gray-300">{t.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
