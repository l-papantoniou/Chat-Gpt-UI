import React, {useState, useEffect, useMemo} from 'react';
import {
    Container,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    IconButton, Typography, Box
} from '@mui/material';
import axiosInstance from "../utils/axiosInstance";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import {useAuth} from "../shared/AuthContext";
import {useNavigate} from "react-router-dom";
import {useHotelCompaniesStyle} from "../themes/HotelCompaniesTheme";
import ConfirmDialog from "../shared/ConfirmDialog";
import CustomSnackbar from "../shared/CustomSnackBar";
import {TableSortLabel} from '@mui/material';
import Tooltip from '@mui/material/Tooltip';
import ApartmentIcon from '@mui/icons-material/Apartment';

const HotelCompaniesPage = () => {
        const [successMessage, setSuccessMessage] = useState('');
        const [errorMessage, setErrorMessage] = useState('');

        const [hotelCompanies, setHotelCompanies] = useState([]);
        const [openConfirmDialog, setOpenConfirmDialog] = useState(false);
        const [selectedHotelId, setSelectedHotelId] = useState(null);

        const [sortConfig, setSortConfig] = useState({field: null, direction: 'asc'});

        const styles = useHotelCompaniesStyle();
        const navigate = useNavigate();
        const {user} = useAuth();


        const handleSort = (field) => {
            const isAsc = sortConfig.field === field && sortConfig.direction === 'asc';
            setSortConfig({field, direction: isAsc ? 'desc' : 'asc'});
        };

        const sortedHotelCompanies = useMemo(() => {
            if (!sortConfig.field) {
                return hotelCompanies;
            }
            return [...hotelCompanies].sort((a, b) => {
                if (a[sortConfig.field] < b[sortConfig.field]) {
                    return sortConfig.direction === 'asc' ? -1 : 1;
                }
                if (a[sortConfig.field] > b[sortConfig.field]) {
                    return sortConfig.direction === 'asc' ? 1 : -1;
                }
                return 0;
            });
        }, [hotelCompanies, sortConfig]);

        const fetchHotelCompanies = async () => {
            try {
                // Replace with your actual API endpoint
                const response = await axiosInstance.get(`/hotel-companies/user/${user.id}`);
                setHotelCompanies(response.data);
            } catch (error) {
                console.error('Error fetching hotel companies:', error);
            }
        };

        const handleSnackbarClose = () => {
            setSuccessMessage('');
            setErrorMessage('');
        };

        const handleDeleteClick = (hotelId) => {
            setOpenConfirmDialog(true);
            setSelectedHotelId(hotelId);
        };

        const handleConfirmDelete = async () => {
            if (selectedHotelId) {
                // Proceed with deletion logic
                handleDelete(selectedHotelId);
            }
            setOpenConfirmDialog(false);
            setSelectedHotelId(null);
        };
        const handleDelete = async (hotelId) => {
            try {
                const response = axiosInstance.delete(`/hotel-companies/delete/${hotelId}`)
                setSuccessMessage("Your Hospitality-Venue has been successfully deleted");
                setErrorMessage(""); // Clear any previous error

                setTimeout(() => {
                    setSuccessMessage(''); // Hide the success message
                    fetchHotelCompanies();
                }, 1000); // Navigate after 1.5 seconds

                fetchHotelCompanies();
                // Display success message or update UI accordingly
            } catch (error) {
                console.error('Error deleting hotel company:', error);
                // Display error message
            }
        };

        const handleEdit = (hotelId) => {
            navigate(`/edit-hospitality-venue/${hotelId}`);
        };


        useEffect(() => {
            fetchHotelCompanies();
        }, [])


        return (
            <Container maxWidth="lg">
                <Box sx={styles.tableTitle}>
                    <ApartmentIcon fontSize="large" sx={{mr: 1, color: '#4c617e'}}/>
                    <Typography variant="h4" component="h1" sx={{fontWeight: 'bold'}}>
                        Τα τουριστικά σας καταλύματα
                    </Typography>
                </Box>
                <TableContainer component={Paper} sx={styles.tableContainer}>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell style={styles.tableHeadCell}>
                                    <Tooltip title="Sort">
                                        <TableSortLabel
                                            active={sortConfig.field === 'id'}
                                            direction={sortConfig.field === 'id' ? sortConfig.direction : 'asc'}
                                            onClick={() => handleSort('id')}
                                        >
                                            ID
                                        </TableSortLabel>
                                    </Tooltip>
                                </TableCell>
                                <TableCell style={styles.tableHeadCell}>
                                    <Tooltip title="Sort">
                                        <TableSortLabel
                                            active={sortConfig.field === 'name'}
                                            direction={sortConfig.field === 'name' ? sortConfig.direction : 'asc'}
                                            onClick={() => handleSort('name')}
                                        >
                                            Όνομα Καταλύματος
                                        </TableSortLabel>
                                    </Tooltip>
                                </TableCell>
                                <TableCell style={styles.tableHeadCell}>
                                    <Tooltip title="Sort">
                                        <TableSortLabel
                                            active={sortConfig.field === 'location'}
                                            direction={sortConfig.field === 'location' ? sortConfig.direction : 'asc'}
                                            onClick={() => handleSort('location')}
                                        >
                                            Τοποθεσία
                                        </TableSortLabel>
                                    </Tooltip>
                                </TableCell>
                                <TableCell style={styles.tableHeadCell}>
                                    <Tooltip title="Sort">
                                        <TableSortLabel
                                            active={sortConfig.field === 'type'}
                                            direction={sortConfig.field === 'type' ? sortConfig.direction : 'asc'}
                                            onClick={() => handleSort('type')}
                                        >
                                            Τύπος
                                        </TableSortLabel>
                                    </Tooltip>
                                </TableCell>
                                <TableCell style={styles.tableHeadCell}>Επεξεργασία</TableCell>
                                <TableCell style={styles.tableHeadCell}>Διαγραφή</TableCell>
                                {/* Add more headers if needed */}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {sortedHotelCompanies.map((hotel) => (
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
                                    <TableCell style={styles.tableCell}>
                                        <IconButton color="error" onClick={() => handleDeleteClick(hotel.id)}>
                                            <DeleteIcon/>
                                        </IconButton>
                                    </TableCell>
                                    {/* Add more cells if needed */}
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                    <ConfirmDialog
                        open={openConfirmDialog}
                        handleClose={() => setOpenConfirmDialog(false)}
                        handleConfirm={handleConfirmDelete}
                        title="Επιβεβαίωση Διαγραφής"
                        description="Είστε σίγουρος/η ότι θέλετε να διαγράψετε το τουριστικό σας κατάλυμα; Αυτή η ενέργεια δεν μπορεί να αναιρεθεί."
                    />
                    <CustomSnackbar
                        open={!!successMessage || !!errorMessage}
                        message={successMessage || errorMessage}
                        onClose={handleSnackbarClose}
                        severity={successMessage ? "success" : "error"}
                    />
                </TableContainer>
            </Container>
        );
    }
;

export default HotelCompaniesPage;
