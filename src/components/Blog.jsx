import React from 'react';

const Blog = ({ active }) => {
  const blogs = [
    {
      title: 'Design conferences in 2022',
      category: 'Design',
      date: 'Fab 23, 2022',
      image: '/assets/images/blog-1.jpg',
      text: 'Veritatis et quasi architecto beatae vitae dicta sunt, explicabo.'
    },
    {
      title: 'Best fonts every designer',
      category: 'Design',
      date: 'Fab 23, 2022',
      image: '/assets/images/blog-2.jpg',
      text: 'Sed ut perspiciatis, nam libero tempore, cum soluta nobis est eligendi.'
    },
    {
      title: 'Design digest #80',
      category: 'Design',
      date: 'Fab 23, 2022',
      image: '/assets/images/blog-3.jpg',
      text: 'Excepteur sint occaecat cupidatat no proident, quis nostrum exercitationem ullam corporis suscipit.'
    },
    {
      title: 'UI interactions of the week',
      category: 'Design',
      date: 'Fab 23, 2022',
      image: '/assets/images/blog-4.jpg',
      text: 'Enim ad minim veniam, consectetur adipiscing elit, quis nostrud exercitation ullamco laboris nisi.'
    },
    {
      title: 'The forgotten art of spacing',
      category: 'Design',
      date: 'Fab 23, 2022',
      image: '/assets/images/blog-5.jpg',
      text: 'Maxime placeat, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      title: 'Design digest #79',
      category: 'Design',
      date: 'Fab 23, 2022',
      image: '/assets/images/blog-6.jpg',
      text: 'Optio cumque nihil impedit uo minus quod maxime placeat, velit esse cillum.'
    }
  ];

  return (
    <article className={`blog ${active ? 'active' : ''}`} data-page="blog">
      <header>
        <h2 className="h2 article-title">Blog</h2>
      </header>

      <section className="blog-posts">
        <ul className="blog-posts-list">
          {blogs.map((blog, index) => (
            <li className="blog-post-item" key={index}>
              <a href="#">
                <figure className="blog-banner-box">
                  <img src={blog.image} alt={blog.title} loading="lazy" />
                </figure>
                <div className="blog-content">
                  <div className="blog-meta">
                    <p className="blog-category">{blog.category}</p>
                    <span className="dot"></span>
                    <time dateTime="2022-02-23">{blog.date}</time>
                  </div>
                  <h3 className="h3 blog-item-title">{blog.title}</h3>
                  <p className="blog-text">{blog.text}</p>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
};

export default Blog;
