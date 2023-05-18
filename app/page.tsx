"use client";
import { useState } from 'react';

import Filter from '../components/filter';
import Card from '../components/card';

import Main from '../components/mainCard';

export default function Page() {
	
	const [filteredCategory, setFilteredCategory] = useState('All');

  const handleFilterChange = (category) => {
    setFilteredCategory(category);
  };

  const cards = [
    { imageUrl:'https://dub01pap002files.storage.live.com/y4mZwYviAcmfM7t0wrYwMWNVe4pHBHueOpIteSI9fUkfWpraOf6kb4b0Xkx_W2qBglBnJVX6QYIi4EYH4fO-4GKlU6aqBMXCtvY9Z6XWz9jVAzY44CGeQYcCAI1RsNa1ox65bZZbZuS2iq2U8rzTizJ8PguxocB9WKE-gQ8xnFhsliUDGMcSqzl59yHNp-aUp-y?width=2976&height=1788&cropmode=none', title: 'Card 1', category: 'New Features', description: 'Description for Card 1' },
    { imageUrl:'https://dub01pap002files.storage.live.com/y4mZwYviAcmfM7t0wrYwMWNVe4pHBHueOpIteSI9fUkfWpraOf6kb4b0Xkx_W2qBglBnJVX6QYIi4EYH4fO-4GKlU6aqBMXCtvY9Z6XWz9jVAzY44CGeQYcCAI1RsNa1ox65bZZbZuS2iq2U8rzTizJ8PguxocB9WKE-gQ8xnFhsliUDGMcSqzl59yHNp-aUp-y?width=2976&height=1788&cropmode=none', title: 'Card 2', category: 'Case Studies', description: 'Description for Card 2' },
    { imageUrl:'https://dub01pap002files.storage.live.com/y4mZwYviAcmfM7t0wrYwMWNVe4pHBHueOpIteSI9fUkfWpraOf6kb4b0Xkx_W2qBglBnJVX6QYIi4EYH4fO-4GKlU6aqBMXCtvY9Z6XWz9jVAzY44CGeQYcCAI1RsNa1ox65bZZbZuS2iq2U8rzTizJ8PguxocB9WKE-gQ8xnFhsliUDGMcSqzl59yHNp-aUp-y?width=2976&height=1788&cropmode=none', title: 'Card 3', category: 'Threat Intelligence', description: 'Description for Card 3' },
    { imageUrl:'https://dub01pap002files.storage.live.com/y4mZwYviAcmfM7t0wrYwMWNVe4pHBHueOpIteSI9fUkfWpraOf6kb4b0Xkx_W2qBglBnJVX6QYIi4EYH4fO-4GKlU6aqBMXCtvY9Z6XWz9jVAzY44CGeQYcCAI1RsNa1ox65bZZbZuS2iq2U8rzTizJ8PguxocB9WKE-gQ8xnFhsliUDGMcSqzl59yHNp-aUp-y?width=2976&height=1788&cropmode=none', title: 'Card 4', category: 'Market Intelligence', description: 'Description for Card 4' },
    // Add more card data here
  ];

  const categories = [ 'New Features', 'Case Studies', 'Threat Intelligence', 'Market Intelligence'];

  const filteredCards = filteredCategory === 'All' ? cards : cards.filter((card) => card.category === filteredCategory);

	
	
  return (
    <div className="container mx-auto">
	
	<Main
	  title="How to speed up your leadership changes research with Feedly AI"
	  image="https://dub01pap002files.storage.live.com/y4mZwYviAcmfM7t0wrYwMWNVe4pHBHueOpIteSI9fUkfWpraOf6kb4b0Xkx_W2qBglBnJVX6QYIi4EYH4fO-4GKlU6aqBMXCtvY9Z6XWz9jVAzY44CGeQYcCAI1RsNa1ox65bZZbZuS2iq2U8rzTizJ8PguxocB9WKE-gQ8xnFhsliUDGMcSqzl59yHNp-aUp-y?width=2976&height=1788&cropmode=none"
	/>
	
	
	 <Filter categories={categories} cards={cards} onFilterChange={handleFilterChange} />
      <div className="grid grid-cols-2 gap-4 mb-20">
        {filteredCards.map((card, index) => (
          <Card key={index} title={card.title} imageUrl={card.imageUrl} description={card.description} />
        ))}
      </div>
	
	</div>
  )
}