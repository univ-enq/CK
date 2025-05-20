import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'
import Carousel from './components/Carousel'
import Contact from './pages/Contact';
import LegalAdvisor from './pages/LegalAdvisor';
import Directors from './pages/Directors';
import TechnicalAdvisor from './pages/TechnicalAdvisor';
import Achievements from './pages/Achievements';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import AcademicCalendar from './pages/AcademicCalendar';
import StudentPortal from './pages/StudentPortal';
import Internships from './pages/Internships';
import Fellowship from './pages/Fellowship';
import LatestNews from './pages/LatestNews';
import EventsCalendar from './pages/EventsCalendar';
import PressRelease from './pages/PressRelease';
import MediaGallery from './pages/MediaGallery';
import Newsletter from './pages/Newsletter';
import Publications from './pages/Publications';
import ResearchProjects from './pages/ResearchProjects';
import './App.css'

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState('mission');

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const aboutContent = {
    mission: {
      title: "Our Mission",
      content: "To empower individuals and organizations through innovative education and research, fostering a culture of excellence and continuous learning. We strive to create a transformative impact on society by bridging the gap between academia and real-world applications.",
      icon: "🎯"
    },
    vision: {
      title: "Our Vision",
      content: "To be a global leader in knowledge creation and dissemination, recognized for our commitment to excellence, innovation, and social impact. We envision a world where education transcends boundaries and empowers individuals to reach their full potential.",
      icon: "👁️"
    },
    values: {
      title: "Our Values",
      content: "Excellence in everything we do, Innovation in our approach, Integrity in our actions, Collaboration in our work, and Impact in our outcomes. These core values guide our decisions and shape our culture.",
      icon: "💎"
    }
  };

  const stats = [
    { number: "5+", label: "Years of Excellence", icon: "⭐" },
    { number: "1000+", label: "Students Empowered", icon: "👥" },
    { number: "10+", label: "Research Papers", icon: "📚" },
    { number: "5+", label: "Global Partners", icon: "🤝" }
  ];

  return (
    <Router>
      <ScrollToTop />
      <Navbar className={scrolled ? 'scrolled' : ''} />
      <Routes>
        <Route path="/" element={
          <main className="main-content">
            <section className="hero">
              <Carousel />
            </section>
            <section className="about-section">
              <div className="about-container">
                <h2 className="section-title">About Collective Knowledge</h2>
                <div className="tabs-container">
                  {Object.entries(aboutContent).map(([key, content]) => (
                    <button
                      key={key}
                      className={`tab-button ${activeTab === key ? 'active' : ''}`}
                      onClick={() => setActiveTab(key)}
                    >
                      <span className="tab-icon">{content.icon}</span>
                      {content.title}
                    </button>
                  ))}
                </div>
                <div className="tab-content">
                  <div className={`tab-pane ${activeTab === 'mission' ? 'active' : ''}`}>
                    <h3>{aboutContent.mission.title}</h3>
                    <p>{aboutContent.mission.content}</p>
                  </div>
                  <div className={`tab-pane ${activeTab === 'vision' ? 'active' : ''}`}>
                    <h3>{aboutContent.vision.title}</h3>
                    <p>{aboutContent.vision.content}</p>
                  </div>
                  <div className={`tab-pane ${activeTab === 'values' ? 'active' : ''}`}>
                    <h3>{aboutContent.values.title}</h3>
                    <p>{aboutContent.values.content}</p>
                  </div>
                </div>
                <div className="stats-container">
                  {stats.map((stat, index) => (
                    <div key={index} className="stat-card">
                      <span className="stat-icon">{stat.icon}</span>
                      <h3 className="stat-number">{stat.number}</h3>
                      <p className="stat-label">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </main>
        } />
        <Route path="/contact" element={<Contact />} />
        <Route path="/legal-advisor" element={<LegalAdvisor />} />
        <Route path="/academics/directors-founder" element={<Directors />} />
        <Route path="/academics/people/technical-advisor" element={<TechnicalAdvisor />} />
        <Route path="/students/organizations" element={<Achievements />} />
        <Route path="/academic-calendar" element={<AcademicCalendar />} />
        <Route path="/students/portal" element={<StudentPortal />} />
        <Route path="/students/services" element={<Internships />} />
        <Route path="/students/campus-life" element={<Fellowship />} />
        <Route path="/news" element={<LatestNews />} />
        <Route path="/news/events" element={<EventsCalendar />} />
        <Route path="/news/press-releases" element={<PressRelease />} />
        <Route path="/news/gallery" element={<MediaGallery />} />
        <Route path="/news/newsletter" element={<Newsletter />} />
        <Route path="/news/publications" element={<Publications />} />
        <Route path="/research/projects" element={<ResearchProjects />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
