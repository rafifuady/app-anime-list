import { useState } from 'react'
import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';
import { NavLink, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const { pathname } = useLocation();
  const [value, setValue] = useState<String>(pathname.substring(1));

  return (
    <Paper sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}>
      <BottomNavigation showLabels value={value} onChange={(_, newValue) => setValue(newValue)}>
        <BottomNavigationAction label='AnimeList' value='' component={NavLink} to='/' />
        <BottomNavigationAction label='Collection' value='collection' component={NavLink} to='/collection' />
      </BottomNavigation>
    </Paper>
  )
}

export default Navbar