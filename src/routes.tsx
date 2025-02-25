import { Routes, Route } from 'react-router-dom';
import NotFound from './pages/NotFound';
import Page from './pages/Page';
import Page2 from './pages/Page2';
import FileManager from './pages/FileManager';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<FileManager />} />
    <Route path="/page1" exact element={<Page />} />
    <Route path="/page2" exact element={<Page2 />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default AppRoutes;

