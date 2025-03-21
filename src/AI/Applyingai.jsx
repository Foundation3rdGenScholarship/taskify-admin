import axios from "axios";
import { useState } from "react";

export default function Applyingai() {
  const [message, setMessage] = useState("");
  const [conversation, setConversation] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const API_KEY = "AIzaSyCkuBenJW08baQjauq1tky_bKDPZp3CtIU"; // Replace with your actual API key
  const API_URL =
    "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const userMessage = { sender: "user", text: message };
    setConversation((prev) => [...prev, userMessage]);
    setMessage("");

    try {
      const result = await axios.post(
        `${API_URL}?key=${API_KEY}`,
        {
          contents: [{ parts: [{ text: message }] }],
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      const aiMessage = {
        sender: "ai",
        text: result.data.candidates[0].content.parts[0].text,
      };
      setConversation((prev) => [...prev, aiMessage]);
    } catch (error) {
      console.error("Error:", error);
      const errorMessage = {
        sender: "ai",
        text: "An error occurred while fetching the response.",
      };
      setConversation((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-3xl p-1 mx-auto mt-2 shadow-lg dark:bg-gray-900 rounded-3xl min-w-72  w-[20vw] h-[50vh] bg-blue-300 absolute bottom-0 z-20">
      <div className="flex items-center justify-center mb-6">
        <img
          className="w-12 h-12 rounded-full"
          src="http://dealkh-api.istad.co:80/images/9f9e1a2c-1392-4b1f-ac96-50f71cc16a51.png"
          alt="Gemini"
        />
        <h3 className="ml-4 text-2xl font-semibold text-gray-800 dark:text-white">
          Chat with Gemini AI
        </h3>
      </div>

      <div className="h-[35vh] p-4 bg-transparent dark:border-gray-700 rounded-2xl dark:bg-gray-800">
        <div className="mb-4  overflow-y-auto max-h-80 h-[25vh]">
          {conversation.map((msg, index) => (
            <div className="">
              {msg.sender === "user" ? (
                <div className="flex flex-col justify-end gap-2 m-5">
                  <img
                    className="w-[35px]"
                    src="http://dealkh-api.istad.co:80/images/9d39bd1a-c2df-4374-9437-60eb9a42cf93.png"
                    alt=""
                    srcset=""
                  />
                  <div className="p-2 text-right text-white bg-blue-500 rounded-lg">
                    {msg.text}
                  </div>
                </div>
              ) : (
                <div className="">
                  <img
                    className="rounded-full w-[35px]"
                    src="http://dealkh-api.istad.co:80/images/88a4f187-5c33-4c90-9179-4915befc34be.png"
                    alt=""
                  />
                  <div className="p-2 m-2 bg-gray-300 rounded-lg dark:bg-gray-700 dark:text-white">
                    {msg.text}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="flex gap-1">
          <input
            className="w-full px-4 py-2 mb-1 text-gray-800 bg-transparent border border-gray-300 rounded-lg shadow-sm dark:text-white dark:bg-gray-700 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message..."
            rows="2"
            required
            type="text"
          />
          <button
            type="submit"
            disabled={isLoading}
            // className={` p-1 px-1 rounded-lg text-white font-semibold transition-colors ${
            //   isLoading
            //     ? "bg-gray-400 cursor-not-allowed"
            //     : "bg-gradient-to-r from-teal-400 to-blue-500 hover:from-teal-500 hover:to-blue-600"
            // }`}
          >
            {isLoading ? <span className="animate-pulse"></span> : ""}
            <img
              className="w-[40px] "
              src="http://dealkh-api.istad.co:80/images/9313d6bf-6f5e-4817-bd11-2935185705d5.png"
              alt=""
            />
          </button>
        </form>
      </div>
    </div>
  );
}
