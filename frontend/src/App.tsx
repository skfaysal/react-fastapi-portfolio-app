// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { useEffect, useState } from 'react'
import { Analytics } from '@vercel/analytics/react'
import ChatBot from './components/ChatBot/ChatBot'
import Experience from './components/Experience/Experience'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Landing from './components/Landing/Landing'
import ProjectList from './components/Projects/ProjectList'
import Skills from './components/Skills/Skills'
import Blogs from './components/Blogs'
import { getPersonalInfo, getMockPortfolioData } from './services/api'

function App() {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  
  // Debug section
  useEffect(() => {
    console.log("App component mounted");
    console.log("VITE_USE_MOCK_DATA:", import.meta.env.VITE_USE_MOCK_DATA);
    
    // Try to force mock data usage
    window.localStorage.setItem('useMockData', 'true');
    
    // Check if we can load the mock data
    try {
      const mockData = getMockPortfolioData();
      console.log("Mock data loaded successfully:", mockData);
      setLoading(false);
    } catch (err) {
      console.error("Error loading mock data:", err);
      setError(`Error loading mock data: ${err instanceof Error ? err.message : String(err)}`);
      setLoading(false);
    }
  }, []);

  // Original document title effect
  useEffect(() => {
    const updateDocumentTitle = async () => {
      try {
        const personalInfo = await getPersonalInfo();
        if (personalInfo.name) {
          document.title = `${personalInfo.name} - Portfolio`;
        }
      } catch (error) {
        console.error('Error setting document title:', error);
      }
    };

    updateDocumentTitle();
  }, []);

  // Show error message if something went wrong
  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md max-w-md">
          <h1 className="text-red-500 text-xl font-bold mb-4">Error</h1>
          <p className="text-gray-700">{error}</p>
          <button 
            onClick={() => window.location.reload()}
            className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
          >
            Reload Page
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <Header />
      <Landing />
      <Experience />
      <Skills />
      <ProjectList />
      <Blogs />
      <Footer />
      <ChatBot />
      <Analytics />
    </>
  );
}

export default App
