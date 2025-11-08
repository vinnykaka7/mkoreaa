import { useState } from 'react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold text-blue-900">SecureShield</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-700 hover:text-blue-900 transition">Features</a>
            <a href="#solutions" className="text-gray-700 hover:text-blue-900 transition">Solutions</a>
            <a href="#pricing" className="text-gray-700 hover:text-blue-900 transition">Pricing</a>
            <button className="bg-blue-900 text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition">
              Get Started
            </button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4">
            <a href="#features" className="block py-2 text-gray-700 hover:text-blue-900">Features</a>
            <a href="#solutions" className="block py-2 text-gray-700 hover:text-blue-900">Solutions</a>
            <a href="#pricing" className="block py-2 text-gray-700 hover:text-blue-900">Pricing</a>
            <button className="w-full mt-4 bg-blue-900 text-white px-6 py-2 rounded-lg hover:bg-blue-800">
              Get Started
            </button>
          </div>
        )}
      </nav>
    </header>
  )
}
