import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [chatLog, setChatLog] = useState<{ sender: string, text: string }[]>([]);
  const [loading, setLoading] = useState(false);
  const chatLogRef = useRef<HTMLDivElement>(null);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const sendMessage = async () => {
    if (message.trim() === '') return;
    
    setLoading(true);
    setChatLog((prevLog) => [...prevLog, { sender: 'You', text: message }]);

    try {
      const response = await axios.post('http://localhost:8000/chat/', {
        query: message,
      });

      if (response.data.response) {
        setChatLog((prevLog) => [...prevLog, { sender: 'Bot', text: response.data.response }]);
      }
    } catch (error) {
      setChatLog((prevLog) => [...prevLog, { sender: 'Bot', text: 'Something went wrong. Please try again later.' }]);
    }

    setMessage('');
    setLoading(false);
  };

  useEffect(() => {
    if (chatLogRef.current) {
      chatLogRef.current.scrollTop = chatLogRef.current.scrollHeight;
    }
  }, [chatLog]);

  return (
    <>
      <button
        onClick={toggleChat}
        className="fixed bottom-4 right-4 bg-gray-500 text-white w-14 h-14 rounded-full shadow-md flex items-center justify-center hover:bg-gray-700 transition duration-300 ease-in-out focus:outline-none"
      >
        <i className="fas fa-comments text-2xl"></i>
      </button>

      {/* Chat Box */}
      {isOpen && (
        <div className="fixed bottom-20 right-4 w-11/12 max-w-lg bg-white rounded-xl shadow-2xl flex flex-col p-4 border border-gray-300 md:max-w-xl lg:max-w-2xl z-50">
          {/* Chat Log */}
          <div ref={chatLogRef} className="flex-1 overflow-y-auto mb-4 space-y-4 max-h-[60vh] pr-4">
            {chatLog.map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.sender === 'You' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`${
                    msg.sender === 'You'
                      ? 'bg-gray-500 text-white ml-10'
                      : 'bg-gray-100 text-gray-800 mr-10'
                  } p-3 rounded-xl shadow-sm w-auto max-w-xs`}
                >
                  <p className="text-xs md:text-sm">{msg.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Input Area */}
          <div className="flex items-center border-t border-gray-200 pt-2">
            <textarea
              className="flex-1 p-2 border border-gray-300 rounded-2xl text-xs md:text-sm focus:outline-none resize-none"
              rows={2}
              value={message}
              onChange={handleInputChange}
              onKeyUp={handleKeyPress}
              placeholder="Ask me anything..."
            ></textarea>
            <button
              onClick={sendMessage}
              disabled={loading}
              className="ml-2 px-4 py-2 bg-gray-500 text-white rounded-lg shadow-sm focus:outline-none hover:bg-gray-700 transition-all duration-300 ease-in-out disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              {loading ? (
                <i className="fas fa-spinner fa-spin"></i>
              ) : (
                <i className="fas fa-paper-plane"></i>
              )}
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;