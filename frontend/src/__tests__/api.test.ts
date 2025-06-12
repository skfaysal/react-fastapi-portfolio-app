import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import axios from 'axios';
import { getPortfolioData, sendChatMessage } from '../services/api';
import { PortfolioData, ChatResponse } from '../types/api';

// Mock axios
vi.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('API Service', () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  describe('getPortfolioData', () => {
    it('should fetch portfolio data successfully', async () => {
      // Mock data
      const mockPortfolioData: PortfolioData = {
        personalInfo: {
          name: 'John Doe',
          title: 'Software Developer',
          location: 'New York',
          profileImage: '/profile.jpg',
          bio: 'Experienced software developer',
          socialLinks: {
            github: 'https://github.com/johndoe'
          }
        },
        education: [],
        certifications: [],
        experiences: [],
        skillGroups: [],
        projects: [],
        blogs: []
      };

      // Setup the mock response
      mockedAxios.get.mockResolvedValueOnce({ 
        data: { 
          success: true, 
          data: mockPortfolioData 
        } 
      });

      // Call the function
      const result = await getPortfolioData();

      // Assertions
      expect(mockedAxios.get).toHaveBeenCalledWith('/api/portfolio');
      expect(result).toEqual(mockPortfolioData);
    });

    it('should handle API error', async () => {
      // Mock error response
      const errorMessage = 'Network Error';
      mockedAxios.get.mockRejectedValueOnce(new Error(errorMessage));
      
      // Expect the function to throw an error
      await expect(getPortfolioData()).rejects.toThrow();
    });
  });

  describe('sendChatMessage', () => {
    it('should send chat message and receive response', async () => {
      // Mock data
      const mockQuery = 'Hello, how are you?';
      const mockResponse: ChatResponse = {
        response: 'I am doing well, thank you for asking!'
      };

      // Setup the mock response
      mockedAxios.post.mockResolvedValueOnce({
        data: {
          success: true,
          data: mockResponse
        }
      });

      // Call the function
      const result = await sendChatMessage(mockQuery);

      // Assertions
      expect(mockedAxios.post).toHaveBeenCalledWith('/chat/', { query: mockQuery });
      expect(result).toEqual(mockResponse);
    });

    it('should handle chat API error', async () => {
      // Mock error response
      const errorMessage = 'Service Unavailable';
      mockedAxios.post.mockRejectedValueOnce(new Error(errorMessage));
      
      // Expect the function to throw an error
      await expect(sendChatMessage('Hello')).rejects.toThrow();
    });
  });
});
