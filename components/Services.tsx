'use client'

import Image from 'next/image'
import { Zap, Users, TrendingUp, Clock, Heart, Award } from 'lucide-react'

export default function Services() {
  const services = [
    {
      title: 'HIIT Classes',
      description: 'High-intensity interval training that torches calories and builds strength. Maximum results in minimum time.',
      icon: Zap,
      features: ['45-minute sessions', 'Full-body workouts', 'Scalable intensity'],
      image: '/images/services-classes-feature-1766168141104.png'
    },
    {
      title: 'Cycling Studio',
      description: 'Rhythm-based indoor cycling that elevates your cardio game. Ride to the beat. Feel the burn.',
      icon: TrendingUp,
      features: ['Premium bikes', 'Curated playlists', 'Performance tracking'],
      image: '/images/services-classes-feature-1766168136772.png'
    }
  ]

  const benefits = [
    {
      icon: Users,
      title: 'Community',
      description: 'Train with like-minded athletes who push you further'
    },
    {
      icon: Award,
      title: 'Expert Instructors',
      description: 'Certified coaches who motivate and guide every rep'
    },
    {
      icon: Clock,
      title: 'Flexible Schedule',
      description: 'Classes throughout the day to fit your life'
    },
    {
      icon: Heart,
      title: 'Results-Driven',
      description: 'Track progress and celebrate wins together'
    }
  ]

  return (
    <section id="services" className="py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-gray-900 mb-6">
            Two ways to transform.
            <span className="text-primary-500"> Unlimited possibilities.</span>
          </h2>
          <p className="text-xl text-gray-600 font-light">
            Choose your challenge. Show up. Get results. Every class is designed to push your limits and leave you stronger.
          </p>
        </div>

        {/* Main Services */}
        <div className="space-y-32 mb-32">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary-500/10 mb-6">
                  <service.icon className="w-7 h-7 text-primary-500" />
                </div>
                <h3 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-lg text-gray-600 mb-8 font-light">
                  {service.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-gray-700">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary-500 mr-3" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="px-8 py-4 bg-primary-500 text-white font-medium rounded-lg hover:bg-primary-600 transition-colors">
                  Book Your First Class Free
                </button>
              </div>
              <div className={`relative ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Benefits Grid */}
        <div className="pt-20 border-t border-gray-200">
          <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-16 text-center">
            Why Afloja la toti
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 mb-4">
                  <benefit.icon className="w-6 h-6 text-primary-500" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {benefit.title}
                </h4>
                <p className="text-gray-600 font-light">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-32 bg-gray-50 rounded-2xl p-12 lg:p-16 text-center">
          <h3 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-4">
            Not sure where to start?
          </h3>
          <p className="text-lg text-gray-600 mb-8 font-light max-w-2xl mx-auto">
            Try both. Your first class is on us. Discover which format fires you up and commit to the journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-primary-500 text-white font-medium rounded-lg hover:bg-primary-600 transition-colors">
              Claim Free Class
            </button>
            <button className="px-8 py-4 bg-white text-gray-900 font-medium rounded-lg border border-gray-300 hover:border-gray-400 transition-colors">
              View Schedule
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}