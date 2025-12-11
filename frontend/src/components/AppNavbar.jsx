import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

function AppNavbar() {
  const location = useLocation()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navItems = [
    { label: 'Dashboard', path: '/app' },
    { label: 'Collections', path: '/app/collections' },
    { label: 'Auctions', path: '/app/auctions' },
    { label: 'Docs', path: '/app/docs' },
  ]

  const isActive = (path) => {
    if (path === '/app') {
      return location.pathname === '/app' || location.pathname.startsWith('/app/nft')
    }
    return location.pathname.startsWith(path)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-neon-magenta/95 backdrop-blur-md border-b border-neon-lime">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Site Name */}
          <div className="flex-shrink-0">
            <Link 
              to="/" 
              className="text-xl font-bold text-cosmic-charcoal hover:opacity-80 transition-opacity"
              onClick={closeMobileMenu}
            >
              The Drop Marketplace
            </Link>
          </div>

          {/* Centered Navigation Items - Desktop */}
          <div className="hidden md:flex items-center gap-8 absolute left-1/2 transform -translate-x-1/2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors ${
                  isActive(item.path)
                    ? 'text-cosmic-charcoal'
                    : 'text-cosmic-charcoal/70 hover:text-cosmic-charcoal'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Right Side - Connect Wallet & Hamburger */}
          <div className="flex items-center gap-4">
            {/* Connect Wallet Button - Hidden on mobile, shown on desktop */}
            <button className="hidden sm:block px-6 py-2 bg-cosmic-charcoal text-neon-lime font-medium rounded-lg border-2 border-neon-lime hover:bg-cosmic-charcoal/90 transition-colors duration-200">
              Connect Wallet
            </button>

            {/* Hamburger Menu Button - Mobile Only */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-cosmic-charcoal hover:opacity-70 focus:outline-none transition-opacity"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-neon-lime bg-neon-magenta">
            <div className="px-4 py-4 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={closeMobileMenu}
                  className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors border ${
                    isActive(item.path)
                      ? 'bg-cosmic-charcoal/10 text-cosmic-charcoal border-neon-lime'
                      : 'text-cosmic-charcoal/70 hover:bg-cosmic-charcoal/5 hover:text-cosmic-charcoal border-transparent'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <button className="w-full mt-4 px-4 py-3 bg-cosmic-charcoal text-neon-lime font-medium rounded-lg border-2 border-neon-lime hover:bg-cosmic-charcoal/90 transition-colors duration-200">
                Connect Wallet
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default AppNavbar

