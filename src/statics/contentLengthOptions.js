import ShortTextIcon from '@mui/icons-material/ShortText';
import NotesIcon from '@mui/icons-material/Notes';
import DescriptionIcon from '@mui/icons-material/Description';

export const contentLengthOptions = [
    {id: 1, text: 'Σύντομη (100-200 λέξεις)', value: 'short', icon: <ShortTextIcon/>},
    {id: 2, text: 'Μεσαίο (200-500 λέξεις)', value: 'medium', icon: <NotesIcon/>},
    {id: 3, text: 'Μεγάλο (500-1000 λέξεις)', value: 'long', icon: <DescriptionIcon/>},
];