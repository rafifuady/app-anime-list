import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AnimeListPage from 'pages/list/AnimeListPage'
import AnimeCollectionPage from 'pages/collection/AnimeCollectionPage'
import AnimeDetailPage from 'pages/detail/AnimeDetailPage'

const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='' element={<AnimeListPage />} />
        <Route path='detail/:id' element={<AnimeDetailPage />} />
        <Route path='collection' element={<AnimeCollectionPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes