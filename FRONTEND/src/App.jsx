import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import StudyDestinations from './pages/StudyDestinations';
import DestinationDetail from './pages/DestinationDetail';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import TeamPage from './pages/TeamPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="team" element={<TeamPage />} />
          <Route path="destinations" element={<StudyDestinations />} />
          <Route path="destinations/:slug" element={<DestinationDetail />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
