import Card from '../components/Card';
import React from 'react'

export default function Explore() {
    return (
        <div>
            <div className="flex flex-wrap justify-center">
      <Card
        imageUrl="https://.com/400/300"
        title="Card 1"
        linkUrl="https://example.com/card1"
      />
      <Card
        imageUrl="https://.com/401/300"
        title="Card 2"
        linkUrl="https://example.com/card2"
      />
      <Card
        imageUrl="https://.com/401/300"
        title="Card 3"
        linkUrl="https://example.com/card2"
      />
      {/* Add more cards as needed */}
    </div>
        </div>)
}