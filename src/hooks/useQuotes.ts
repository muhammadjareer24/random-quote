import React, { useEffect, useState } from 'react';
import { Quote } from '../types';
import API_URL from '../config/api';

const useQuotes = () => {
  const [quotes, setQuotes] = useState<Quote[]>([]);

  const [loading, setLoading] = useState<boolean>(true);

  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchQuotes = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();

        setQuotes(data.quotes);
      } catch (error) {
        setError('Error in fetching quotes.');
      } finally {
        setLoading(false);
      }
    };

    fetchQuotes();
  }, []);

  return { quotes, loading, error };
};

export default useQuotes;
