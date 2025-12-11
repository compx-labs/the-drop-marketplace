function Differentiator() {
  const features = [
    {
      title: "Low Fees",
      description: "Algorand's efficient blockchain means minimal transaction costs, keeping more value in your pocket.",
      icon: "💰",
    },
    {
      title: "Fast Transactions",
      description: "Experience near-instant finality with Algorand's 4.5 second block time.",
      icon: "⚡",
    },
    {
      title: "Carbon Negative",
      description: "Algorand is the world's first carbon-negative blockchain, making your NFT collection environmentally friendly.",
      icon: "🌱",
    },
    {
      title: "Secure & Decentralized",
      description: "Built on Algorand's Pure Proof-of-Stake consensus, ensuring security and decentralization.",
      icon: "🔒",
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Why Choose The Drop?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Built on Algorand for the next generation of NFT collectors and creators.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-200"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Differentiator

