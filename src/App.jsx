import { HashRouter, Routes, Route } from 'react-router-dom';
import { ProgressProvider } from './context/ProgressContext';

import Home from './pages/Home';
import BiologyHome from './pages/BiologyHome';
import PhysicsHome from './pages/PhysicsHome';
import ChemistryHome from '.pages/ChemistryHome';

import ChapterPractice from './pages/ChapterPractice';
import PhysicsChapterPractice from './pages/PhysicsChapterPractice';
import ChemistryChapterPractice from './pages/ChemistryChapterPractice';

import MockTest from './pages/MockTest';
import MistakeBank from './pages/MistakeBank';

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
              path="/chemistry" element={<ChemistryHome/>} />
              <Route
                path="/chemistry/chapter/:chapterID"
                element={<ChemistryChapterPractices />}
            />

          </Routes>

        </div>
      </HashRouter>
    </ProgressProvider>
  );
}