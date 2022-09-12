/**
 * MUI Imports
 */
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider } from "@emotion/react";

/**
 * custom file Imports
 */
import theme from 'styles/theme'
import createEmotionCache from 'styles/createEmotionCache'
import AppRoutes from "routes/AppRoutes";

const clientSideEmotionCache =  createEmotionCache();


// https://colorhunt.co/palette/f0ebe3e4dccf7d9d9c576f72

function App({ emotionCache = clientSideEmotionCache }) {
  return (
    <>
      <CacheProvider value={emotionCache}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <AppRoutes />
        </ThemeProvider>
      </CacheProvider>
    </>
  );
}

export default App;
