import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import whatsappLogo from '../assets/WhatsApp Image 2025-05-20 at 06.06.10_6fad75d9.jpg';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState([]);
  const dropdownRef = useRef(null);
  const timeoutRef = useRef(null);

  const handleMouseEnter = (dropdownChain) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setActiveDropdown(dropdownChain);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown([]);
    }, 200);
  };

  const academicsItems = [
    { title: "Directors & Founder", path: "/academics/directors-founder" },
    { title: "Co-Directors", path: "/academics/co-directors" },
    { title: "Fellows", path: "/academics/fellows" },
    { 
      title: "People", 
      path: "/academics/people",
      children: [
        { title: "Legal Advisor", path: "/legal-advisor" },
        { title: "Technical Advisor", path: "/academics/people/technical-advisor" }
      ]
    }
  ];

  const researchItems = [
    { title: "Research Centers", path: "/research/centers" },
    { title: "Publications", path: "/research/publications" },
    { title: "Research Projects", path: "/research/projects" },
    { title: "Collaborations", path: "/research/collaborations" },
    { title: "Research Grants", path: "/research/grants" }
  ];

  const studentItems = [
    { title: "Student Portal", path: "/students/portal" },
    { title: "Academic Calendar", path: "/students/calendar" },
    { title: "Student Services", path: "/students/services" },
    { title: "Campus Life", path: "/students/campus-life" },
    { title: "Student Resources", path: "/students/resources" },
    { title: "Student Organizations", path: "/students/organizations" }
  ];

  const newsItems = [
    { title: "Latest News", path: "/news/latest" },
    { title: "Events Calendar", path: "/news/events" },
    { title: "Press Releases", path: "/news/press" },
    { title: "Media Gallery", path: "/news/gallery" },
    { title: "Newsletter", path: "/news/newsletter" }
  ];

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const renderDropdown = (items, currentDropdownChain) => (
    <div 
      className={`dropdown-menu ${activeDropdown.slice(0, currentDropdownChain.length).join('-') === currentDropdownChain.join('-') ? 'show' : ''}`}
      onMouseEnter={() => handleMouseEnter(currentDropdownChain)}
      onMouseLeave={handleMouseLeave}
    >
      {items.map((item, index) => (
        item.children ? (
          <div 
            key={index}
            className="dropdown-item dropdown-parent"
            onMouseEnter={() => handleMouseEnter([...currentDropdownChain, item.title.replace(/\s+/g, '-').toLowerCase()])}
            onMouseLeave={handleMouseLeave}
          >
            <span>{item.title}</span>
            <span className="dropdown-arrow">►</span>
            {renderDropdown(item.children, [...currentDropdownChain, item.title.replace(/\s+/g, '-').toLowerCase()])}
          </div>
        ) : (
          <Link 
            key={index}
            to={item.path}
            className="dropdown-item"
          >
            {item.title}
          </Link>
        )
      ))}
    </div>
  );

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/">
            <img src={whatsappLogo} alt="WhatsApp Logo" className="site-logo" />
            Collective Knowledge
          </Link>
        </div>
        
        <div className={`navbar-menu${isMenuOpen ? ' active' : ''}`}>
          <ul className="nav-links">
            <li><Link to="/" className="nav-link">Home</Link></li>
            <li 
              className="dropdown-container"
              onMouseEnter={() => handleMouseEnter(['academics'])}
              onMouseLeave={handleMouseLeave}
            >
              <button 
                className={`nav-link dropdown-trigger ${activeDropdown[0] === 'academics' ? 'active' : ''}`}
                aria-expanded={activeDropdown[0] === 'academics'}
                aria-haspopup="true"
              >
                Academics
                <span className="dropdown-arrow">▼</span>
              </button>
              {renderDropdown(academicsItems, ['academics'])}
            </li>
            <li 
              className="dropdown-container"
              onMouseEnter={() => handleMouseEnter(['research'])}
              onMouseLeave={handleMouseLeave}
            >
              <button 
                className={`nav-link dropdown-trigger ${activeDropdown[0] === 'research' ? 'active' : ''}`}
                aria-expanded={activeDropdown[0] === 'research'}
                aria-haspopup="true"
              >
                Research & Publication
                <span className="dropdown-arrow">▼</span>
              </button>
              {renderDropdown(researchItems, ['research'])}
            </li>
            <li 
              className="dropdown-container"
              onMouseEnter={() => handleMouseEnter(['students'])}
              onMouseLeave={handleMouseLeave}
            >
              <button 
                className={`nav-link dropdown-trigger ${activeDropdown[0] === 'students' ? 'active' : ''}`}
                aria-expanded={activeDropdown[0] === 'students'}
                aria-haspopup="true"
              >
                For Students
                <span className="dropdown-arrow">▼</span>
              </button>
              {renderDropdown(studentItems, ['students'])}
            </li>
            <li 
              className="dropdown-container"
              onMouseEnter={() => handleMouseEnter(['news'])}
              onMouseLeave={handleMouseLeave}
            >
              <button 
                className={`nav-link dropdown-trigger ${activeDropdown[0] === 'news' ? 'active' : ''}`}
                aria-expanded={activeDropdown[0] === 'news'}
                aria-haspopup="true"
              >
                News & Events
                <span className="dropdown-arrow">▼</span>
              </button>
              {renderDropdown(newsItems, ['news'])}
            </li>
            <li><Link to="/contact" className="nav-link">Contact</Link></li>
          </ul>
        </div>

        <button 
          className={`hamburger ${isMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar; 