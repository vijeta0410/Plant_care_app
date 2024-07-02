import React, { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import axios from 'axios';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await axios.get('/api/v1/auth/user'); // Adjust the endpoint as needed
                setUser(response.data.user);
            } catch (error) {
                console.error('Error fetching user:', error);
            }
        };

        fetchUser();
    }, []);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};

// Add prop type validation for the children prop
UserProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
