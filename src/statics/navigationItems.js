// navigationItems.js or within your component file
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import HotelIcon from '@mui/icons-material/Hotel';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects'; // For a brain-like icon
import SettingsIcon from '@mui/icons-material/Settings';




export const navigationItems = [
    {id: 1, text: 'Home', icon: <HomeIcon/>, route: '/'},
    {id: 2, text: 'Hotels', icon: <HotelIcon/>, route: '/input'},
    {id: 3, text: 'AI Content-Creation', icon: <EmojiObjectsIcon/>, route: '/input'},
    {id: 4, text: 'About', icon: <InfoIcon/>, route: '/about'},
    {id: 5, text: 'Settings', icon: <SettingsIcon/>, route: '/settings'},
    // Add more items as needed
];

