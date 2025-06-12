import React, { createContext, useContext, ReactNode, useState, useEffect } from 'react';
import { PortfolioData } from '../types/api';
import { getPortfolioData, getMockPortfolioData } from '../services/api';

interface PortfolioContextProps {
  portfolioData: PortfolioData | null;
  loading: boolean;
  error: string | null;
  refreshData: () => Promise<void>;
}

const PortfolioContext = createContext<PortfolioContextProps | undefined>(undefined);

export const usePortfolio = () => {
  const context = useContext(PortfolioContext);
  if (context === undefined) {
    throw new Error('usePortfolio must be used within a PortfolioProvider');
  }
  return context;
};

interface PortfolioProviderProps {
  children: ReactNode;
  useMockData?: boolean;
  refreshInterval?: number; // in milliseconds
}

export const PortfolioProvider: React.FC<PortfolioProviderProps> = ({ 
  children, 
  useMockData = false,
  refreshInterval = 30 * 60 * 1000 // 30 minutes default
}) => {
  const [portfolioData, setPortfolioData] = useState<PortfolioData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [lastFetched, setLastFetched] = useState<number>(0);

  const fetchData = async (forceRefresh = false) => {
    try {
      setLoading(true);
      setError(null);
      
      let data: PortfolioData;
      
      if (useMockData) {
        data = getMockPortfolioData();
      } else {
        try {
          data = await getPortfolioData(forceRefresh);
        } catch (err) {
          console.warn('Failed to fetch from API, falling back to mock data');
          data = getMockPortfolioData();
        }
      }
      
      setPortfolioData(data);
      setLastFetched(Date.now());
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred');
      console.error('Error fetching portfolio data:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [useMockData]);
  
  // Set up auto-refresh if not using mock data
  useEffect(() => {
    if (useMockData || !refreshInterval) return;
    
    const intervalId = setInterval(() => {
      fetchData(true); // Force refresh on interval
    }, refreshInterval);
    
    return () => clearInterval(intervalId);
  }, [useMockData, refreshInterval]);

  const refreshData = async () => {
    await fetchData(true);
  };

  return (
    <PortfolioContext.Provider value={{ portfolioData, loading, error, refreshData }}>
      {children}
    </PortfolioContext.Provider>
  );
};
