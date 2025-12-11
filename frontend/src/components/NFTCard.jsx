import { Link } from 'react-router-dom'

function NFTCard({ nft }) {
  return (
    <div className="border-[6px] border-cosmic-void bg-neon-magenta flex flex-col w-full h-full hover:border-neon-lime transition-all duration-200">
      <Link
        to={`/app/nft/${nft.id}`}
        className="bg-neon-magenta overflow-hidden transition-all duration-200 group flex flex-col flex-1"
      >
        <div className="aspect-square overflow-hidden bg-cosmic-charcoal flex-shrink-0">
          <img
            src={nft.image}
            alt={nft.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-4 flex-grow flex flex-col justify-between">
          <h3 className="font-bold text-cosmic-charcoal mb-1 truncate">{nft.name}</h3>
          <p className="text-sm text-cosmic-charcoal/70 mb-2">Collection: {nft.collection}</p>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-cosmic-charcoal/60">Price</p>
              <p className="font-bold text-neon-lime">{nft.price} ALGO</p>
            </div>
            {nft.verified && (
              <div className="text-cosmic-charcoal">
                <svg
                  className="w-5 h-5"
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
        </div>
      </Link>
    </div>
  )
}

export default NFTCard

