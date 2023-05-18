import { useState } from 'react';



const Filter = ({ categories, cards, onFilterChange }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleFilterChange = (category) => {
    setSelectedCategory(category);
    onFilterChange(category);
  };

  return (
  <div className="max-w-screen-lg mx-auto my-10">
    <div className="flex justify-between items-center space-x-4 mb-4">
      <button
        className={`font-medium px-4 py-2 rounded-lg ${
          selectedCategory === 'All' ? 'border-green-700 text-green-700 border-b-2' : 'text-gray-700 hover:border-b-2 hover:border-green-700'
        }`}
        onClick={() => handleFilterChange('All')}
      >
        All
      </button>
      {categories.map((category) => (
        <button
          key={category}
          className={`font-medium px-4 py-2 rounded-lg ${
            selectedCategory === category ? 'border-green-700 text-green-700 border-b-2' : 'text-gray-700 border-b-2 hover:border-b-2 hover:border-green-700'
          }`}
          onClick={() => handleFilterChange(category)}
        >
          {category}
        </button>
      ))}
    </div>
	</div>
  );
};

export default Filter;
