import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Blog from './components/Blog';
import Contact from './components/Contact';

function App() {
  // Main application component
  const [activePage, setActivePage] = useState('about');

  const renderPage = () => {
    switch (activePage) {
      case 'about': return <About active={true} />;
      case 'resume': return <Resume active={true} />;
      case 'portfolio': return <Portfolio active={true} />;
      case 'blog': return <Blog active={true} />;
      case 'contact': return <Contact active={true} />;
      default: return <About active={true} />;
    }
  };

  return (
    <main>
      <Sidebar />
      <div className="main-content">
        <Navbar activePage={activePage} setActivePage={setActivePage} />
        {renderPage()}
      </div>
    </main>
  );
}

export default App;
