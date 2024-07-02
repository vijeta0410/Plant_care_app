import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button, Row, Col, Card, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Recommendation = () => {
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
        height: '',
        flower_color: '',
        leaf_color: '',
        growth_medium: '',
    });
    const [filteredPlants, setFilteredPlants] = useState([]);
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFilters({
            ...filters,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const queryParams = new URLSearchParams();
            Object.keys(filters).forEach((key) => {
                if (filters[key] !== '' && filters[key] !== false) {
                    queryParams.append(key, filters[key]);
                }
            });

            const url = `http://localhost:4000/api/v1/plants/plants?${queryParams.toString()}`;
            console.log('Request URL:', url);

            const response = await axios.get(url);
            console.log('Response data:', response.data.data);

            setFilteredPlants(response.data.data);
            setError(null); // Reset error state on successful fetch
        } catch (error) {
            console.error('Error fetching plants:', error);
            setError('Failed to fetch plants. Please try again.');
        }
    };

    return (
        <div className="bg-image" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1476842634003-7dcca8f832de?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)', backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh' }}>
        <Container className="mt-5">
            <Card className="p-4 shadow">
                <Card.Title>Filter Plants</Card.Title>
                <Form onSubmit={handleSubmit}>
                    <Row>
                        <Col md={6}>
                            <Form.Group controlId="airPurifying">
                                <Form.Check
                                    type="checkbox"
                                    label="Air Purifying"
                                    name="air_purifying"
                                    checked={filters.air_purifying}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                            <Form.Group controlId="pollutionTolerant">
                                <Form.Check
                                    type="checkbox"
                                    label="Pollution Tolerant"
                                    name="pollution_tolerant"
                                    checked={filters.pollution_tolerant}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                            <Form.Group controlId="medicinal">
                                <Form.Check
                                    type="checkbox"
                                    label="Medicinal"
                                    name="medicinal"
                                    checked={filters.medicinal}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                            <Form.Group controlId="edible">
                                <Form.Check
                                    type="checkbox"
                                    label="Edible"
                                    name="edible"
                                    checked={filters.edible}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                            <Form.Group controlId="flowering">
                                <Form.Check
                                    type="checkbox"
                                    label="Flowering"
                                    name="flowering"
                                    checked={filters.flowering}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                            <Form.Group controlId="poisonous">
                                <Form.Check
                                    type="checkbox"
                                    label="Poisonous"
                                    name="poisonous"
                                    checked={filters.poisonous}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group controlId="petSafe">
                                <Form.Check
                                    type="checkbox"
                                    label="Pet Safe"
                                    name="pet_safe"
                                    checked={filters.pet_safe}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                            <Form.Group controlId="petToxic">
                                <Form.Check
                                    type="checkbox"
                                    label="Pet Toxic"
                                    name="pet_toxic"
                                    checked={filters.pet_toxic}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                            <Form.Group controlId="commonName">
                                <Form.Label>Common Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="common_name"
                                    value={filters.common_name}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                            <Form.Group controlId="height">
                                <Form.Label>Height</Form.Label>
                                <Form.Control as="select" name="height" value={filters.height} onChange={handleChange}>
                                    <option value="">Select</option>
                                    <option value="small">Small</option>
                                    <option value="medium">Medium</option>
                                    <option value="large">Large</option>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group controlId="flowerColor">
                                <Form.Label>Flower Color</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="flower_color"
                                    value={filters.flower_color}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                            <Form.Group controlId="leafColor">
                                <Form.Label>Leaf Color</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="leaf_color"
                                    value={filters.leaf_color}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                            <Form.Group controlId="growthMedium">
                                <Form.Label>Growth Medium</Form.Label>
                                <Form.Control as="select" name="growth_medium" value={filters.growth_medium} onChange={handleChange}>
                                    <option value="">Select</option>
                                    <option value="soil">Soil</option>
                                    <option value="water">Water</option>
                                    <option value="soil and water">Soil and Water</option>
                                </Form.Control>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Button variant="primary" type="submit" className="mt-3">
                        Apply Filters
                    </Button>
                </Form>
            </Card>

            <div className="mt-5">
                <h2>Filtered Plants</h2>
                {error && <p className="text-danger">{error}</p>}
                <Row>
                    {filteredPlants && filteredPlants.length > 0 ? (
                        filteredPlants.map((plant) => (
                            <Col md={4} key={plant._id} className="mb-4">
                                <Card className="h-100 shadow-sm">
                                    <Card.Body>
                                        <Card.Title><strong>{plant.common_name}</strong></Card.Title>
                                        <Card.Text>
                                            <strong>Scientific Name:</strong> {plant.scientific_name}
                                        </Card.Text>
                                        <Card.Text>
                                            <strong>Sunlight:</strong> {plant.sunlight}
                                        </Card.Text>
                                        <Card.Text>
                                            <strong>Growth Medium:</strong> {plant.growth_medium}
                                        </Card.Text>
                                        <Card.Text>
                                            <strong>Watering Frequency:</strong> {plant.watering_frequency}
                                        </Card.Text>
                                        <Card.Text>
                                            <strong>Temperature:</strong> {plant.temperature}
                                        </Card.Text>
                                        <Card.Text>
                                            <strong>Soil:</strong> {plant.soil}
                                        </Card.Text>
                                        <Card.Text>
                                            <strong>Fertilizing Frequency:</strong> {plant.fertilizing_frequency}
                                        </Card.Text>
                                        <Card.Text>
                                            <strong>Fertilizer:</strong> {plant.fertilizer}
                                        </Card.Text>
                                        <Card.Text>
                                            <strong>Pests:</strong> {plant.pests}
                                        </Card.Text>
                                        <Card.Text>
                                            <strong>Diseases :</strong> {plant.disease}
                                        </Card.Text>
                                        <Card.Text>
                                            <strong>Misting Frequency:</strong> {plant.misting_frequency}
                                        </Card.Text>
                                        <Card.Text>
                                            <strong>Rotation:</strong> {plant.rotation}
                                        </Card.Text>
                                        <Card.Text>
                                            <strong>Repotting:</strong> {plant.repotting}
                                        </Card.Text>
                                        <Card.Text>
                                            <strong>Reproduction:</strong> {plant.reproduction}
                                        </Card.Text>
                                        {/* Add other plant details here as needed */}
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))
                    ) : (
                        <p>No plants found</p>
                    )}
                </Row>
            </div>
        </Container>
        </div>
    );
};

export default Recommendation;
