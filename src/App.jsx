import { lazy, Suspense } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import SectionCard from './components/SectionCard';
import { incomingFiles } from './data/incomingFiles';
import { returnedFiles } from './data/returnedFiles';
import './styles/App.css';

const QuickPdfTools = lazy(() => import('./components/QuickPdfTools'));

function App() {
  return (
    <div className="app">
      <div className="app__background" aria-hidden="true">
        <div className="app__mesh" />
        <div className="app__mesh app__mesh--layer-2" />
        <div className="app__grid" />
        <span className="app__beam" />
        <span className="app__orb app__orb--primary" />
        <span className="app__orb app__orb--accent" />
        <span className="app__orb app__orb--soft" />
        <span className="app__orb app__orb--glow" />
        <div className="app__particles">
          {Array.from({ length: 18 }, (_, i) => (
            <span
              key={i}
              className="app__particle"
              style={{ '--particle-index': i }}
            />
          ))}
        </div>
      </div>

      <div className="app__content">
        <Header />

        <main className="app__main">
          <div className="app__container">
            <SectionCard
              variant="incoming"
              items={incomingFiles}
              delay={200}
            />

            <SectionCard
              variant="returned"
              items={returnedFiles}
              delay={400}
            />

            <Suspense fallback={null}>
              <QuickPdfTools delay={600} />
            </Suspense>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;
