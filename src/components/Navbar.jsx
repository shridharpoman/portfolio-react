import React from 'react';

const Navbar = ({ activePage, setActivePage, theme, toggleTheme }) => {
  const navItems = ['About', 'Resume', 'Portfolio', 'Blog', 'Contact'];

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        {navItems.map((item) => (
          <li className="navbar-item" key={item}>
            <button
              className={`navbar-link ${activePage === item.toLowerCase() ? 'active' : ''}`}
              onClick={() => setActivePage(item.toLowerCase())}
              data-nav-link
            >
              {item}
            </button>
          </li>
        ))}
        <li className="navbar-item">
          <button className="navbar-link" onClick={toggleTheme}>
            <ion-icon name={theme === 'dark' ? 'sunny-outline' : 'moon-outline'}></ion-icon>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
