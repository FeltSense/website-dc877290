'use client'

import { Check, Zap, Users, Award, Calendar } from 'lucide-react'

export default function Pricing() {
  return (
    <section id="pricing" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 text-primary-600 rounded-full text-sm font-semibold mb-6">
            <Zap className="w-4 h-4" />
            Limited Early Access
          </div>
          <h2 className="text-5xl md:text-6xl font-semibold text-gray-900 mb-6">
            Reserve Your Spot
          </h2>
          <p className="text-xl text-gray-600 font-light">
            Become a founding member. Lock in exclusive lifetime benefits for one low price.
          </p>
        </div>

        {/* Pricing Card */}
        <div className="max-w-xl mx-auto">
          <div className="relative bg-gradient-to-br from-primary-500 to-primary-600 rounded-3xl shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-400/20 to-transparent pointer-events-none" />
            
            {/* Content */}
            <div className="relative p-12">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-semibold mb-8">
                <Award className="w-4 h-4" />
                Founding Member
              </div>

              {/* Price */}
              <div className="mb-8">
                <div className="flex items-baseline gap-2 mb-3">
                  <span className="text-6xl font-semibold text-white">$29</span>
                  <span className="text-xl text-white/80">one-time</span>
                </div>
                <p className="text-white/90 text-lg">
                  Secure your founding member status before we open
                </p>
              </div>

              {/* Features */}
              <div className="space-y-4 mb-10">
                {[
                  'First class absolutely free—no strings attached',
                  'Lifetime 15% discount on all class packages',
                  'Priority booking for new class launches',
                  'Exclusive founding member events & workshops',
                  'VIP access to our community app & challenges'
                ].map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mt-0.5">
                      <Check className="w-4 h-4 text-white" strokeWidth={3} />
                    </div>
                    <span className="text-white/95 text-lg font-light">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <a
                href="https://buy.stripe.com/prod_TJtceEOGnyYvh1"
                className="block w-full py-5 px-8 bg-white text-primary-600 text-center text-lg font-semibold rounded-xl shadow-lg hover:shadow-2xl hover:bg-gray-50 transition-all duration-300 transform hover:-translate-y-1"
              >
                Pre-Order for $29
              </a>

              {/* Social Proof */}
              <div className="flex items-center justify-center gap-3 mt-8 pt-8 border-t border-white/20">
                <Users className="w-5 h-5 text-white/80" />
                <span className="text-white/80 text-sm">
                  <span className="font-semibold text-white">127+ members</span> have already reserved their spot
                </span>
              </div>
            </div>
          </div>

          {/* Urgency Text */}
          <div className="text-center mt-8">
            <div className="inline-flex items-center gap-2 text-gray-600">
              <Calendar className="w-4 h-4" />
              <span className="text-sm">
                Opening February 2025 • Limited founding memberships available
              </span>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="max-w-2xl mx-auto mt-20 pt-12 border-t border-gray-200">
          <div className="grid grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-semibold text-primary-600 mb-2">500+</div>
              <div className="text-sm text-gray-600 font-light">Spots Reserved</div>
            </div>
            <div>
              <div className="text-3xl font-semibold text-primary-600 mb-2">4.9★</div>
              <div className="text-sm text-gray-600 font-light">Pre-Launch Rating</div>
            </div>
            <div>
              <div className="text-3xl font-semibold text-primary-600 mb-2">30+</div>
              <div className="text-sm text-gray-600 font-light">Classes Weekly</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}