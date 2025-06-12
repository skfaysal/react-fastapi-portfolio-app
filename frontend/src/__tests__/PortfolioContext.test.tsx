import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import { PortfolioProvider, usePortfolio } from '../context/PortfolioContext';
import * as apiService from '../services/api';

// Mock the API service
vi.mock('../services/api', () => ({
  getPortfolioData: vi.fn(),
  getMockPortfolioData: vi.fn()
}));

// Test component to access the context
const TestComponent = () => {
  const { portfolioData, loading, error } = usePortfolio();
  
  if (loading) return <div data-testid="loading">Loading...</div>;
  if (error) return <div data-testid="error">{error}</div>;
  if (!portfolioData) return <div data-testid="no-data">No data</div>;
  
  return <div data-testid="name">{portfolioData.personalInfo.name}</div>;
};

describe('PortfolioContext', () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('should show loading state initially', () => {
    // Mock the API call to delay resolution
    vi.mocked(apiService.getPortfolioData).mockImplementation(() => 
      new Promise(resolve => setTimeout(() => resolve({
        personalInfo: { name: 'John Doe', title: '', location: '', profileImage: '', bio: '', socialLinks: {} },
        education: [],
        certifications: [],
        experiences: [],
        skillGroups: [],
        projects: [],
        blogs: []
      }), 100))
    );

    render(
      <PortfolioProvider>
        <TestComponent />
      </PortfolioProvider>
    );

    expect(screen.getByTestId('loading')).toBeInTheDocument();
  });

  it('should render portfolio data when loaded', async () => {
    // Mock successful API response
    vi.mocked(apiService.getPortfolioData).mockResolvedValueOnce({
      personalInfo: { name: 'John Doe', title: '', location: '', profileImage: '', bio: '', socialLinks: {} },
      education: [],
      certifications: [],
      experiences: [],
      skillGroups: [],
      projects: [],
      blogs: []
    });

    render(
      <PortfolioProvider>
        <TestComponent />
      </PortfolioProvider>
    );

    await waitFor(() => {
      expect(screen.getByTestId('name')).toBeInTheDocument();
      expect(screen.getByTestId('name').textContent).toBe('John Doe');
    });
  });

  it('should show error when API fails', async () => {
    // Mock API error
    const errorMessage = 'Failed to fetch data';
    vi.mocked(apiService.getPortfolioData).mockRejectedValueOnce(new Error(errorMessage));
    vi.mocked(apiService.getMockPortfolioData).mockImplementation(() => {
      throw new Error(errorMessage);
    });

    render(
      <PortfolioProvider>
        <TestComponent />
      </PortfolioProvider>
    );

    await waitFor(() => {
      expect(screen.getByTestId('error')).toBeInTheDocument();
      expect(screen.getByTestId('error').textContent).toBe(errorMessage);
    });
  });

  it('should use mock data when useMockData is true', async () => {
    // Mock mock data
    vi.mocked(apiService.getMockPortfolioData).mockReturnValueOnce({
      personalInfo: { name: 'Mock User', title: '', location: '', profileImage: '', bio: '', socialLinks: {} },
      education: [],
      certifications: [],
      experiences: [],
      skillGroups: [],
      projects: [],
      blogs: []
    });

    render(
      <PortfolioProvider useMockData={true}>
        <TestComponent />
      </PortfolioProvider>
    );

    await waitFor(() => {
      expect(screen.getByTestId('name')).toBeInTheDocument();
      expect(screen.getByTestId('name').textContent).toBe('Mock User');
    });

    // Verify getPortfolioData was not called
    expect(apiService.getPortfolioData).not.toHaveBeenCalled();
    expect(apiService.getMockPortfolioData).toHaveBeenCalled();
  });
});
