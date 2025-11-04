import React from 'react';
import Top100 from './Top100';
import { Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import LatestMovies from './LatestMovies';
import News from './News';
import AboutPage from './AboutPage';


export default function PageContent() {
  return (
    <main className="flex-grow">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/top100" element={<Top100 />} />
        <Route path="/latest" element={<LatestMovies />} />
        <Route path="/news" element={<News />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </main>
  );
}
