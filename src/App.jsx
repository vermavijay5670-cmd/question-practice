import { HashRouter, Routes, Route } from 'react-router-dom';
import { ProgressProvider } from './context/ProgressContext';

import Home from './pages/Home';
import BiologyHome from './pages/BiologyHome';
import PhysicsHome from './pages/PhysicsHome';

import ChapterPractice from './pages/ChapterPractice';
import PhysicsChapterPractice from './pages/PhysicsChapterPractice';

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

            {/* BIOLOGY */}
            <Route path="/biology" element={<BiologyHome />} />
            <Route
              path="/biology/mistakes"
              element={<MistakeBank />}
            />
            <Route
              path="/biology/mock"
              element={<MockTest />}
            />
            <Route
              path="/biology/chapter/:chapterId"
              element={<ChapterPractice />}
            />

            {/* PHYSICS */}
            <Route path="/physics" element={<PhysicsHome />} />
            <Route
              path="/physics/chapter/:chapterId"
              element={<PhysicsChapterPractice />}
            />

            {/* CHEMISTRY */}
            <Route
              path="/chemistry"
              element={<ComingSoon subject="Chemistry" />}
            />

          </Routes>

        </div>
      </HashRouter>
    </ProgressProvider>
  );
}