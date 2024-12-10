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

  // const handleSendMessage = useCallback((message) => {
  //   const newMessage = {
  //     id: Date.now(),
  //     user: "You",
  //     text: message.text || "",
  //     image: message.image || null,
  //     timestamp: new Date(),
  //   };

  //   setChatHistory((prev) => [...prev, newMessage]);
  //   setIsTyping(true);

  //   // Simulate AI response
  //   setTimeout(() => {
  //     const aiResponse = {
  //       id: Date.now() + 1,
  //       user: "AI",
  //       text: `You sent: "${message.text || "an image"}". Here's a response.`,
  //       timestamp: new Date(),
  //     };

  //     setChatHistory((prev) => [...prev, aiResponse]);
  //     setIsTyping(false);
  //   }, 1000);
  // }, []);
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
      // Prepare form data
      const formData = new FormData();
      if (message.image) {
        // Convert base64 image to a Blob
        const response = await fetch(message.image);
        const blob = await response.blob();
        formData.append("image", blob, "uploaded_image.jpg");
      }
      formData.append("query", message.text || "");

      // Send POST request
      const res = await fetch("http://127.0.0.1:5000/chat", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      // Add AI response to chat history
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

  const handleImageUpload = useCallback((e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const imageMessage = {
          id: Date.now(),
          user: "You",
          image: event.target.result,
          timestamp: new Date(),
        };
        setChatHistory((prev) => [...prev, imageMessage]);
      };
      reader.readAsDataURL(file);
    }
  }, []);

  const handleEmojiSelect = useCallback(() => {
    // Placeholder for emoji selection functionality
    console.log("Emoji selection triggered");
  }, []);

  // Scroll to bottom of chat when messages change
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

            {/* Chat History */}
            {/* <div className="space-y-4 pb-24">
              {chatHistory.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${
                    msg.user === "You" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`
                      max-w-xl 
                      p-3 
                      rounded-lg 
                      ${
                        msg.user === "You"
                          ? "bg-indigo-500 text-white"
                          : "bg-gray-200 text-gray-800"
                      }
                    `}
                  >
                    {msg.image ? (
                      <img
                        src={msg.image}
                        alt="Uploaded"
                        className="max-w-full rounded-md"
                      />
                    ) : (
                      msg.message
                    )}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-gray-200 p-3 rounded-lg">Typing...</div>
                </div>
              )}
              <div ref={chatEndRef} />
            </div> */}
            {/* Chat History */}
            <div className="space-y-4 pb-24">
              {chatHistory.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${
                    msg.user === "You" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-xl p-3 rounded-lg ${
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
                        className="max-w-full rounded-md mb-2"
                      />
                    )}

                    {/* Render text if exists */}
                    {msg.text && <p>{msg.text}</p>}
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-gray-200 p-3 rounded-lg">Typing...</div>
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
                  handleImageUpload={handleImageUpload}
                  handleEmojiSelect={handleEmojiSelect}
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
