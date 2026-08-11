import { HashRouter, Routes, Route } from 'react-router-dom';

import { ProgressProvider } from './context/ProgressContext';

import Home from './pages/Home';

import BiologyHome from './pages/BiologyHome';
import PhysicsHome from './pages/PhysicsHome';
import ChemistryHome from './pages/ChemistryHome';

import ChapterPractice from './pages/ChapterPractice';
import PhysicsChapterPractice from './pages/PhysicsChapterPractice';
import ChemistryChapterPractice from './pages/ChemistryChapterPractice';

import MockTest from './pages/MockTest';
import MistakeBank from './pages/MistakeBank';

import ComingSoon from './pages/ComingSoon';

import './index.css';


export default function App() {

  return (

    <ProgressProvider>

      <HashRouter>

        <div className="app-shell">

          <Routes>

            {/* =================================================
                HOME
                ================================================= */}

            <Route
              path="/"
              element={<Home />}
            />


            {/* =================================================
                BIOLOGY
                ================================================= */}

            <Route
              path="/biology"
              element={<BiologyHome />}
            />

            <Route
              path="/biology/chapter/:chapterId"
              element={<ChapterPractice />}
            />

            <Route
              path="/biology/mock"
              element={<MockTest />}
            />

            <Route
              path="/biology/mistakes"
              element={<MistakeBank />}
            />


            {/* =================================================
                PHYSICS
                ================================================= */}

            <Route
              path="/physics"
              element={<PhysicsHome />}
            />

            <Route
              path="/physics/chapter/:chapterId"
              element={<PhysicsChapterPractice />}
            />

            <Route
              path="/physics/mock"
              element={<MockTest subject="physics" />}
            />

            <Route
              path="/physics/mistakes"
              element={<MistakeBank subject="physics" />}
            />


            {/* =================================================
                CHEMISTRY
                ================================================= */}

            <Route
              path="/chemistry"
              element={<ChemistryHome />}
            />

            <Route
              path="/chemistry/chapter/:chapterId"
              element={<ChemistryChapterPractice />}
            />

            <Route
              path="/chemistry/mock"
              element={<MockTest subject="chemistry" />}
            />

            <Route
              path="/chemistry/mistakes"
              element={<MistakeBank subject="chemistry" />}
            />


            {/* =================================================
                FALLBACK
                ================================================= */}

            <Route
              path="*"
              element={
                <ComingSoon subject="Page" />
              }
            />

          </Routes>

        </div>

      </HashRouter>

    </ProgressProvider>

  );
}

