
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MessageCircle, Send, X, Minimize2 } from "lucide-react";

const ChatBox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    { type: "bot", text: "Hi! How can we help grow your laundry business today?" }
  ]);

  const handleSendMessage = () => {
    if (message.trim()) {
      setMessages(prev => [...prev, { type: "user", text: message }]);
      setMessage("");
      
      // Auto-reply (simulate bot response)
      setTimeout(() => {
        setMessages(prev => [...prev, { 
          type: "bot", 
          text: "Thanks for your message! We'll get back to you within 24 hours. For immediate assistance, please call us at +44 7391 142540." 
        }]);
      }, 1000);
    }
  };

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(true)}
          className="bg-primary hover:bg-primary/90 text-white rounded-full p-4 shadow-glow hover:shadow-premium transition-all duration-300 animate-bounce"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      </div>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className={`bg-white rounded-lg shadow-premium border border-primary/20 transition-all duration-300 ${
        isMinimized ? 'h-16 w-80' : 'h-96 w-80'
      }`}>
        {/* Header */}
        <div className="bg-primary text-white p-4 rounded-t-lg flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
              <MessageCircle className="h-4 w-4" />
            </div>
            <div>
              <div className="font-semibold text-sm">Fjord Growth</div>
              <div className="text-xs text-white/80">Online now</div>
            </div>
          </div>
          <div className="flex gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMinimized(!isMinimized)}
              className="text-white hover:bg-white/20 p-1"
            >
              <Minimize2 className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-white/20 p-1"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {!isMinimized && (
          <>
            {/* Messages */}
            <div className="h-64 p-4 overflow-y-auto bg-gray-50">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`mb-3 ${msg.type === 'user' ? 'text-right' : 'text-left'}`}
                >
                  <div
                    className={`inline-block max-w-[80%] p-2 rounded-lg text-sm ${
                      msg.type === 'user'
                        ? 'bg-primary text-white'
                        : 'bg-white border border-gray-200'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-gray-200">
              <div className="flex gap-2">
                <Input
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type your message..."
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  className="flex-1"
                />
                <Button
                  onClick={handleSendMessage}
                  className="bg-primary hover:bg-primary/90"
                  size="sm"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ChatBox;
