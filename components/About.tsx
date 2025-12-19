'use client'

import Image from 'next/image'
import { Zap, Users, Award, TrendingUp } from 'lucide-react'

export default function About() {
  const stats = [
    {
      icon: Zap,
      value: '10,000+',
      label: 'Classes Powered',
      description: 'High-intensity sessions that deliver results'
    },
    {
      icon: Users,
      value: '2,500+',
      label: 'Community Members',
      description: 'Athletes pushing limits together'
    },
    {
      icon: Award,
      value: '15+',
      label: 'Expert Instructors',
      description: 'Certified trainers who inspire greatness'
    },
    {
      icon: TrendingUp,
      value: '94%',
      label: 'Return Rate',
      description: 'Members who keep coming back'
    }
  ]

  return (
    <section id="about" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <h2 className="text-5xl sm:text-6xl font-semibold text-gray-900 mb-6 leading-tight">
            Where sweat meets community.
          </h2>
          <div className="h-1 w-24 bg-primary-500 mb-8"></div>
          <p className="text-xl text-gray-600 font-light leading-relaxed">
            Born in the heart of Austin, Afloja la toti isn't just another fitness studio. We're a movement.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-32">
          {/* Text Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Built for transformation.
              </h3>
              <p className="text-lg text-gray-600 font-light leading-relaxed">
                We created Afloja la toti because fitness shouldn't feel like punishment. 
                Every class is designed to push you harder than you thought possible while 
                surrounded by people who actually want you to succeed.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                No egos. Just effort.
              </h3>
              <p className="text-lg text-gray-600 font-light leading-relaxed">
                Whether you're crushing your first HIIT class or you're a cycling veteran, 
                you'll find your place here. Our expert instructors bring the energy. 
                The community brings the support. You bring the commitment.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Results that speak.
              </h3>
              <p className="text-lg text-gray-600 font-light leading-relaxed">
                This isn't about trends or gimmicks. It's about science-backed workouts 
                that deliver real results. Stronger. Faster. More confident. That's the 
                Afloja la toti difference.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="relative h-[600px] lg:h-[700px] rounded-2xl overflow-hidden shadow-lg group">
            <Image
              src="/images/services-classes-feature-1766168141104.png"
              alt="High-energy fitness class at Afloja la toti studio"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div 
                key={index}
                className="bg-gray-50 rounded-xl p-8 hover:bg-gray-100 transition-colors duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary-500 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-4xl font-semibold text-gray-900">
                    {stat.value}
                  </div>
                </div>
                <div className="text-lg font-semibold text-gray-900 mb-2">
                  {stat.label}
                </div>
                <p className="text-sm text-gray-600 font-light leading-relaxed">
                  {stat.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-24 text-center">
          <p className="text-xl text-gray-600 font-light mb-6">
            Your first class is free. No commitment. No pressure.
          </p>
          <p className="text-2xl font-semibold text-gray-900">
            Just show up and see what you're capable of.
          </p>
        </div>
      </div>
    </section>
  )
}