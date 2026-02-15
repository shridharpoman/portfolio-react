import React, { useState } from 'react';

const Portfolio = ({ active }) => {
  const [filter, setFilter] = useState('all');
  const [selectActive, setSelectActive] = useState(false);

  const projects = [
    { 
      title: 'AI Instagram Content Scraper', 
      category: 'AI & Automation', 
      image: '/assets/images/project-1.jpg',
      description: 'End-to-end n8n automation pipeline to ingest, transcribe, and regenerate brand-aligned scripts using LLMs.'
    },
    { 
      title: 'Farmer Loan Recommendation', 
      category: 'Web development', 
      image: '/assets/images/project-2.png',
      description: 'Web application using Django and Python for backend data analysis to help farmers access tool offers.'
    },
    { 
      title: 'Automated QA Framework', 
      category: 'Applications', 
      image: '/assets/images/project-4.png',
      description: 'Robust automation testing suite achieving 98% coverage for enterprise-scale platforms.'
    }
  ];

  const categories = ['All', 'AI & Automation', 'Web development', 'Applications'];

  const handleFilter = (category) => {
    setFilter(category.toLowerCase());
    setSelectActive(false);
  };

  const filteredProjects = projects.filter(project => 
    filter === 'all' || project.category.toLowerCase() === filter
  );

  return (
    <article className={`portfolio ${active ? 'active' : ''}`} data-page="portfolio">
      <header>
        <h2 className="h2 article-title">Portfolio</h2>
      </header>

      <section className="projects">
        <ul className="filter-list">
          {categories.map(cat => (
            <li className="filter-item" key={cat}>
              <button 
                className={filter === cat.toLowerCase() ? 'active' : ''} 
                onClick={() => handleFilter(cat)}
                data-filter-btn
              >
                {cat}
              </button>
            </li>
          ))}
        </ul>

        <div className="filter-select-box">
          <button 
            className={`filter-select ${selectActive ? 'active' : ''}`} 
            onClick={() => setSelectActive(!selectActive)} 
            data-select
          >
            <div className="select-value" data-selecct-value>
              {categories.find(c => c.toLowerCase() === filter) || 'Select category'}
            </div>
            <div className="select-icon">
              <ion-icon name="chevron-down"></ion-icon>
            </div>
          </button>

          <ul className="select-list">
            {categories.map(cat => (
              <li className="select-item" key={cat}>
                <button onClick={() => handleFilter(cat)} data-select-item>{cat}</button>
              </li>
            ))}
          </ul>
        </div>

        <ul className="project-list">
          {filteredProjects.map((project, index) => (
            <li className="project-item active" key={index} data-filter-item data-category={project.category.toLowerCase()}>
              <a href="#">
                <figure className="project-img">
                  <div className="project-item-icon-box">
                    <ion-icon name="eye-outline"></ion-icon>
                  </div>
                  <img src={project.image} alt={project.title} loading="lazy" />
                </figure>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-category">{project.category}</p>
                <p style={{ fontSize: '13px', color: 'var(--light-gray)', marginTop: '5px' }}>{project.description}</p>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
};

export default Portfolio;
