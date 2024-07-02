import React, { useState } from 'react';
import axios from 'axios';

const PlantFilter = ({ setFilteredPlants }) => {
  const [filters, setFilters] = useState({
    air_purifying: false,
    pollution_tolerant: false,
    medicinal: false,
    edible: false,
    flowering: false,
    poisonous: false,
    pet_safe: false,
    pet_toxic: false,
    common_name: '',
    scientific_name: '',
    care: '',
    height: '',
    season: '',
    flower_color: '',
    leaf_color: '',
    leaf_size: '',
    growth_medium: '',
    watering_frequency: '',
    temperature: '',
    sunlight: '',
    soil: '',
    edibility: '',
    fertilizing_frequency: '',
    fertilizer: '',
    pests: '',
    disease: '',
    humidity: '',
    misting_frequency: '',
    rotation: '',
    repotting: '',
    reproduction: '',
    sowing_month: '',
    harvesting_month: '',
    general_information: '',
    url: ''
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFilters(prevFilters => ({
      ...prevFilters,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get('/api/v1/plants/plants', { params: filters });
      setFilteredPlants(response.data.data);
    } catch (error) {
      console.error('Error fetching plants:', error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Render your filter options as form inputs */}
      {/* Example: Boolean checkboxes */}
      <label>
        Air Purifying:
        <input type="checkbox" name="air_purifying" checked={filters.air_purifying} onChange={handleInputChange} />
      </label>
      {/* Example: Text inputs */}
      <label>
        Flower Color:
        <input type="text" name="flower_color" value={filters.flower_color} onChange={handleInputChange} />
      </label>
      {/* Add more filter options as needed */}
      
      <button type="submit">Apply Filters</button>
    </form>
  );
};

export default PlantFilter;
