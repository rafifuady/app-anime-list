import { Stack, styled } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Navbar from 'common/components/Navbar';

const MainStyle = styled('div')(() => ({
  overflow: 'auto',
  minHeight: '95vh'
}))

const MainLayout: React.FC = () => {
  return (
    <Stack>
      <MainStyle><Outlet /></MainStyle>
      <Navbar />
    </Stack>
  )
}

export default MainLayout