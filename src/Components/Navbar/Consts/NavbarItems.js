import HomeIcon from '@mui/icons-material/Home';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import InfoIcon from '@mui/icons-material/Info';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';

export const NavbarItems = [
    { id: 0, icon: <HomeIcon/>, label: 'Home', route: 'home',},
    { id: 1, icon: <SchoolIcon/>, label: 'Education', route: 'education',},
    { id: 2, icon: <WorkIcon/>, label: 'Experience', route: 'experience',},
    { id: 3, icon: <InfoIcon/>, label: 'About Me', route: 'skills',},
    { id: 4, icon: <SportsEsportsIcon/>, label: 'Gaming', route: 'gaming',},
    { id: 5, icon: <EmojiObjectsIcon/>, label: 'Projects', route: 'projects',},
    { id: 6, icon: <ConnectWithoutContactIcon/>, label: 'Contact Me', route: 'contact-me',},
]