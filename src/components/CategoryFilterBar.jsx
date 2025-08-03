// components/CategoryFilterBar.jsx
import React, { useState } from 'react';
const CategoryFilterBar = ({ onSelectCategory, selectedCategory }) => {
    const categories = ['All', 'Art', 'Music', 'Photography', '3D', 'Games'];


    return (
        <div className="overflow-x-auto py-4 px-4">
        <div className="flex gap-3 w-max">
            {categories.map((cat) => (
            <button
                key={cat}
                onClick={() => onSelectCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm border transition whitespace-nowrap 
                ${selectedCategory === cat ? 'bg-purple-600 text-white' : 'bg-gray-800 text-gray-300 hover:bg-purple-600'}`}
            >
                {cat}
            </button>
            ))}
        </div>
        </div>
    );
};

export default CategoryFilterBar;