"use client";
import { useChat } from "ai/react";
import Messages from "@/components/chatbot/messages";
import InputForm from "@/components/chatbot/inputForm";

export default function Botpage() {
  const { messages, input, handleInputChange, handleSubmit, isLoading, stop } =
    useChat({
      api: "api/genai",
    });

  return (
    <main className="flex min-h-screen h-screen flex-col items-center p-4 text-lg">
      <div className="max-w-6xl w-full flex justify-end items-end flex-col h-full">
        <Messages messages={messages} isLoading={isLoading} />

        <div className="pb-4 w-full sticky bottom-0 bg-gray-950">
          <InputForm
            input={input}
            handleInputChange={handleInputChange}
            handleSubmit={handleSubmit}
            isLoading={isLoading}
            stop={stop}
          />
        </div>
      </div>
    </main>
  );
}
