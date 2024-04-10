import React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Routers from './Routers';
import { Link } from 'react-router-dom';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import { Grid, Typography } from '@mui/material';
import './App.css';
import Logo from './assets/images/sites/logo.png';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const ToolbarStyled = styled(Toolbar)({
  '& img': {
    width: 'auto',
    height: '40px',
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'space-between',
}));

const DrawerIconButton = styled(IconButton)({
  color: '#85818D',
});

const HeadListBoxStyled = styled(Box)({
  marginTop: '16px',
  marginBottom: '5px',
  paddingLeft: '16px',
  '& .MuiTypography-subtitle2': {
    color: '#85818D',
    fontWeight: '600',
  },
});

const ListItemStyled = styled(ListItem)({
  '& .MuiTypography-body1': {
    color: '#85818D',
    fontWeight: '500',
  },
  '& .MuiListItemButton-root': {
    marginLeft: '16px',
    paddingTop: '5px',
    paddingBottom: '5px',
  },
});

function App() {
  const theme = useTheme();
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position='fixed'
        open={open}
        sx={{
          backgroundColor: '#fff',
          boxShadow: 'none',
          borderBottom: '1px solid #E5E7EB',
        }}
      >
        <ToolbarStyled>
          <DrawerIconButton
            aria-label='open drawer'
            onClick={handleDrawerOpen}
            edge='start'
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </DrawerIconButton>
        </ToolbarStyled>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant='persistent'
        anchor='left'
        open={open}
      >
        <DrawerHeader>
          <img src={Logo} alt='' style={{ width: '30px', marginLeft: '8px' }} />
          <Typography variant='body1' sx={{ fontWeight: '700' }}>
            Aow Pruksa RO
          </Typography>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <HeadListBoxStyled>
            <Typography variant='subtitle2'>Dungeon</Typography>
          </HeadListBoxStyled>
          <ListItemStyled
            disablePadding
            button
            component={Link}
            to='/dungeon/central-lab'
          >
            <ListItemButton>
              <ListItemText primary='Central Laboratory' />
            </ListItemButton>
          </ListItemStyled>
        </List>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        <Routers />
        <Box sx={{ marginBottom: '50px' }}></Box>
      </Main>
    </Box>
  );
}

export default App;
