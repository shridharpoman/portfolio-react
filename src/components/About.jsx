import React, { useState } from 'react';

const About = ({ active }) => {
  const [modalActive, setModalActive] = useState(false);
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);

  const services = [
    {
      title: 'AI & Automation Systems',
      icon: '/assets/images/icon-design.svg',
      text: 'I design and deploy end-to-end automation pipelines using LLMs, RAG architectures, and tools like n8n to streamline content generation and data processing.'
    },
    {
      title: 'Quality Engineering & Agile',
      icon: '/assets/images/icon-dev.svg',
      text: 'With a background as a Quality Engineering Analyst, I lead sprint planning, define structured user stories, and ensure 98%+ test coverage for high-impact platforms.'
    },
    {
      title: 'Product Strategy (CSPO®)',
      icon: '/assets/images/icon-app.svg',
      text: 'As a Certified Scrum Product Owner, I excel at defining product vision, prioritizing backlogs based on value, and making informed decisions under uncertainty.'
    },
    {
      title: 'Business Intelligence',
      icon: '/assets/images/icon-photo.svg',
      text: 'I build advanced dashboards in Tableau and Power BI to track execution KPIs, turning complex data into actionable product insights for stakeholders.'
    }
  ];

  const highlights = [
    {
      name: 'Accenture',
      avatar: '/assets/images/avatar-1.png',
      date: '2021 — 2024',
      text: 'Quality Engineering Analyst & Application Development Associate. Improved resolution speed by 30% and test execution efficiency by 20% for major telecommunication clients.'
    },
    {
      name: 'Cornell University',
      avatar: '/assets/images/avatar-2.png',
      date: 'Expected May 2026',
      text: 'Master of Engineering in Engineering Management (STEM). Deepening expertise in engineering leadership, strategy, and AI-enabled product management.'
    }
  ];

  const clients = [
    '/assets/images/logo-1-color.png',
    '/assets/images/logo-2-color.png',
    '/assets/images/logo-3-color.png',
    '/assets/images/logo-4-color.png',
    '/assets/images/logo-5-color.png',
    '/assets/images/logo-6-color.png'
  ];

  const openModal = (item) => {
    setSelectedTestimonial(item);
    setModalActive(true);
  };

  const closeModal = () => {
    setModalActive(false);
  };

  return (
    <article className={`about ${active ? 'active' : ''}`} data-page="about">
      <header>
        <h2 className="h2 article-title">About me</h2>
      </header>

      <section className="about-text">
        <p style={{ fontWeight: '600', color: 'var(--orange-yellow-crayola)' }}>
          Engineering-Trained | Product-Minded | AI-Focused
        </p>
        <p>
          I build AI-enabled products that move from ideas to execution and deliver real, measurable outcomes.
        </p>
        <p>
          I’m a Master’s student in Engineering Management at Cornell University with a computer science foundation and ~3 years of experience at Accenture, working at the intersection of product, engineering, and stakeholders. I’ve owned requirements, prioritized backlogs, driven Agile delivery, and tracked execution KPIs for customer-facing platforms in fast-moving, high-impact environments.
        </p>
        <p>
          What defines my approach is clarity under ambiguity, translating technical complexity into clear roadmaps, informed decisions, and accountable delivery, especially where AI, data, and product strategy intersect.
        </p>
      </section>

      <section className="service">
        <h3 className="h3 service-title">What I Do</h3>
        <ul className="service-list">
          {services.map((service, index) => (
            <li className="service-item" key={index}>
              <div className="service-icon-box">
                <img src={service.icon} alt={`${service.title} icon`} width="40" />
              </div>
              <div className="service-content-box">
                <h4 className="h4 service-item-title">{service.title}</h4>
                <p className="service-item-text">{service.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="testimonials">
        <h3 className="h3 testimonials-title">Career Highlights</h3>
        <ul className="testimonials-list has-scrollbar">
          {highlights.map((item, index) => (
            <li className="testimonials-item" key={index} onClick={() => openModal(item)}>
              <div className="content-card" data-testimonials-item>
                <figure className="testimonials-avatar-box">
                  <img src={item.avatar} alt={item.name} width="60" data-testimonials-avatar />
                </figure>
                <h4 className="h4 testimonials-item-title" data-testimonials-title>{item.name}</h4>
                <div className="testimonials-text" data-testimonials-text>
                  <p>{item.text}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {modalActive && selectedTestimonial && (
        <div className={`modal-container ${modalActive ? 'active' : ''}`} data-modal-container>
          <div className={`overlay ${modalActive ? 'active' : ''}`} onClick={closeModal} data-overlay></div>
          <section className="testimonials-modal">
            <button className="modal-close-btn" onClick={closeModal} data-modal-close-btn>
              <ion-icon name="close-outline"></ion-icon>
            </button>
            <div className="modal-img-wrapper">
              <figure className="modal-avatar-box">
                <img src={selectedTestimonial.avatar} alt={selectedTestimonial.name} width="80" data-modal-img />
              </figure>
              <img src="/assets/images/icon-quote.svg" alt="quote icon" />
            </div>
            <div className="modal-content">
              <h4 className="h3 modal-title" data-modal-title>{selectedTestimonial.name}</h4>
              <time dateTime="2024">{selectedTestimonial.date}</time>
              <div data-modal-text>
                <p>{selectedTestimonial.text}</p>
              </div>
            </div>
          </section>
        </div>
      )}

      <section className="clients">
        <h3 className="h3 clients-title">Certifications</h3>
        <ul className="clients-list has-scrollbar">
          {['CSPO', 'IBM PM', 'Google Data', 'Google BI'].map((cert, index) => (
            <li className="clients-item" key={index} style={{ textAlign: 'center', minWidth: '120px' }}>
              <div style={{ color: 'var(--orange-yellow-crayola)', fontSize: '14px', fontWeight: '600', padding: '10px', border: '1px solid var(--jet)', borderRadius: '10px' }}>
                {cert}
              </div>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
};

export default About;
