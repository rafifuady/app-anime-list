import { Stack, styled } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Navbar from 'common/components/Navbar';

const MainStyle = styled('div')(() => ({
  overflow: 'auto',
  minHeight: '95vh'
}))

const ColoredStack = styled(Stack)(({theme}) => ({
  backgroundColor: '#F0EBE3'
}))

const MainLayout: React.FC = () => {
  return (
    <ColoredStack>
      <MainStyle><Outlet /></MainStyle>
      <Navbar />
    </ColoredStack>
  )
}

export default MainLayout