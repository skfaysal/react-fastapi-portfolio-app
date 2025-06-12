import React from 'react';

interface ErrorScreenProps {
  message: string;
  onRetry?: () => void;
}

const ErrorScreen: React.FC<ErrorScreenProps> = ({ message, onRetry }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-50">
      <div className="text-red-500 text-5xl mb-4">
        <i className="fas fa-exclamation-triangle"></i>
      </div>
      <h2 className="text-xl font-semibold mb-4 text-gray-800">Something went wrong</h2>
      <p className="text-gray-600 mb-8 text-center">{message}</p>
      {onRetry && (
        <button
          onClick={onRetry}
          className="px-6 py-3 bg-gray-700 text-white font-medium rounded-lg shadow-md hover:bg-gray-800 focus:outline-none"
        >
          <i className="fas fa-sync-alt mr-2"></i>
          Try Again
        </button>
      )}
    </div>
  );
};

export default ErrorScreen;
