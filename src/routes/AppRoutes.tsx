import { Routes, Route } from "react-router-dom";
import AnimeListPage from "pages/list/AnimeListPage";

// const AppRoutes = () => {
//   return (
//     <Routes>
//       <Route path='list' element={<AnimeListPage />} />
//     </Routes>
//   )
// }
// Union<>
const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path='list' element={<AnimeListPage />} />
    </Routes>
  )
}

export default AppRoutes