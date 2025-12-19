'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Play } from 'lucide-react'

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-main-hero-1766168139088.png"
          alt="High-energy fitness class at Afloja la toti"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-black/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-32 sm:py-40 lg:py-48">
          <div className="max-w-4xl">
            {/* Badge */}
            <div
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/20 border border-primary-500/30 backdrop-blur-sm mb-8 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <div className="w-2 h-2 rounded-full bg-primary-500 animate-pulse" />
              <span className="text-sm font-medium text-white">Austin's Premier Boutique Studio</span>
            </div>

            {/* Main Headline */}
            <h1
              className={`text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight transition-all duration-700 delay-100 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              Transform Your Fitness.{' '}
              <span className="text-primary-500">Own Your Power.</span>
            </h1>

            {/* Subheadline */}
            <p
              className={`text-xl sm:text-2xl text-gray-300 font-light mb-12 leading-relaxed max-w-3xl transition-all duration-700 delay-200 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              High-energy HIIT and cycling workouts meet a supportive community. Expert instructors. Real results. Your first class is free.
            </p>

            {/* CTA Buttons */}
            <div
              className={`flex flex-col sm:flex-row gap-4 transition-all duration-700 delay-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <Link
                href="#pricing"
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary-500 text-white font-semibold rounded-lg hover:bg-primary-600 transition-all duration-200 hover:scale-105 hover:shadow-xl hover:shadow-primary-500/20"
              >
                Claim Your Free Class
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>

              <Link
                href="#features"
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-200 hover:scale-105"
              >
                <Play className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                See What We Offer
              </Link>
            </div>

            {/* Social Proof */}
            <div
              className={`mt-16 flex flex-wrap items-center gap-8 transition-all duration-700 delay-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="flex -space-x-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 border-2 border-black" />
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent-500 to-primary-500 border-2 border-black" />
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-secondary-500 to-primary-500 border-2 border-black" />
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 border-2 border-black flex items-center justify-center">
                    <span className="text-xs font-bold text-white">2K+</span>
                  </div>
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">Join 2,000+ Members</p>
                  <p className="text-xs text-gray-400">Crushing goals daily</p>
                </div>
              </div>

              <div className="h-12 w-px bg-white/20" />

              <div>
                <div className="flex items-center gap-1 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-accent-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm font-semibold text-white">4.9/5 Average Rating</p>
                <p className="text-xs text-gray-400">From 500+ reviews</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-10" />
    </section>
  )
}