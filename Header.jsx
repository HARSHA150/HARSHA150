import React, { useRef, useEffect } from 'react';
import logo from '../../assets/img/dumble.png';
import '../../styles/header.css';

const nav_links = [
  {
    path: '#home', 
    display: 'Home',
  },
  {
    path: '#Exercises', 
    display: 'Exercises',
  },
  {
    path: '#Pricing', 
    display: 'Pricing',
  },
  {
    path: '#Footer', 
    display: 'About',
  },
];

const Header = () => {
  const headerRef = useRef(null);

  const headerFunc = () => {
    if (window.scrollY > 80) {
      headerRef.current.classList.add('sticky_header');
    } else {
      headerRef.current.classList.remove('sticky_header');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', headerFunc);
    return () => {
      window.removeEventListener('scroll', headerFunc);
    };
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    const targetAttr = e.target.getAttribute('href');
    const targetElement = document.querySelector(targetAttr);

    if (targetElement) {
      const location = targetElement.offsetTop;
      window.scrollTo({
        left: 0,
        top: location - 80,
        behavior: 'smooth', 
      });
    }
  };

  return (
    <header className="header" ref={headerRef}>
      <div className="container">
        <div className="nav_wrapper">
          <div className="logo">
            <img src={logo} alt="FitBody Logo" className="logo_img" />
            <h2>FitBody</h2>
          </div>
          <nav className="navigation">
            <ul className="menu">
              {nav_links.map((item) => (
                <li key={item.display} className="nav_item">
                  <a onClick={handleClick} href={item.path}>
                    {item.display}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="nav_right">
            <a
              href="https://example.com/registration" 
              target="_blank"
              rel="noopener noreferrer" 
            >
              <button className="register_btn" aria-label="Register">
                Register
              </button>
            </a>
            <span className="mobile_menu" aria-label="Open menu">
              <i className="ri-menu-fill"></i>
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
