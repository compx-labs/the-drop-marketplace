import Carousel from '../components/Carousel'
import RecentSales from '../components/RecentSales'
import AppNavbar from '../components/AppNavbar'

function AppPage() {
  // Placeholder NFT data using the images from public folder
  const featuredNFTs = [
    {
      id: '1',
      name: 'Mango NFT',
      collection: 'Fruit Collection',
      image: '/mngo.png',
      price: '25.5',
      verified: true,
    },
    {
      id: '2',
      name: 'Monster NFT',
      collection: 'Creature Collection',
      image: '/mnstr.png',
      price: '42.0',
      verified: true,
    },
    {
      id: '3',
      name: 'Mango NFT #2',
      collection: 'Fruit Collection',
      image: '/mngo.png',
      price: '18.9',
      verified: false,
    },
    {
      id: '4',
      name: 'Monster NFT #2',
      collection: 'Creature Collection',
      image: '/mnstr.png',
      price: '35.2',
      verified: true,
    },
    {
      id: '5',
      name: 'Mango NFT #3',
      collection: 'Fruit Collection',
      image: '/mngo.png',
      price: '30.0',
      verified: true,
    },
    {
      id: '6',
      name: 'Monster NFT #3',
      collection: 'Creature Collection',
      image: '/mnstr.png',
      price: '28.7',
      verified: false,
    },
  ]

  // Placeholder recent sales data
  const recentSales = [
    {
      collection: 'Algo Apes',
      itemName: 'Algo Ape #1234',
      price: '125.5',
      timeAgo: 5,
      verified: true,
    },
    {
      collection: 'Pixel Punks',
      itemName: 'Pixel Punk #567',
      price: '89.2',
      timeAgo: 12,
      verified: true,
    },
    {
      collection: 'Algorand Warriors',
      itemName: 'Warrior #890',
      price: '156.8',
      timeAgo: 23,
      verified: true,
    },
    {
      collection: 'Crypto Kitties Algo',
      itemName: 'Kitty #2341',
      price: '45.3',
      timeAgo: 45,
      verified: false,
    },
    {
      collection: 'Algo Stars',
      itemName: 'Star #789',
      price: '203.7',
      timeAgo: 67,
      verified: true,
    },
    {
      collection: 'Digital Dreams',
      itemName: 'Dream #456',
      price: '78.9',
      timeAgo: 89,
      verified: true,
    },
    {
      collection: 'Algo Legends',
      itemName: 'Legend #112',
      price: '312.4',
      timeAgo: 120,
      verified: true,
    },
    {
      collection: 'Neon Nodes',
      itemName: 'Node #334',
      price: '67.1',
      timeAgo: 156,
      verified: false,
    },
  ]

  return (
    <div className="min-h-screen bg-neon-magenta">
      <AppNavbar />
      <div className="pt-24 pb-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-cosmic-charcoal mb-2">
            Dashboard
          </h1>
          <p className="text-lg text-cosmic-charcoal/80 mb-12">
            Discover and collect unique NFTs on Algorand
          </p>

          <div className="space-y-12">
            <Carousel title="Featured NFTs" items={featuredNFTs} />
            <RecentSales sales={recentSales} />
            <Carousel title="Trending Now" items={featuredNFTs.slice().reverse()} />
            <Carousel title="Recently Listed" items={featuredNFTs} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AppPage

