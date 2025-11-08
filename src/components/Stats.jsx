export default function Stats() {
  const stats = [
    {
      number: '99.99%',
      label: 'Uptime Guarantee'
    },
    {
      number: '450+',
      label: 'Protected Organizations'
    },
    {
      number: '12.8M+',
      label: 'Threats Blocked Daily'
    },
    {
      number: '24/7',
      label: 'Expert Support'
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-r from-blue-900 to-teal-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl md:text-6xl font-bold mb-2">
                {stat.number}
              </div>
              <p className="text-lg text-blue-100">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
