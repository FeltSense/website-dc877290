'use client'

import Link from 'next/link'
import { Facebook, Instagram, Twitter, Youtube, MapPin, Phone, Mail } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const productLinks = [
    { label: 'HIIT Classes', href: '/classes/hiit' },
    { label: 'Cycling Studio', href: '/classes/cycling' },
    { label: 'Personal Training', href: '/training' },
    { label: 'Membership Plans', href: '/membership' },
    { label: 'Class Schedule', href: '/schedule' },
  ]

  const companyLinks = [
    { label: 'About Us', href: '/about' },
    { label: 'Our Instructors', href: '/instructors' },
    { label: 'Studio Tour', href: '/tour' },
    { label: 'Careers', href: '/careers' },
    { label: 'Blog', href: '/blog' },
  ]

  const supportLinks = [
    { label: 'Contact Us', href: '/contact' },
    { label: 'FAQ', href: '/faq' },
    { label: 'First Class Free', href: '/first-class' },
    { label: 'Policies', href: '/policies' },
    { label: 'Terms & Privacy', href: '/terms' },
  ]

  const socialLinks = [
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
    { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: Youtube, href: 'https://youtube.com', label: 'YouTube' },
  ]

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-block group">
              <h2 className="text-2xl font-semibold tracking-tight transition-colors group-hover:text-primary-500">
                Afloja la toti
              </h2>
            </Link>
            <p className="mt-4 text-slate-400 leading-relaxed font-light max-w-sm">
              Austin's premier boutique HIIT and cycling studio. High-energy workouts meet supportive community. Transform your fitness journey.
            </p>
            <div className="mt-6 space-y-3">
              <div className="flex items-center text-slate-400 hover:text-white transition-colors">
                <MapPin className="w-4 h-4 mr-3 text-primary-500 flex-shrink-0" />
                <span className="text-sm font-light">123 Fitness Blvd, Austin, TX 78701</span>
              </div>
              <div className="flex items-center text-slate-400 hover:text-white transition-colors">
                <Phone className="w-4 h-4 mr-3 text-primary-500 flex-shrink-0" />
                <span className="text-sm font-light">(512) 555-TOTI</span>
              </div>
              <div className="flex items-center text-slate-400 hover:text-white transition-colors">
                <Mail className="w-4 h-4 mr-3 text-primary-500 flex-shrink-0" />
                <span className="text-sm font-light">hello@aflojatoti.com</span>
              </div>
            </div>
          </div>

          {/* Product Links */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-semibold tracking-wider uppercase text-slate-300 mb-4">
              Classes
            </h3>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-colors text-sm font-light inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-semibold tracking-wider uppercase text-slate-300 mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-colors text-sm font-light inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-semibold tracking-wider uppercase text-slate-300 mb-4">
              Support
            </h3>
            <ul className="space-y-3">
              {supportLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-colors text-sm font-light inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA Section */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-semibold tracking-wider uppercase text-slate-300 mb-4">
              Get Started
            </h3>
            <p className="text-slate-400 text-sm font-light mb-4">
              First class on us. No commitment. Just show up and crush it.
            </p>
            <Link
              href="/first-class"
              className="inline-block bg-primary-500 text-white px-5 py-2.5 rounded-md font-medium text-sm hover:bg-primary-600 transition-colors"
            >
              Claim Free Class
            </Link>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="mt-16 pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-800 text-slate-400 hover:bg-primary-500 hover:text-white transition-all"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
            <p className="text-slate-500 text-sm font-light">
              © {currentYear} Afloja la toti. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}