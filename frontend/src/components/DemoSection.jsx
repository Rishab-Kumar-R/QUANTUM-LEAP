/* eslint-disable react/prop-types */
import { useState, useEffect, useCallback, useRef } from "react";
import { Command, Sparkles, MessageSquare, Upload } from "lucide-react";

const DEMO_MESSAGES = [
  { user: false, message: "What do you see in this image?" },
  {
    user: true,
    message:
      "I can see a geometric pattern with a gradient effect. The shape appears to be floating and emitting a subtle glow, suggesting it might be a representation of quantum phenomena or advanced AI visualization.",
  },
  { user: false, message: "Could you explain the pattern in more detail?" },
  {
    user: true,
    message:
      "The pattern consists of a series of intersecting lines and circles that create a fluid-like motion, resembling the visual output of an advanced neural network at work.",
  },
];

const DemoSection = () => {
  const [stage, setStage] = useState(0);
  // eslint-disable-next-line no-unused-vars
  const [isLoading, setIsLoading] = useState(false);
  const [chatMessages, setChatMessages] = useState([]);
  const [iteration, setIteration] = useState(0);
  const isFirstRun = useRef(true);

  const typeMessage = useCallback(async (message) => {
    return new Promise((resolve) => {
      let currentMessage = "";
      setChatMessages((prev) => [...prev, { ...message, message: "" }]);

      const typeChar = async (index) => {
        if (index >= message.message.length) {
          resolve();
          return;
        }

        currentMessage += message.message[index];
        setChatMessages((prev) => {
          const updatedMessages = [...prev];
          updatedMessages[updatedMessages.length - 1] = {
            ...message,
            message: currentMessage,
          };
          return updatedMessages;
        });

        setTimeout(() => typeChar(index + 1), 30);
      };

      typeChar(0);
    });
  }, []);

  const resetDemo = useCallback(() => {
    setStage(0);
    setChatMessages([]);
    setIsLoading(false);
    setIteration((prev) => prev + 1);
  }, []);

  const runDemoSequence = useCallback(
    async (mounted) => {
      if (!mounted) return;

      setIsLoading(true);

      try {
        // Stage 1: Initial Upload UI
        await new Promise((r) => setTimeout(r, 3000));
        if (!mounted) return;
        setStage(1);

        // Stage 2: Show sparkle effect
        await new Promise((r) => setTimeout(r, 2000));
        if (!mounted) return;
        setStage(2);

        // Stage 3: First question
        await new Promise((r) => setTimeout(r, 2000));
        if (!mounted) return;
        await typeMessage(DEMO_MESSAGES[0]);

        // Stage 4: First Response
        await new Promise((r) => setTimeout(r, 1000));
        if (!mounted) return;
        setStage(3);
        await typeMessage(DEMO_MESSAGES[1]);

        // Stage 5: Follow-up
        await new Promise((r) => setTimeout(r, 1000));
        if (!mounted) return;
        setStage(4);
        await typeMessage(DEMO_MESSAGES[2]);

        // Stage 6: Final Response
        await new Promise((r) => setTimeout(r, 1000));
        if (!mounted) return;
        setStage(5);
        await typeMessage(DEMO_MESSAGES[3]);

        await new Promise((r) => setTimeout(r, 3000));
        if (!mounted) return;

        resetDemo();
      } catch (error) {
        console.error("Demo sequence error:", error);
      } finally {
        if (mounted) {
          setIsLoading(false);
        }
      }
    },
    [typeMessage, resetDemo]
  );

  useEffect(() => {
    if (!isFirstRun.current && iteration === 0) return;

    let mounted = true;
    isFirstRun.current = false;

    runDemoSequence(mounted);

    return () => {
      mounted = false;
    };
  }, [runDemoSequence, iteration]);

  const MessageBubble = ({ message, user }) => (
    <div className="flex items-start space-x-3">
      <div
        className={`flex-shrink-0 rounded-full p-2 ${
          user ? "bg-indigo-600" : "bg-indigo-50"
        }`}
      >
        {user ? (
          <Command className="h-4 w-4 text-white" />
        ) : (
          <MessageSquare className="h-4 w-4 text-indigo-600" />
        )}
      </div>
      <div className="flex-1 rounded-2xl bg-indigo-50 p-4">
        <p
          className={`text-sm ${user ? "text-indigo-900" : "text-indigo-600"}`}
        >
          {message}
          {message.length === 0 && (
            <span className="inline-block w-2 h-4 bg-indigo-600 animate-pulse ml-1" />
          )}
        </p>
      </div>
    </div>
  );

  const UploadUI = () => (
    <div
      className="group cursor-pointer relative w-full h-full rounded-lg border-2 border-dashed 
      border-indigo-300 hover:border-indigo-400 transition-all duration-300 
      transform flex flex-col items-center justify-center p-6 
      bg-gradient-to-b from-white to-indigo-50"
    >
      <div className="mb-4 animate-bounce">
        <Upload
          className="h-12 w-12 text-indigo-400 group-hover:text-indigo-500 
          transition-colors duration-200"
        />
      </div>
      <h3 className="text-lg font-semibold text-indigo-600 mb-2">
        Upload an Image
      </h3>
      <p className="text-sm text-gray-500 text-center max-w-xs">
        Drop your image here or click to browse
      </p>
      <div className="mt-4 text-xs text-gray-400">Supports JPG, PNG, JPEG</div>
      <div
        className="absolute inset-0 bg-indigo-100/0 group-hover:bg-indigo-100/30 
        transition-colors duration-200 rounded-lg"
      />
    </div>
  );

  const ProcessingImage = () => (
    <div className="flex flex-col items-center w-full">
      <div className="relative w-48 h-48 flex items-center justify-center">
        <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-indigo-500 to-indigo-600 shadow-lg" />
        <Sparkles className="absolute text-white h-12 w-12" />
      </div>
      <div className="mt-4 text-center">
        <p className="text-sm font-medium text-indigo-600">
          Processing: quantum_pattern.jpg
        </p>
        <p className="text-xs text-gray-500 mt-1">
          Analyzing image contents...
        </p>
      </div>
    </div>
  );

  return (
    <section className="py-24 sm:py-32" id="how-we-work">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <header className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            See It In Action
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Watch how QUANTUM-LEAP processes and understands images in
            real-time.
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="relative rounded-xl border border-indigo-900/10 bg-white/50 p-8 shadow-2xl shadow-indigo-600/10 hover:shadow-lg transition-all duration-300">
            <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_bottom_right,#4f46e510,#4f46e520)] rounded-xl" />

            <div className="aspect-square flex items-center justify-center">
              {stage === 0 && <UploadUI />}
              {stage >= 1 && (
                <div className="w-full flex items-center justify-center">
                  {stage >= 2 ? (
                    <ProcessingImage />
                  ) : (
                    <div className="w-48 h-48 rounded-lg bg-indigo-100 animate-pulse" />
                  )}
                </div>
              )}
            </div>
          </div>

          <div className="relative rounded-xl border border-indigo-900/10 bg-white/50 p-8 shadow-2xl shadow-indigo-600/10 hover:shadow-lg transition-all duration-300">
            <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_bottom_right,#4f46e510,#4f46e520)] rounded-xl" />

            <div className="space-y-4">
              {chatMessages.map((message, index) => (
                <MessageBubble
                  key={`${iteration}-${index}`}
                  message={message.message}
                  user={message.user}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
