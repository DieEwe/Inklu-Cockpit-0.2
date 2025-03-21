
import { useState } from "react";
import { Bot, Send, User } from "lucide-react";
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
      text: "Hello! I'm Inklu-Bot, your digital assistant. How can I help you today?",
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
        "I can help you find accessibility resources for your workplace.",
        "Would you like me to show you some inclusion training modules?",
        "I can guide you through creating an inclusive job posting.",
        "Let me know if you need information about workplace accommodations."
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
    <div className="flex flex-col h-60">
      <div className="flex-1 overflow-y-auto mb-3 space-y-3">
        {messages.map((message, index) => (
          <div 
            key={index} 
            className={`flex ${message.isBot ? "justify-start" : "justify-end"}`}
          >
            <div className={`flex max-w-[80%] gap-2 ${message.isBot ? "flex-row" : "flex-row-reverse"}`}>
              <div className={`rounded-full p-1.5 flex-shrink-0 ${message.isBot ? "bg-primary/10 text-primary" : "bg-secondary/10 text-secondary"}`}>
                {message.isBot ? <Bot className="h-4 w-4" /> : <User className="h-4 w-4" />}
              </div>
              <Card className={`py-2 px-3 text-sm ${message.isBot ? "bg-muted" : "bg-primary/10"}`}>
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
          placeholder="Ask a question..."
          className="flex-1"
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <Button size="icon" onClick={handleSend}>
          <Send className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};
