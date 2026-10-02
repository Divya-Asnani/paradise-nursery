import React from 'react';
import { plants } from '../data/plants';
import ProductCard from './ProductCard';
import Navbar from './Navbar';

function ProductList() {
  // Group plants by category
  const groupedPlants = plants.reduce((acc, plant) => {
    if (!acc[plant.category]) {
      acc[plant.category] = [];
    }
    acc[plant.category].push(plant);
    return acc;
  }, {});

  return (
    <>
      <Navbar />
      <div className="product-list-page">
        <h2>Our Plants</h2>
        {Object.entries(groupedPlants).map(([category, categoryPlants]) => (
          <div key={category} className="category-section">
            <h3 className="category-heading">{category}</h3>
            <div className="product-grid">
              {categoryPlants.map((plant) => (
                <ProductCard key={plant.id} plant={plant} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default ProductList;
