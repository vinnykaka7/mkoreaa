export default function Solutions() {
  const solutions = [
    {
      title: 'Enterprise Security',
      description: 'Scalable solutions for large organizations with complex security needs.',
      image: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      features: ['Multi-tenant support', 'Advanced analytics', 'Custom integrations']
    },
    {
      title: 'Cloud Protection',
      description: 'Secure your cloud infrastructure across multiple providers.',
      image: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      features: ['AWS compliance', 'Azure security', 'Multi-cloud support']
    },
    {
      title: 'Endpoint Security',
      description: 'Protect all your devices with unified endpoint management.',
      image: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      features: ['Device protection', 'Patch management', 'Threat hunting']
    },
    {
      title: 'Network Security',
      description: 'Monitor and control network traffic with advanced filtering.',
      image: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
      features: ['DDoS protection', 'Firewall management', 'Network visibility']
    }
  ]

  return (
    <section id="solutions" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Security Solutions for Every Need
          </h2>
          <p className="text-xl text-gray-600">
            Tailored protection strategies for your organization
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition duration-300"
            >
              <div
                className="h-48 transition duration-300 group-hover:scale-105"
                style={{ background: solution.image }}
              ></div>
              <div className="p-8 bg-white">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {solution.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {solution.description}
                </p>
                <div className="space-y-2">
                  {solution.features.map((feature, i) => (
                    <div key={i} className="flex items-center text-gray-700">
                      <span className="text-teal-500 mr-2">✓</span>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
