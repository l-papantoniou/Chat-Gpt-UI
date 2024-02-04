import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import FavoriteIcon from '@mui/icons-material/Favorite';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import PersonIcon from '@mui/icons-material/Person';
import AdventureIcon from '@mui/icons-material/Explore';
import ElderlyIcon from '@mui/icons-material/Elderly';
import GroupIcon from '@mui/icons-material/Group';


export const targetAudienceOptions = [
    {id: 1, text: 'Οικογένειες', value: 'Families', icon: <FamilyRestroomIcon/>},
    {id: 2, text: 'Ζευγάρια', value: 'Couples', icon: <FavoriteIcon/>},
    {id: 3, text: 'Ταξιδιώτες για επαγγελματικούς λόγους', value: 'Business Travelers', icon: <BusinessCenterIcon/>},
    {id: 4, text: 'Σόλο ταξιδιώτες', value: 'Solo Travelers', icon: <PersonIcon/>},
    {id: 5, text: 'Αναζητητές περιπέτειας', value: 'Adventure Seekers', icon: <AdventureIcon/>},
    {id: 6, text: 'Ταξιδιώτες μεγαλύτερης ηλικίας', value: 'Senior Travelers', icon: <ElderlyIcon/>},
    {id: 7, text: 'Ομάδες & εκδηλώσεις', value: 'Groups & Events', icon: <GroupIcon/>},

];
