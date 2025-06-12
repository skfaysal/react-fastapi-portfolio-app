import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import ChatBot from '../../components/ChatBot/ChatBot';
import * as apiService from '../../services/api';

// Mock the API service
vi.mock('../../services/api', () => ({
  sendChatMessage: vi.fn()
}));

describe('ChatBot Component', () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  it('should render the chat button', () => {
    render(<ChatBot />);
    const chatButton = screen.getByRole('button');
    expect(chatButton).toBeInTheDocument();
    expect(chatButton.querySelector('i.fa-comments')).toBeInTheDocument();
  });

  it('should open chat window when button is clicked', () => {
    render(<ChatBot />);
    const chatButton = screen.getByRole('button');
    
    // Initially the chat window should be hidden
    expect(screen.queryByPlaceholderText('Ask me anything...')).not.toBeInTheDocument();
    
    // Click the chat button to open the chat window
    fireEvent.click(chatButton);
    
    // Now the chat window should be visible
    expect(screen.getByPlaceholderText('Ask me anything...')).toBeInTheDocument();
  });

  it('should send message and display response', async () => {
    // Mock the API response
    vi.mocked(apiService.sendChatMessage).mockResolvedValueOnce({
      response: 'Hello! How can I help you?'
    });

    render(<ChatBot />);
    
    // Open the chat window
    fireEvent.click(screen.getByRole('button'));
    
    // Type a message
    const textarea = screen.getByPlaceholderText('Ask me anything...');
    fireEvent.change(textarea, { target: { value: 'Hi there' } });
    
    // Send the message
    const sendButton = screen.getByRole('button', { name: '' });
    fireEvent.click(sendButton);
    
    // Check if the user message is displayed
    expect(screen.getByText('Hi there')).toBeInTheDocument();
    
    // Wait for the response
    await waitFor(() => {
      expect(screen.getByText('Hello! How can I help you?')).toBeInTheDocument();
    });
    
    // Verify API was called with the correct parameters
    expect(apiService.sendChatMessage).toHaveBeenCalledWith('Hi there');
  });

  it('should handle API errors gracefully', async () => {
    // Mock API error
    vi.mocked(apiService.sendChatMessage).mockRejectedValueOnce(new Error('API Error'));

    render(<ChatBot />);
    
    // Open the chat window
    fireEvent.click(screen.getByRole('button'));
    
    // Type and send a message
    const textarea = screen.getByPlaceholderText('Ask me anything...');
    fireEvent.change(textarea, { target: { value: 'Hi there' } });
    fireEvent.click(screen.getByRole('button', { name: '' }));
    
    // Wait for the error message
    await waitFor(() => {
      expect(screen.getByText('Something went wrong. Please try again later.')).toBeInTheDocument();
    });
  });

  it('should not send empty messages', async () => {
    render(<ChatBot />);
    
    // Open the chat window
    fireEvent.click(screen.getByRole('button'));
    
    // Try to send an empty message
    fireEvent.click(screen.getByRole('button', { name: '' }));
    
    // Verify API was not called
    expect(apiService.sendChatMessage).not.toHaveBeenCalled();
  });
});
