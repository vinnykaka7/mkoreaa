export default function CTA() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-blue-900 to-teal-700 rounded-2xl p-12 text-white shadow-2xl">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-4">
              Ready to Secure Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join hundreds of organizations already protected by SecureShield. Start your free 30-day trial today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-4 rounded-lg font-semibold transition duration-300 text-lg">
                Start Free Trial
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-10 py-4 rounded-lg font-semibold transition duration-300 text-lg">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
