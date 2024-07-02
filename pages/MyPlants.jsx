import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const PlantsPage = () => {
  const [username, setUsername] = useState('');
  const [plantNames, setPlantNames] = useState([]);
  const [newPlantName, setNewPlantName] = useState('');
  const [activities, setActivities] = useState([]);
  const [showActivities, setShowActivities] = useState(false);
  const [selectedPlant, setSelectedPlant] = useState('');

  const fetchPlants = async () => {
    try {
      const response = await axios.get(`http://localhost:4000/api/v1/user-plant/plants/${username}`);
      if (response.data.success && response.data.plants.length > 0) {
        setPlantNames(response.data.plants.map(plant => plant.name));
      } else {
        setPlantNames([]);
      }
    } catch (error) {
      console.error("Error fetching plants:", error);
    }
  };

  const addPlant = async () => {
    try {
      const response = await axios.post('http://localhost:4000/api/v1/user-plant/plants', { username, plantNames: [newPlantName] });
      setPlantNames(response.data.plant.plants.map(plant => plant.name));
      setNewPlantName('');
    } catch (error) {
      console.error("Error adding plant:", error);
    }
  };

  const deletePlant = async (plantName) => {
    try {
      await axios.delete(`http://localhost:4000/api/v1/user-plant/plants/${username}/${plantName}`);
      setPlantNames(plantNames.filter(name => name !== plantName));
    } catch (error) {
      console.error("Error deleting plant:", error);
    }
  };

  const fetchActivities = async (plantName) => {
    try {
      const response = await axios.get(`http://localhost:4000/api/v1/user-plant/plants/${username}/${plantName}/activities`);
      setActivities(response.data.activities);
      setShowActivities(true);
      setSelectedPlant(plantName);
    } catch (error) {
      console.error("Error fetching activities:", error);
    }
  };

  const toggleActivity = async (activityId, checked, plantName) => {
    try {
      const response = await axios.put(`http://localhost:4000/api/v1/user-plant/plants/${username}/${plantName}/activities/${activityId}`, { checked });
      console.log(response.data);
    } catch (error) {
      console.error("Error updating activity status:", error);
    }
  };

  return (
    <div
      style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1476842634003-7dcca8f832de?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        paddingTop: '50px',
        color: 'white'
      }}
    >
      <div className="container mt-5">
        <h1 className="mb-4">Plant Care</h1>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <button className="btn btn-primary mt-2" onClick={fetchPlants}>View Plants</button>
        </div>

        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Add new plant"
            value={newPlantName}
            onChange={(e) => setNewPlantName(e.target.value)}
          />
          <button className="btn btn-success mt-2" onClick={addPlant}>Add Plant</button>
        </div>

        {plantNames.length > 0 && (
          <>
            <h2 className="mt-4">Your Plants</h2>
            <ul className="list-group">
              {plantNames.map((plant, index) => (
                <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                  {plant}
                  <div>
                    <button className="btn btn-danger btn-sm me-2" onClick={() => deletePlant(plant)}>Delete</button>
                    <button className="btn btn-secondary btn-sm" onClick={() => fetchActivities(plant)}>View Schedule</button>
                  </div>
                </li>
              ))}
            </ul>
          </>
        )}

        {showActivities && (
          <div className="mt-4">
            <h2>Activities for {selectedPlant}</h2>
            <ul className="list-group">
              {activities.map((activity, index) => (
                <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                  <label>
                    <input
                      type="checkbox"
                      checked={activity.completed}
                      onChange={() => toggleActivity(activity._id, activity.completed, selectedPlant)}
                    />
                    {activity.name}
                  </label>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default PlantsPage;
