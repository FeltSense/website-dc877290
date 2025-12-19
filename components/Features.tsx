'use client'

import { Dumbbell, Calendar, Users, TrendingUp, Smartphone, Gift } from 'lucide-react'

export default function Features() {
  const features = [
    {
      icon: Dumbbell,
      title: 'Expert-Led Classes',
      description: 'HIIT and cycling classes powered by certified instructors who push you to break barriers and achieve what you thought impossible.'
    },
    {
      icon: Calendar,
      title: 'Real-Time Scheduling',
      description: 'Book your spot instantly with live class availability. Never miss your favorite instructor or peak energy session.'
    },
    {
      icon: Users,
      title: 'Flexible Memberships',
      description: 'Plans designed for your lifestyle—whether you're starting out or going all-in. No long-term commitment drama.'
    },
    {
      icon: TrendingUp,
      title: 'Proven Results',
      description: 'Join a community that celebrates every win. Track progress, smash goals, and transform with people who get it.'
    },
    {
      icon: Smartphone,
      title: 'Mobile App Access',
      description: 'Book classes, track workouts, and manage your fitness journey from anywhere. Your studio in your pocket.'
    },
    {
      icon: Gift,
      title: 'First Class Free',
      description: 'Zero risk. All reward. Experience the Afloja la toti difference before you commit. Come see what the energy is about.'
    }
  ]

  return (
    <section id="features" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-semibold text-gray-900 mb-6">
            Why Choose Afloja la toti
          </h2>
          <p className="text-lg text-gray-600 font-light">
            More than a workout. A movement. Join Austin's most electric fitness community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="group relative bg-white border border-gray-100 rounded-2xl p-8 hover:border-primary-500/20 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary-500/10 group-hover:bg-primary-500 transition-colors duration-300">
                  <Icon className="w-7 h-7 text-primary-500 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 font-light leading-relaxed">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}