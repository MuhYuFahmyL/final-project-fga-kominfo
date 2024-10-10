// src/pages/SearchNews.jsx
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import NewsCard from '../components/NewsCard';

const SearchNews = () => {
  const articles = useSelector((state) => state.news.articles);
  const savedArticles = useSelector((state) => state.news.savedArticles);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredArticles = articles.filter(article =>
    article.headline.main.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <h1>Search Results</h1>
      <input
        type="text"
        className="form-control mb-4"
        placeholder="Search articles..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <div className="row">
        {filteredArticles.length === 0 ? (
          <div>No articles found.</div>
        ) : (
          filteredArticles.map((article) => (
            <NewsCard key={article._id} article={article} isSaved={savedArticles.some(savedArticle => savedArticle._id === article._id)} />
          ))
        )}
      </div>
    </div>
  );
};

export default SearchNews;
