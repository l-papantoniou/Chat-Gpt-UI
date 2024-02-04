import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import HotelIcon from '@mui/icons-material/Hotel';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import SettingsIcon from '@mui/icons-material/Settings';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

export const navigationItems = [
    {id: 1, text: 'Αρχική', icon: <HomeIcon/>, route: '/'},
    {id: 2, text: 'Τουριστικά Καταλύματα', icon: <HotelIcon/>, route: '/hospitality-venues'},
    {id: 3, text: 'Προσθήκη τουριστικού καταλύματος', icon: <AddCircleOutlineIcon/>, route: '/add-hospitality-venue'},
    {id: 4, text: 'Δημιουργία περιεχομένου AI', icon: <EmojiObjectsIcon/>, route: '/ai-content-creation'},
    {id: 5, text: 'Σχετικά', icon: <InfoIcon/>, route: '/about'},
    {id: 6, text: 'Ρυθμίσεις', icon: <SettingsIcon/>, route: '/settings'},
    // Add more items as needed
];

