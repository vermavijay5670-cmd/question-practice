import { HashRouter, Routes, Route } from 'react-router-dom';
import { ProgressProvider } from './context/ProgressContext';
import Home from './pages/Home';
import BiologyHome from './pages/BiologyHome';
import ChapterPractice from './pages/ChapterPractice';
import MockTest from './pages/MockTest';
import MistakeBank from './pages/MistakeBank';
import ComingSoon from './pages/ComingSoon';

export default function App() {
  return (
    <ProgressProvider>
      <HashRouter>
        <div className="app-shell">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/biology" element={<BiologyHome />} />
            <Route path="/biology/mistakes" element={<MistakeBank />} />
            <Route path="/biology/mock" element={<MockTest />} />
            <Route path="/biology/chapter/:chapterId" element={<ChapterPractice />} />
            <Route path="/chemistry" element={<ComingSoon subject="Chemistry" />} />
            <Route path="/physics" element={<ComingSoon subject="Physics" />} />
          </Routes>
        </div>
      </HashRouter>
    </ProgressProvider>
  );
}
