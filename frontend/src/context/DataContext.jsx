import React, { createContext, useContext, useState, useEffect } from 'react';
import { useTheme } from './ThemeContext';
import * as portfolioService from '../services/portfolioService';

const DataContext = createContext();

export function DataProvider({ children }) {
  const { activePreset } = useTheme();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    setLoading(true);

    async function loadAllData() {
      try {
        const [
          config,
          profile,
          stats,
          skillCategories,
          projects,
          experience,
          education,
          services,
          testimonials,
          blog,
          contact
        ] = await Promise.all([
          portfolioService.getPortfolioConfig(activePreset),
          portfolioService.getProfile(activePreset),
          portfolioService.getStats(),
          portfolioService.getSkillCategories(),
          portfolioService.getProjects(),
          portfolioService.getExperience(),
          portfolioService.getEducation(),
          portfolioService.getServices(),
          portfolioService.getTestimonials(),
          portfolioService.getBlogPosts(),
          portfolioService.getContactConfig()
        ]);

        if (isMounted) {
          setData({
            config,
            profile,
            stats,
            skillCategories,
            projects,
            experience,
            education,
            services,
            testimonials,
            blog,
            contact
          });
          setLoading(false);
        }
      } catch (err) {
        console.error('Error loading portfolio data:', err);
        if (isMounted) {
          setError('Failed to load portfolio data');
          setLoading(false);
        }
      }
    }

    loadAllData();

    return () => {
      isMounted = false;
    };
  }, [activePreset]);

  return (
    <DataContext.Provider value={{ data, loading, error, activePreset }}>
      {children}
    </DataContext.Provider>
  );
}

export function usePortfolioData() {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('usePortfolioData must be used within a DataProvider');
  }
  return context;
}
