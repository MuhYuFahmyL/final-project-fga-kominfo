// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import IndonesiaNews from './pages/IndonesiaNews';
import ProgrammingNews from './pages/ProgrammingNews';
import SavedNews from './pages/SavedNews';
import SearchNews from './pages/SearchNews';
import { Provider } from 'react-redux';
import store from './redux/store';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <Provider store={store}>
      <Router>
        <NavBar onSearch={handleSearch} />
        <div className="container mt-4">
          <Routes>
            <Route path="/" element={<IndonesiaNews />} />
            <Route path="/programming" element={<ProgrammingNews />} />
            <Route path="/saved" element={<SavedNews />} />
            <Route path="/search" element={<SearchNews />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
