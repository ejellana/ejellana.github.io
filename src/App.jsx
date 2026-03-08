import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
// You can add more pages later: About, Projects, etc.

function App() {
  return (
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
  );
}

export default App;