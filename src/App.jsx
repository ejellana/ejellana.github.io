import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import ScrollProgress from './components/ScrollProgress';

function App() {
  return (
    <>
      {/* Scroll progress bar — fixed top, z-index 9999 */}
      <ScrollProgress />

      <Router>
        <Routes>
          <Route path="/" element={
            <Layout>
              <Home />
            </Layout>
          } />
          {/* Add more routes later */}
          {/* <Route path="/about" element={<Layout><About /></Layout>} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;