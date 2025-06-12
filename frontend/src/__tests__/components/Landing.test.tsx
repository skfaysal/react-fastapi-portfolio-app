import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import Landing from '../../components/Landing/Landing';
import { PortfolioProvider } from '../../context/PortfolioContext';
import * as portfolioHook from '../../context/PortfolioContext';

// Mock the usePortfolio hook
vi.mock('../../context/PortfolioContext', async () => {
  const actual = await vi.importActual('../../context/PortfolioContext');
  return {
    ...actual,
    usePortfolio: vi.fn()
  };
});

describe('Landing Component', () => {
  it('should not render when portfolio data is null', () => {
    // Mock the usePortfolio hook to return null data
    vi.mocked(portfolioHook.usePortfolio).mockReturnValue({
      portfolioData: null,
      loading: false,
      error: null,
      refreshData: vi.fn()
    });

    const { container } = render(<Landing />);
    expect(container.firstChild).toBeNull();
  });

  it('should render personal info correctly', () => {
    // Mock portfolio data
    const mockPortfolioData = {
      personalInfo: {
        name: 'John Doe',
        title: 'Software Engineer',
        location: 'New York',
        profileImage: '/profile.jpg',
        bio: 'Experienced software engineer',
        socialLinks: {
          github: 'https://github.com/johndoe',
          linkedin: 'https://linkedin.com/in/johndoe',
          cv: '/resume.pdf',
          email: 'mailto:john@example.com'
        }
      },
      education: [{
        degree: 'BS Computer Science',
        institution: 'MIT',
        startDate: '2015',
        endDate: '2019',
        location: 'Cambridge, MA',
        thesis: 'Advanced Algorithms'
      }],
      certifications: [{
        title: 'AWS Certified Developer',
        issuer: 'AWS',
        iconUrl: '/aws-icon.png',
        url: 'https://aws.com/cert'
      }],
      experiences: [],
      skillGroups: [],
      projects: [],
      blogs: []
    };

    // Mock the usePortfolio hook
    vi.mocked(portfolioHook.usePortfolio).mockReturnValue({
      portfolioData: mockPortfolioData,
      loading: false,
      error: null,
      refreshData: vi.fn()
    });

    render(<Landing />);
    
    // Check if the personal info is rendered
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('Software Engineer')).toBeInTheDocument();
    expect(screen.getByText('New York')).toBeInTheDocument();
    expect(screen.getByText('Experienced software engineer')).toBeInTheDocument();
    
    // Check if education is rendered
    expect(screen.getByText('BS Computer Science')).toBeInTheDocument();
    expect(screen.getByText('MIT')).toBeInTheDocument();
    expect(screen.getByText('2015 – 2019')).toBeInTheDocument();
    expect(screen.getByText('Thesis: "Advanced Algorithms"')).toBeInTheDocument();
    
    // Check if certification is rendered
    expect(screen.getByText('AWS Certified Developer')).toBeInTheDocument();
    
    // Check for social links
    const links = screen.getAllByRole('link');
    const urls = links.map(link => link.getAttribute('href'));
    
    expect(urls).toContain('https://github.com/johndoe');
    expect(urls).toContain('https://linkedin.com/in/johndoe');
    expect(urls).toContain('/resume.pdf');
    expect(urls).toContain('mailto:john@example.com');
  });
});
