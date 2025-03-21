
import { useState } from "react";
import { Bot, Send, Smile, Heart, MessageCircle } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface Message {
  text: string;
  isBot: boolean;
  timestamp: Date;
}

export const ChatbotCard = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      text: "Hello! I'm Inklu-Bot, your friendly assistant! How can I help you today? 💫",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    
    // Add user message
    const userMessage: Message = {
      text: input,
      isBot: false,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    
    // Simulate bot response after a delay
    setTimeout(() => {
      const botResponses = [
        "I'd love to help you find accessibility resources! 🌈",
        "Would you like to see some inclusion training modules? They're really helpful! ✨",
        "I can guide you through creating an inclusive job posting! Let's make it amazing! 💼",
        "Need info about workplace accommodations? I'm here for you! 💕"
      ];
      
      const botMessage: Message = {
        text: botResponses[Math.floor(Math.random() * botResponses.length)],
        isBot: true,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botMessage]);
    }, 1000);
  };

  return (
    <div className="flex flex-col h-64">
      <div className="flex-1 overflow-y-auto mb-3 space-y-3">
        {messages.map((message, index) => (
          <div 
            key={index} 
            className={`flex ${message.isBot ? "justify-start" : "justify-end"}`}
          >
            <div className={`flex max-w-[80%] gap-2 ${message.isBot ? "flex-row" : "flex-row-reverse"}`}>
              <div className={`rounded-full p-1.5 flex-shrink-0 ${
                message.isBot 
                  ? "bg-gradient-to-r from-indigo-400 to-purple-500 text-white" 
                  : "bg-secondary/10 text-secondary"
              }`}>
                {message.isBot ? 
                  <Smile className="h-4 w-4" /> : 
                  <MessageCircle className="h-4 w-4" />
                }
              </div>
              <Card className={`py-2 px-3 text-sm ${
                message.isBot 
                  ? "bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950/40 dark:to-purple-950/40 border-indigo-100 dark:border-indigo-800" 
                  : "bg-primary/10"
              }`}>
                {message.text}
              </Card>
            </div>
          </div>
        ))}
      </div>
      
      <div className="flex gap-2">
        <Input 
          value={input} 
          onChange={(e) => setInput(e.target.value)} 
          placeholder="Ask me anything..."
          className="flex-1 border-indigo-200 dark:border-indigo-800 focus:border-indigo-300"
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <Button 
          size="icon" 
          onClick={handleSend}
          className="bg-gradient-to-r from-indigo-400 to-purple-500 hover:from-indigo-500 hover:to-purple-600"
        >
          <Heart className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};
