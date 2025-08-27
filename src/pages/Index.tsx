import React, { useState, useEffect } from 'react';
import TechHavenHero from '@/components/TechHavenHero';
import Chatbot from '@/components/Chatbot';
import ChatbotToggle from '@/components/ChatbotToggle';

const Index = () => {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  // Open chatbot automatically when user visits the site
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsChatbotOpen(true);
    }, 2000); // Open after 2 seconds to let the page load

    return () => clearTimeout(timer);
  }, []);

  const handleChatbotToggle = () => {
    setIsChatbotOpen(!isChatbotOpen);
  };

  const handleChatbotClose = () => {
    setIsChatbotOpen(false);
  };

  return (
    <div className="relative">
      <TechHavenHero />
      <ChatbotToggle onClick={handleChatbotToggle} isOpen={isChatbotOpen} />
      <Chatbot isOpen={isChatbotOpen} onClose={handleChatbotClose} />
    </div>
  );
};

export default Index;
