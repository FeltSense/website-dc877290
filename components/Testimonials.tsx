'use client'

import Image from 'next/image'
import { Star } from 'lucide-react'

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Lost 25 pounds and gained so much confidence. The instructors push you beyond what you think is possible. This community changed my life.",
      name: "Sarah Martinez",
      role: "Member since 2022",
      image: "/images/testimonial-testimonials-transformations-0-1766168129075.jpg",
      rating: 5
    },
    {
      quote: "Best decision I ever made. Every class is different, every instructor brings their fire. You'll never get bored and you'll always leave stronger.",
      name: "Marcus Johnson",
      role: "Member since 2023",
      image: "/images/testimonial-testimonials-transformations-1-1766168129429.jpg",
      rating: 5
    },
    {
      quote: "I've tried every studio in Austin. Nothing compares to the energy here. The cycling classes are insane and the community keeps me coming back.",
      name: "Emily Chen",
      role: "Member since 2021",
      image: "/images/testimonial-testimonials-transformations-2-1766168130286.jpg",
      rating: 5
    }
  ]

  return (
    <section id="testimonials" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mb-16">
          <h2 className="text-4xl lg:text-5xl font-semibold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 font-light">
            Real transformations. Real results. Real people.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="group bg-gray-50 p-8 rounded-lg transition-all duration-300 hover:shadow-md hover:bg-white"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star 
                    key={i} 
                    className="w-5 h-5 fill-primary-500 text-primary-500" 
                  />
                ))}
              </div>

              <blockquote className="text-gray-700 text-base leading-relaxed mb-8 font-light">
                "{testimonial.quote}"
              </blockquote>

              <div className="flex items-center gap-4 mt-auto">
                <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                    sizes="48px"
                  />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-500 font-light">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}