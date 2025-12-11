import { Link } from 'react-router-dom'

function CTA() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
          Ready to Get Started?
        </h2>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Join thousands of collectors and creators on The Drop Marketplace. Start exploring NFTs on Algorand today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/app"
            className="px-8 py-4 bg-white text-gray-900 font-medium rounded-lg hover:bg-gray-100 transition-colors duration-200 text-lg inline-block"
          >
            Launch App
          </Link>
          <button className="px-8 py-4 bg-transparent text-white font-medium rounded-lg border-2 border-white hover:bg-white/10 transition-colors duration-200 text-lg">
            View Documentation
          </button>
        </div>
      </div>
    </section>
  )
}

export default CTA

