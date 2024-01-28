import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import HotelIcon from '@mui/icons-material/Hotel';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import SettingsIcon from '@mui/icons-material/Settings';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

export const navigationItems = [
    {id: 1, text: 'Home', icon: <HomeIcon/>, route: '/'},
    {id: 2, text: 'Hospitality Venues', icon: <HotelIcon/>, route: '/hospitality-venues'},
    {id: 3, text: 'Add Hospitality Venue', icon: <AddCircleOutlineIcon/>, route: '/add-hospitality-venue'},
    {id: 4, text: 'AI Content-Creation', icon: <EmojiObjectsIcon/>, route: '/input'},
    {id: 5, text: 'About', icon: <InfoIcon/>, route: '/about'},
    {id: 6, text: 'Settings', icon: <SettingsIcon/>, route: '/settings'},
    // Add more items as needed
];

