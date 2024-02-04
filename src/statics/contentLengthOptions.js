import ShortTextIcon from '@mui/icons-material/ShortText';
import NotesIcon from '@mui/icons-material/Notes';
import DescriptionIcon from '@mui/icons-material/Description';

export const contentLengthOptions = [
    {id: 1, text: 'Short (100-200 words)', value: 'short', icon: <ShortTextIcon/>},
    {id: 2, text: 'Medium (200-500 words)', value: 'medium', icon: <NotesIcon/>},
    {id: 3, text: 'Long (500-1000 words)', value: 'long', icon: <DescriptionIcon/>},
];