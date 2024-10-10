// src/redux/newsSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunk to fetch news
export const fetchNews = createAsyncThunk('news/fetchNews', async ({ category, page }) => {
  try {
    const response = await axios.get(`https://api.nytimes.com/svc/topstories/v2/${category}.json`, {
      params: {
        'api-key': process.env.REACT_APP_NYT_API_KEY, // Use the API key from .env
        'page': page,
      },
    });
    return {
      articles: response.data.results,
      totalPages: response.data.num_results, // Assuming total pages are provided by the API
    };
  } catch (error) {
    console.error('Error fetching news:', error);
    return {
      articles: [], // Return an empty array on error
      totalPages: 0,
    };
  }
});

const newsSlice = createSlice({
  name: 'news',
  initialState: {
    articles: [],
    savedArticles: [],
    totalPages: 0,
  },
  reducers: {
    saveArticle: (state, action) => {
      state.savedArticles.push(action.payload);
      localStorage.setItem('savedArticles', JSON.stringify(state.savedArticles));
    },
    // Additional reducers...
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNews.fulfilled, (state, action) => {
        state.articles = action.payload.articles;
        state.totalPages = Math.ceil(action.payload.totalPages / 10); // Assuming 10 articles per page
      });
  },
});

export const { saveArticle } = newsSlice.actions;
export default newsSlice.reducer;
