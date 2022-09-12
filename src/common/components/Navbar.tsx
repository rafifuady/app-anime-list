import { useState } from 'react'
import { BottomNavigation, BottomNavigationAction, Paper, styled } from '@mui/material';
import { NavLink, useLocation } from 'react-router-dom';

const StyledBottomNavigation = styled(BottomNavigation)(({theme}) => ({
  color: theme.palette.getContrastText('#E4DCCF'),
  backgroundColor: '#E4DCCF'
}))

const Navbar: React.FC = () => {
  const { pathname } = useLocation();
  const [value, setValue] = useState<String>(pathname.substring(1));

  return (
    <Paper sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}>
      <StyledBottomNavigation showLabels value={value} onChange={(_, newValue) => setValue(newValue)}>
        <BottomNavigationAction label='AnimeList' value='' component={NavLink} to='/' />
        <BottomNavigationAction label='Collection' value='collection' component={NavLink} to='/collection' />
      </StyledBottomNavigation>
    </Paper>
  )
}

export default Navbar