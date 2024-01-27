import React, {useState, useEffect} from 'react';
import {
    Container,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    IconButton
} from '@mui/material';
import axiosInstance from "../utils/axiosInstance";
import EditIcon from '@mui/icons-material/Edit';
import {useAuth} from "../shared/AuthContext";
import {useNavigate} from "react-router-dom";
import {useHotelCompaniesStyle} from "../themes/HotelCompaniesTheme";

const HotelCompaniesPage = () => {
    const [hotelCompanies, setHotelCompanies] = useState([]);

    const styles = useHotelCompaniesStyle();
    const navigate = useNavigate();
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

    const handleEdit = (hotelId) => {
        navigate(`/edit-hotel/${hotelId}`);
    };

    return (
        <Container maxWidth="md">
            <TableContainer component={Paper} sx={styles.tableContainer}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell style={styles.tableHeadCell}>ID</TableCell>
                            <TableCell style={styles.tableHeadCell}>Hotel Name</TableCell>
                            <TableCell style={styles.tableHeadCell}>Location</TableCell>
                            <TableCell style={styles.tableHeadCell}>Type</TableCell>
                            <TableCell style={styles.tableHeadCell}>Edit</TableCell>
                            {/* Add more headers if needed */}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {hotelCompanies.map((hotel) => (
                            <TableRow key={hotel.id} sx={styles.tableRow}>
                                <TableCell style={styles.tableCell}>{hotel.id}</TableCell>
                                <TableCell style={styles.tableCell}>{hotel.name}</TableCell>
                                <TableCell style={styles.tableCell}>{hotel.location}</TableCell>
                                <TableCell style={styles.tableCell}>{hotel.type}</TableCell>
                                <TableCell style={styles.tableCell}>
                                    <IconButton onClick={() => handleEdit(hotel.id)}>
                                        <EditIcon/>
                                    </IconButton>
                                </TableCell>
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
