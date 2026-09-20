import { useState, useEffect } from 'react';
import { Review } from '../types';
import { initialMockData } from '../data/mockData';

const STORAGE_KEY = 'reviewmuse_data_v1';

export const useReviewStore = () => {
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      setReviews(JSON.parse(saved));
    } else {
      setReviews(initialMockData);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(initialMockData));
    }
  }, []);

  const saveReviews = (newReviews: Review[]) => {
    setReviews(newReviews);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newReviews));
  };

  const addReview = (review: Review) => {
    const updated = [...reviews, review];
    saveReviews(updated);
  };

  const updateReview = (updatedReview: Review) => {
    const updated = reviews.map(r => r.id === updatedReview.id ? updatedReview : r);
    saveReviews(updated);
  };

  return { reviews, addReview, updateReview };
};
