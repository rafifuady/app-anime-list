import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AnimeListPage from 'pages/list/AnimeListPage'
import AnimeCollectionPage from 'pages/collection/AnimeCollectionPage'
import AnimeDetailPage from 'pages/detail/AnimeDetailPage'
import MainLayout from 'common/layout/MainLayout'

const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<AnimeListPage />} />
          <Route path='detail/:id' element={<AnimeDetailPage />} />
          <Route path='collection' element={<AnimeCollectionPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes