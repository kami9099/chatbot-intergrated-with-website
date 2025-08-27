import React from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';

interface ChatbotToggleProps {
  onClick: () => void;
  isOpen: boolean;
}

const ChatbotToggle: React.FC<ChatbotToggleProps> = ({ onClick, isOpen }) => {
  if (isOpen) return null;

  return (
    <Button
      onClick={onClick}
      size="lg"
      className="fixed bottom-4 right-4 w-14 h-14 rounded-full bg-tech-gradient hover:opacity-90 shadow-glow animate-pulse-glow z-40"
    >
      <MessageCircle className="w-6 h-6 text-primary-foreground" />
    </Button>
  );
};

export default ChatbotToggle;