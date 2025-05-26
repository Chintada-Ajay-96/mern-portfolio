import { lazy, Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { Helmet } from 'react-helmet';
import Layout from './components/Layout/Layout';
import MobileNav from './components/MobileNav/MobileNav';
import ScrollToTop from "react-scroll-to-top";
import { ThemeProvider } from './context/ThemeContext';
import './App.css';

// Lazy-loaded components
const About = lazy(() => import('./pages/About/About'));
const Contact = lazy(() => import('./pages/Contact/Contact'));
const Education = lazy(() => import('./pages/Educations/Education'));
const Project = lazy(() => import('./pages/Projects/Project'));
const Techstack = lazy(() => import('./pages/Techstack/Techstack'));

function ErrorFallback({ error }) {
  return (
    <div role="alert" className="alert alert-danger">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Helmet>
          <title>Ajay's Portfolio</title>
          <meta name="description" content="Professional portfolio of Ch. Ajay" />
        </Helmet>

        <MobileNav />
        <Layout />
        <div className="container">
          <Suspense fallback={<div className="loading-spinner">Loading...</div>}>
            <About />
            <Education />
            <Techstack />
            <Project />
            <Contact />
          </Suspense>
        </div>
        <div className="footer mb-3 ms-3">
          <h4 className="text-center">
            Made by 😎 Ch.Ajay &copy; {new Date().getFullYear()}
          </h4>
        </div>
        <ScrollToTop smooth style={{ backgroundColor: 'lightgreen', borderRadius: '80px' }} />
        </ErrorBoundary>
      </>
    </ThemeProvider>
  );
}

export default App;