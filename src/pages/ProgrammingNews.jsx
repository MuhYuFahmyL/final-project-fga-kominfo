// src/pages/ProgrammingNews.jsx
import React, { useEffect, useState } from 'react';
import NewsCard from '../components/NewsCard';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNews, saveArticle } from '../redux/newsSlice';

const ProgrammingNews = () => {
  const dispatch = useDispatch();
  const articles = useSelector((state) => state.news.articles);
  const savedArticles = useSelector((state) => state.news.savedArticles);
  const totalPages = useSelector((state) => state.news.totalPages);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(fetchNews({ category: 'Programming', page }));
    };

    fetchData();
  }, [dispatch, page]);

  const handleSaveArticle = (article) => {
    dispatch(saveArticle(article));
  };

  const isSaved = (article) => savedArticles.some((savedArticle) => savedArticle._id === article._id);

  return (
    <div>
      <h1>Programming News</h1>
      <div className="row">
        {articles.map((article) => (
          <NewsCard key={article._id} article={article} onSave={handleSaveArticle} isSaved={isSaved(article)} />
        ))}
      </div>
      <div className="d-flex justify-content-between">
        <button disabled={page === 1} onClick={() => setPage(page - 1)}>Previous</button>
        <button disabled={page === totalPages} onClick={() => setPage(page + 1)}>Next</button>
      </div>
    </div>
  );
};

export default ProgrammingNews;
