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
  );
}

export default App;
