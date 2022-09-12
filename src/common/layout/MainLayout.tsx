import { styled } from "@mui/material/styles";
import { Stack } from "@mui/material";
import Navbar from "./components/Navbar";

const MainStyle = styled('div')(() => ({
  overflow: 'auto',
  minHeight: '95vh'
}))

export interface IMainLayoutProps {
  children: React.ReactNode
}

const MainLayout: React.FC<IMainLayoutProps> = ({children}) => {
  return (
    <Stack>
      <MainStyle>{children}</MainStyle>
      <Navbar />
    </Stack>
  )
}

export default MainLayout