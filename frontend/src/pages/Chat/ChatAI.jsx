import * as React from "react";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import { useState, useCallback, useRef, useEffect } from "react";
import ChatInput from "./ChatInput";
import Sidebar from "./Sidebar";
import Header from "./Header";
import ChatSuggestions from "./ChatSuggestions";

function ChatAI() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [chatHistory, setChatHistory] = useState([]);
  const [message, setMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef(null);

  const handleSendMessage = useCallback(async (message) => {
    const newMessage = {
      id: Date.now(),
      user: "You",
      text: message.text || "",
      image: message.image || null,
      timestamp: new Date(),
    };

    setChatHistory((prev) => [...prev, newMessage]);
    setIsTyping(true);

    try {
      const formData = new FormData();
      if (message.image) {
        const response = await fetch(message.image);
        const blob = await response.blob();
        formData.append("image", blob, "uploaded_image.jpg");
      }
      formData.append("query", message.text || "");

      const res = await fetch("http://127.0.0.1:5000/chat", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      const aiResponse = {
        id: Date.now() + 1,
        user: "AI",
        text: data.response || "No response from AI.",
        timestamp: new Date(),
      };
      setChatHistory((prev) => [...prev, aiResponse]);
    } catch (error) {
      console.error("Error:", error);
      const errorResponse = {
        id: Date.now() + 1,
        user: "AI",
        text: "Failed to get a response. Please try again.",
        timestamp: new Date(),
      };
      setChatHistory((prev) => [...prev, errorResponse]);
    } finally {
      setIsTyping(false);
    }
  }, []);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatHistory, isTyping]);

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      <div className="flex-1 flex flex-col">
        <Header />

        <main className="flex-1 p-6 bg-gray-50 overflow-y-auto">
          <div className="max-w-4xl mx-auto space-y-6">
            {chatHistory.length === 0 && (
              <div className="p-6 bg-white rounded-lg shadow">
                <h1 className="text-2xl font-semibold text-gray-800 mb-4">
                  What can I help with?
                </h1>
                <ChatSuggestions />
              </div>
            )}

            <div className="space-y-4 pb-24">
              {chatHistory.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${
                    msg.user === "You" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-3xl p-4 rounded-lg ${
                      msg.user === "You"
                        ? "bg-indigo-500 text-white"
                        : "bg-gray-200 text-gray-800"
                    }`}
                  >
                    {/* Render image if exists */}
                    {msg.image && (
                      <img
                        src={msg.image}
                        alt="Uploaded"
                        className="max-w-[500px] max-h-[300px] rounded-md mb-2"
                      />
                    )}

                    {/* Render text if exists */}
                    {msg.text && <p className="text-lg">{msg.text}</p>}
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex justify-start ">
                  <Box sx={{ width: 600 }}>
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />
                    <Skeleton animation="wave" />
                    <Skeleton animation={false} />
                  </Box>
                </div>
              )}

              <div ref={chatEndRef} />
            </div>

            <div className="fixed bottom-0 left-0 right-0 p-6 shadow-t">
              <div className="max-w-4xl mx-auto">
                <ChatInput
                  message={message}
                  setMessage={setMessage}
                  handleSendMessage={handleSendMessage}
                />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default ChatAI;
