export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-teal-700 text-white py-20">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-teal-400 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Protect Your Digital Assets
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Enterprise-grade cybersecurity solutions designed to keep your data safe, your systems secure, and your business protected 24/7.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition duration-300">
                Start Free Trial
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg font-semibold transition duration-300">
                View Demo
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-blue-700 to-teal-600 rounded-2xl p-8 shadow-2xl">
              <div className="bg-white rounded-lg p-6 text-gray-800">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold">Security Status</span>
                    <span className="text-green-500 font-bold">SECURE</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-green-500 w-full rounded-full"></div>
                  </div>
                  <div className="pt-4 text-sm text-gray-600">
                    <p>Threats Blocked: <span className="font-bold text-blue-900">12,847</span></p>
                    <p>Systems Protected: <span className="font-bold text-blue-900">450+</span></p>
                    <p>Uptime: <span className="font-bold text-green-500">99.99%</span></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
