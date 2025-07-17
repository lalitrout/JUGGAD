import * as React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import TaskIcon from '@mui/icons-material/Task';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import SearchIcon from '@mui/icons-material/Search';
import AssignmentIcon from '@mui/icons-material/Assignment';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import LogoutIcon from '@mui/icons-material/Logout';

import useAuth from '../../context/UseAuth';

export default function SideDrawer() {
  const [open, setOpen] = React.useState(false);
  const { setIsAuthenticated, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const handleLogout = async () => {
    const result = await Swal.fire({
      title: 'Are you sure?',
      text: 'You will be logged out of your account.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, logout',
      cancelButtonText: 'Cancel'
    });

    if (result.isConfirmed) {
      try {
        const res = await fetch('http://localhost:5000/logout', {
          method: 'POST',
          credentials: 'include',
        });

        if (res.ok) {
          setIsAuthenticated(false);
          Swal.fire('Logged Out!', 'You have been logged out.', 'success');
          navigate('/');
        } else {
          Swal.fire('Error', 'Failed to logout.', 'error');
        }
      } catch (error) {
        console.error("Logout error:", error);
        Swal.fire('Error', 'Something went wrong!', 'error');
      }
    }
  };

  const options = [
    { text: 'Post a Task', icon: <TaskIcon />, path: '/post-task' },
    { text: 'Join as Service Provider', icon: <GroupAddIcon />, path: '/join-provider' },
    { text: 'Browse Tasks', icon: <SearchIcon />, path: '/browse-tasks' },
    { text: 'My Tasks', icon: <AssignmentIcon />, path: '/my-tasks' },
    { text: 'Help / Support', icon: <HelpOutlineIcon />, path: '/help' },
   
  ];
  if (isAuthenticated) {
  options.push({ text: 'Logout', icon: <LogoutIcon />, isLogout: true });
}

  const DrawerList = (
    <Box
      sx={{
        mt: 8,
        width: 280,
        height: '100%',
        bgcolor: 'background.paper',
        p: 2,
        boxShadow: '0px 4px 12px rgba(0,0,0,0.1)',
        borderTopRightRadius: 12,
        borderBottomRightRadius: 12,
      }}
      role="presentation"
      onClick={toggleDrawer(false)}
    >
      <List sx={{ mt: 2 }}>
        {options.map((item) => (
          <ListItem key={item.text} disablePadding sx={{ mb: 1 }}>
            {item.isLogout ? (
              <ListItemButton
                onClick={handleLogout}
                sx={{
                  borderRadius: 2,
                  transition: '0.3s ease',
                  bgcolor: '#e3f2fd',
                  '&:hover': {
                    bgcolor: '#bbdefb',
                    transform: 'translateX(4px)',
                    boxShadow: '0 2px 8px rgba(25, 118, 210, 0.2)'
                  }
                }}
              >
                <ListItemIcon sx={{ color: '#1565c0', minWidth: 36 }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  primaryTypographyProps={{
                    sx: {
                      color: '#0d47a1',
                      fontWeight: 500,
                      fontSize: '0.95rem'
                    }
                  }}
                />
              </ListItemButton>
            ) : (
              <ListItemButton
                component={Link}
                to={item.path}
                sx={{
                  borderRadius: 2,
                  transition: '0.3s ease',
                  bgcolor: '#e3f2fd',
                  '&:hover': {
                    bgcolor: '#bbdefb',
                    transform: 'translateX(4px)',
                    boxShadow: '0 2px 8px rgba(25, 118, 210, 0.2)'
                  }
                }}
              >
                <ListItemIcon sx={{ color: '#1565c0', minWidth: 36 }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  primaryTypographyProps={{
                    sx: {
                      color: '#0d47a1',
                      fontWeight: 500,
                      fontSize: '0.95rem'
                    }
                  }}
                />
              </ListItemButton>
            )}
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <Button
        onClick={toggleDrawer(true)}
        sx={{
          minWidth: 'auto',
          color: '#1976d2',
          p: 1,
          borderRadius: '50%',
          boxShadow: '0 2px 6px rgba(25, 118, 210, 0.3)',
          bgcolor: 'white',
          '&:hover': { bgcolor: '#e3f2fd' }
        }}
      >
        <MenuIcon />
      </Button>
      <Drawer
        open={open}
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: {
            bgcolor: '#f0f7ff',
            borderRight: 'none',
            boxShadow: '4px 0 12px rgba(0,0,0,0.1)'
          }
        }}
      >
        {DrawerList}
      </Drawer>
    </div>
  );
}
