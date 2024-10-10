// src/components/NewsCard.jsx
import React from 'react';
import LazyLoad from 'react-lazyload';

const NewsCard = ({ article, onSave, isSaved }) => {
  const handleSaveClick = () => {
    onSave(article); // Call the onSave function passed as a prop
  };

  return (
    <div className="col-md-3 mb-4">
      <div className="card h-100 d-flex flex-column">
        <LazyLoad height={200} offset={100}>
          {article.multimedia && article.multimedia[0] && (
            <img
              src={`https://static01.nyt.com/${article.multimedia[0].url}`}
              className="card-img-top"
              alt={article.headline.main}
            />
          )}
        </LazyLoad>
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{article.headline.main}</h5>
          <p className="card-text">{article.abstract}</p>
          <button className={`btn ${isSaved ? 'btn-danger' : 'btn-primary'}`} onClick={handleSaveClick}>
            {isSaved ? 'Saved' : 'Save'}
          </button>
          <a href={article.web_url} className="btn btn-secondary mt-auto">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
