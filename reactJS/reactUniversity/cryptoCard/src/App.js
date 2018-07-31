import React from 'react'
import CryptoCard from './components/crypto-card'

export default function App() {
  const coinData = {
    name: 'Bitcoin',
    symbol: 'BTC',
    image: './logo.png'
  }
  console.log(coinData.image)
  return (
    <div>
      <CryptoCard
        name={coinData.name}
        symbol={coinData.symbol}
        logo={coinData.image}
      />
    </div>
  )
}
