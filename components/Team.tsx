'use client'

import Image from 'next/image'
import { useState } from 'react'
import { Instagram, Award, Zap } from 'lucide-react'

interface Instructor {
  id: number
  name: string
  specialty: string
  bio: string
  certifications: string[]
  instagram?: string
}

const instructors: Instructor[] = [
  {
    id: 1,
    name: "Sarah Martinez",
    specialty: "HIIT Master",
    bio: "5+ years transforming bodies and minds. Former NCAA athlete turned fitness entrepreneur. Known for pushing limits while keeping it fun.",
    certifications: ["NASM-CPT", "CrossFit L2"],
    instagram: "@sarahfitness"
  },
  {
    id: 2,
    name: "Marcus Thompson",
    specialty: "Cycling Specialist",
    bio: "10 years of cycling instruction. Creates rhythm-driven rides that make you forget you're working out. Expert in endurance and power training.",
    certifications: ["Spinning", "ACE-CPT"],
    instagram: "@marcusrides"
  },
  {
    id: 3,
    name: "Jessica Chen",
    specialty: "Strength & Conditioning",
    bio: "Former powerlifter with a passion for functional fitness. Believes everyone has an athlete inside waiting to break free.",
    certifications: ["CSCS", "FMS L2"],
    instagram: "@jess_strong"
  },
  {
    id: 4,
    name: "David Rodriguez",
    specialty: "Metabolic Conditioning",
    bio: "High-energy classes that torch calories and build confidence. Military veteran bringing discipline and motivation to every session.",
    certifications: ["NASM-CPT", "TRX"],
    instagram: "@davidfitlife"
  }
]

export default function Team() {
  const [activeInstructor, setActiveInstructor] = useState<number | null>(null)

  return (
    <section id="team" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 rounded-full mb-6">
            <Zap className="w-4 h-4 text-primary-500" />
            <span className="text-sm font-semibold text-primary-500 uppercase tracking-wide">
              Meet Your Instructors
            </span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Expert trainers.<br />Real results.
          </h2>
          <p className="text-xl text-gray-600 font-light leading-relaxed">
            Our certified instructors bring decades of combined experience. They push you harder, lift you higher, and celebrate every milestone with you.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {instructors.map((instructor) => (
            <div
              key={instructor.id}
              className="group relative bg-gray-50 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lg cursor-pointer"
              onMouseEnter={() => setActiveInstructor(instructor.id)}
              onMouseLeave={() => setActiveInstructor(null)}
            >
              <div className="aspect-[4/5] relative bg-gradient-to-br from-primary-100 to-accent-100 overflow-hidden">
                <Image
                  src="/images/team-instructors-team-1766168147869.png"
                  alt={instructor.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent opacity-60 group-hover:opacity-70 transition-opacity duration-300" />
                
                {/* Overlay Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="transform transition-transform duration-300 group-hover:translate-y-0 translate-y-2">
                    <h3 className="text-3xl font-bold text-white mb-2">
                      {instructor.name}
                    </h3>
                    <p className="text-primary-300 font-semibold mb-4">
                      {instructor.specialty}
                    </p>
                    
                    {/* Certifications */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {instructor.certifications.map((cert, idx) => (
                        <span
                          key={idx}
                          className="inline-flex items-center gap-1 px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs font-medium text-white"
                        >
                          <Award className="w-3 h-3" />
                          {cert}
                        </span>
                      ))}
                    </div>

                    {/* Instagram */}
                    {instructor.instagram && (
                      <a
                        href={`https://instagram.com/${instructor.instagram.replace('@', '')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors duration-200"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Instagram className="w-4 h-4" />
                        <span className="text-sm">{instructor.instagram}</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Bio Section */}
              <div className="p-8">
                <p className="text-gray-600 leading-relaxed">
                  {instructor.bio}
                </p>
              </div>

              {/* Active Indicator */}
              <div
                className={`absolute top-0 left-0 w-1 h-full bg-primary-500 transition-transform duration-300 ${
                  activeInstructor === instructor.id ? 'scale-y-100' : 'scale-y-0'
                }`}
                style={{ transformOrigin: 'top' }}
              />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="bg-gray-900 rounded-3xl p-12 lg:p-16 text-center">
          <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Find your perfect instructor match
          </h3>
          <p className="text-xl text-gray-300 font-light mb-8 max-w-2xl mx-auto">
            Try classes with different instructors during your first week. Discover your favorite coaching style and build your ideal workout schedule.
          </p>
          <button className="inline-flex items-center gap-2 px-8 py-4 bg-primary-500 text-white font-semibold rounded-full hover:bg-primary-600 transition-all duration-200 hover:scale-105 hover:shadow-lg">
            Book Your First Class Free
            <Zap className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  )
}