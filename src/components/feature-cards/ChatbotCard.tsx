
import { useState } from "react";
import { Send, Smile, Heart, MessageCircle } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/ThemeProvider";
import { translations } from "@/utils/mockData";

interface Message {
  text: string;
  isBot: boolean;
  timestamp: Date;
}

export const ChatbotCard = () => {
  const { language } = useTheme();
  const t = translations[language];
  
  const [messages, setMessages] = useState<Message[]>([
    {
      text: language === 'en' 
        ? "Hello! I'm Inklu-Bot, your friendly assistant! How can I help you today? 💫" 
        : "Hallo! Ich bin Inklu-Bot, dein freundlicher Assistent! Wie kann ich dir heute helfen? 💫",
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
      const botResponsesEN = [
        "I'd love to help you find accessibility resources! 🌈",
        "Would you like to see some inclusion training modules? They're really helpful! ✨",
        "I can guide you through creating an inclusive job posting! Let's make it amazing! 💼",
        "Need info about workplace accommodations? I'm here for you! 💕"
      ];
      
      const botResponsesDE = [
        "Ich helfe dir gerne, Barrierefreiheitsressourcen zu finden! 🌈",
        "Möchtest du einige Inklusionstrainingsmodule sehen? Die sind wirklich hilfreich! ✨",
        "Ich kann dich durch die Erstellung einer inklusiven Stellenausschreibung führen! Lass uns sie fantastisch machen! 💼",
        "Brauchst du Informationen zu Arbeitsplatzanpassungen? Ich bin für dich da! 💕"
      ];
      
      const botResponses = language === 'en' ? botResponsesEN : botResponsesDE;
      
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
              <div className={`rounded-full p-2 flex-shrink-0 ${
                message.isBot 
                  ? "bg-gradient-to-r from-pink-400 to-purple-500 text-white" 
                  : "bg-secondary/10 text-secondary"
              }`}>
                {message.isBot ? 
                  <div className="flex items-center justify-center w-4 h-4">
                    {/* Cute bot face with CSS */}
                    <div className="relative w-4 h-4 rounded-full bg-white">
                      <div className="absolute top-1 left-0.5 w-1 h-1 rounded-full bg-purple-500"></div>
                      <div className="absolute top-1 right-0.5 w-1 h-1 rounded-full bg-purple-500"></div>
                      <div className="absolute bottom-1 w-2 h-0.5 rounded-full bg-purple-500 left-1"></div>
                    </div>
                  </div> : 
                  <MessageCircle className="h-4 w-4" />
                }
              </div>
              <Card className={`py-2 px-3 text-sm ${
                message.isBot 
                  ? "bg-gradient-to-r from-pink-50 to-purple-50 dark:from-pink-950/40 dark:to-purple-950/40 border-pink-100 dark:border-pink-800" 
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
          placeholder={language === 'en' ? "Ask me anything..." : "Frag mich etwas..."}
          className="flex-1 border-pink-200 dark:border-pink-800 focus:border-pink-300"
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <Button 
          size="icon" 
          onClick={handleSend}
          className="bg-gradient-to-r from-pink-400 to-purple-500 hover:from-pink-500 hover:to-purple-600 rounded-full"
        >
          <Heart className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};
