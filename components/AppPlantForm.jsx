import React, { useState, useContext } from 'react';
import axios from 'axios';
import { UserContext } from './UserContext';

const AddPlantForm = () => {
    const { user } = useContext(UserContext);
    const [plantName, setPlantName] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!user || !user.email) {
            alert('User not authenticated');
            return;
        }

        try {
            const response = await axios.post('/api/v1/plants', { plantName });
            if (response.data.success) {
                alert('Plant added successfully!');
                setPlantName('');
            }
        } catch (error) {
            console.error('Error adding plant:', error);
            alert('Failed to add plant.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Plant Name:
                <input
                    type="text"
                    value={plantName}
                    onChange={(e) => setPlantName(e.target.value)}
                    required
                />
            </label>
            <button type="submit">Add Plant</button>
        </form>
    );
};

export default AddPlantForm;
