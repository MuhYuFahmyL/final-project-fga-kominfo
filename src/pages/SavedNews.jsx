// src/pages/SavedNews.jsx
import React from 'react';
import { useSelector } from 'react-redux';
import NewsCard from '../components/NewsCard';

const SavedNews = () => {
  const savedArticles = useSelector((state) => state.news.savedArticles);

  return (
    <div>
      <h1>Saved News</h1>
      <div className="row">
        {savedArticles.length === 0 ? (
          <div>No saved articles found.</div>
        ) : (
          savedArticles.map((article) => (
            <NewsCard key={article._id} article={article} />
          ))
        )}
      </div>
    </div>
  );
};

export default SavedNews;
