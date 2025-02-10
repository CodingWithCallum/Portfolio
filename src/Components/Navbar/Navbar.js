import React from 'react'
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { NavbarItems } from './Consts/NavbarItems'
import { navbarStyles } from './NavbarStyles';
import { useParams, useNavigate } from 'react-router';

  const Navbar = () => {
  const navigate = useNavigate();
  return (
      <Drawer sx={navbarStyles.drawer} variant="permanent" anchor="left">
        <List>
          {NavbarItems.map((item, index) => (
          <ListItem key={item.id} onClick={() => navigate(item.route)}>
            <ListItemButton>
              
              <ListItemIcon sx={navbarStyles.icons}>
                     {item.icon}
              </ListItemIcon>

              <ListItemText sx={navbarStyles.text} primary={item.label} />

            </ListItemButton>
          </ListItem>
          ))}
        </List>
      </Drawer>
  )
}

export default Navbar