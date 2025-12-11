import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Landing from './Landing/Landing'
import AppPage from './pages/AppPage'
import NFTDetailPage from './pages/NFTDetailPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/app" element={<AppPage />} />
        <Route path="/app/nft/:id" element={<NFTDetailPage />} />
      </Routes>
    </Router>
  )
}

export default App

