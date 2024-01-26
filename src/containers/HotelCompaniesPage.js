import React, {useState, useEffect} from 'react';
import {Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper} from '@mui/material';
import axiosInstance from "../utils/axiosInstance";
import {useAuth} from "../shared/AuthContext";

const HotelCompaniesPage = () => {
    const [hotelCompanies, setHotelCompanies] = useState([]);

    const {user} = useAuth();

    useEffect(() => {
        const fetchHotelCompanies = async () => {
            try {
                // Replace with your actual API endpoint
                const response = await axiosInstance.get(`/hotel-companies/user/${user.id}`);
                setHotelCompanies(response.data);
                console.log(response);
            } catch (error) {
                console.error('Error fetching hotel companies:', error);
            }
        };

        fetchHotelCompanies();
    }, []);

    return (
        <Container maxWidth="md">
            <TableContainer component={Paper} sx={{mt: 4}}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Hotel Name</TableCell>
                            <TableCell>Location</TableCell>
                            <TableCell>Type</TableCell>
                            {/* Add more headers if needed */}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {hotelCompanies.map((hotel) => (
                            <TableRow key={hotel.id}>
                                <TableCell>{hotel.id}</TableCell>
                                <TableCell>{hotel.name}</TableCell>
                                <TableCell>{hotel.location}</TableCell>
                                <TableCell>{hotel.type}</TableCell>
                                {/* Add more cells if needed */}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
};

export default HotelCompaniesPage;
