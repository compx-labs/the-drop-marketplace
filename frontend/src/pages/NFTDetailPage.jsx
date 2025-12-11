import { useParams, Link } from 'react-router-dom'
import AppNavbar from '../components/AppNavbar'

function NFTDetailPage() {
  const { id } = useParams()

  // In a real app, you'd fetch this data based on the ID
  // For now, we'll use placeholder data
  const nft = {
    id: id,
    name: `NFT #${id}`,
    collection: 'Sample Collection',
    image: id === '1' ? '/mngo.png' : '/mnstr.png',
    price: '25.5',
    verified: true,
    description: 'This is a placeholder NFT detail page. In a real application, this would display detailed information about the NFT.',
  }

  return (
    <div className="min-h-screen bg-neon-magenta">
      <AppNavbar />
      <div className="pt-24 pb-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          to="/app"
          className="inline-flex items-center text-cosmic-charcoal/70 hover:text-cosmic-charcoal mb-6 transition-colors"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Marketplace
        </Link>

        <div className="bg-neon-magenta rounded-xl border-2 border-neon-lime shadow-lg shadow-neon-lime/30 overflow-hidden">
          <div className="grid md:grid-cols-2 gap-8 p-8">
            <div className="aspect-square bg-cosmic-charcoal rounded-lg overflow-hidden border-2 border-neon-lime">
              <img
                src={nft.image}
                alt={nft.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h1 className="text-4xl font-bold text-cosmic-charcoal mb-2">
                    {nft.name}
                  </h1>
                  <p className="text-lg text-cosmic-charcoal/70">
                    {nft.collection}
                  </p>
                </div>
                {nft.verified && (
                  <div className="text-cosmic-charcoal">
                    <svg
                      className="w-8 h-8"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                )}
              </div>

              <div className="border-t border-b border-neon-lime py-6 my-6">
                <p className="text-sm text-cosmic-charcoal/60 mb-2">Current Price</p>
                <p className="text-3xl font-bold text-neon-lime">{nft.price} ALGO</p>
              </div>

              <div className="mb-6">
                <h2 className="text-xl font-bold text-cosmic-charcoal mb-3">Description</h2>
                <p className="text-cosmic-charcoal/70 leading-relaxed">{nft.description}</p>
              </div>

              <div className="flex gap-4">
                <button className="flex-1 px-6 py-3 bg-cosmic-charcoal text-neon-lime font-medium rounded-lg border-2 border-neon-lime hover:bg-cosmic-charcoal/90 transition-colors duration-200 shadow-lg shadow-neon-lime/50">
                  Buy Now
                </button>
                <button className="px-6 py-3 bg-transparent text-cosmic-charcoal font-medium rounded-lg border-2 border-neon-lime hover:bg-cosmic-charcoal/10 transition-colors duration-200">
                  Make Offer
                </button>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default NFTDetailPage

