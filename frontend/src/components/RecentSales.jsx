function RecentSales({ sales }) {
  const formatTimeAgo = (minutesAgo) => {
    if (minutesAgo < 60) {
      return `${minutesAgo}m ago`
    }
    const hours = Math.floor(minutesAgo / 60)
    if (hours < 24) {
      return `${hours}h ago`
    }
    const days = Math.floor(hours / 24)
    return `${days}d ago`
  }

  return (
    <div className="bg-neon-magenta rounded-xl border-2 border-neon-lime p-6">
      <h2 className="text-3xl font-bold text-cosmic-charcoal mb-6">Recent Sales</h2>
      <div className="space-y-4">
        {sales.map((sale, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-4 rounded-lg border-2 border-neon-lime hover:border-neon-lime hover:bg-cosmic-charcoal/5 transition-all duration-200"
          >
            <div className="flex items-center gap-4 flex-1 min-w-0">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-cosmic-charcoal border-2 border-neon-lime flex items-center justify-center">
                <span className="text-lg font-bold text-neon-lime">
                  {sale.collection.charAt(0)}
                </span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-bold text-cosmic-charcoal truncate">
                    {sale.collection}
                  </h3>
                  {sale.verified && (
                    <svg
                      className="w-4 h-4 text-cosmic-charcoal flex-shrink-0"
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
                  )}
                </div>
                <p className="text-sm text-cosmic-charcoal/70 truncate">
                  {sale.itemName}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-6 flex-shrink-0">
              <div className="text-right">
                <p className="font-bold text-neon-lime">{sale.price} ALGO</p>
                <p className="text-xs text-cosmic-charcoal/60">{formatTimeAgo(sale.timeAgo)}</p>
              </div>
              <div className="w-2 h-2 rounded-full bg-neon-lime shadow-lg shadow-neon-lime/50"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RecentSales

