export default function Features() {
  const features = [
    {
      title: 'Real-Time Threat Detection',
      description: 'Advanced AI-powered monitoring that identifies and neutralizes threats in milliseconds.',
      icon: '🛡️'
    },
    {
      title: 'Data Encryption',
      description: 'Military-grade encryption protecting your sensitive data at rest and in transit.',
      icon: '🔐'
    },
    {
      title: 'Compliance Ready',
      description: 'Meet GDPR, HIPAA, and SOC 2 compliance requirements with automated reporting.',
      icon: '✓'
    },
    {
      title: '24/7 Support',
      description: 'Expert security specialists available around the clock to assist you.',
      icon: '📞'
    },
    {
      title: 'Zero Trust Architecture',
      description: 'Implement a comprehensive zero trust security model for maximum protection.',
      icon: '🔑'
    },
    {
      title: 'Incident Response',
      description: 'Rapid response protocols and comprehensive incident management capabilities.',
      icon: '⚡'
    }
  ]

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Security Features
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to protect your digital infrastructure
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300 transform hover:-translate-y-1"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
