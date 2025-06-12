import React from "react";
import { usePortfolio } from "../../context/PortfolioContext";

const Footer: React.FC = () => {
  const { portfolioData } = usePortfolio();
  
  // Get the name from portfolio data, or fallback to a generic message
  const name = portfolioData?.personalInfo?.name || 'Portfolio';
  const year = new Date().getFullYear();

  return (
    <footer className="bg-white py-4">
      <div className="container mx-auto px-5 text-center">
        {/* Footer Information */}
        <div className="">
          <p className="text-gray-600">
            © {year} {name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
