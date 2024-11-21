import React, { useState } from 'react';
import styled from 'styled-components';

const ChatContainer = styled.div`
  max-width: 400px;
  margin: auto;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 8px;
`;

const MessagesContainer = styled.div`
  max-height: 300px;
  overflow-y: auto;
  margin-bottom: 10px;
`;

const Message = styled.div`
  padding: 8px;
  margin: 4px 0;
  border-radius: 5px;
  background-color: ${props => (props.isUser ? '#007bff' : '#e1e1e1')};
  color: ${props => (props.isUser ? 'white' : 'black')};
  align-self: ${props => (props.isUser ? 'flex-end' : 'flex-start')};
  max-width: 75%;
`;

const InputContainer = styled.div`
  display: flex;
`;

const Input = styled.input`
  flex: 1;
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

const Button = styled.button`
  margin-left: 8px;
  padding: 8px 12px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    // Add user message to the chat
    const newMessages = [...messages, { text: input, isUser: true }];
    setMessages(newMessages);

    // Simulate a bot response
    const botResponse = { text: "I'm here to help!", isUser: false };
    setTimeout(() => {
      setMessages(prevMessages => [...prevMessages, botResponse]);
    }, 1000);

    // Clear input
    setInput("");
  };

  return (
    <ChatContainer>
      <MessagesContainer>
        {messages.map((message, index) => (
          <Message key={index} isUser={message.isUser}>
            {message.text}
          </Message>
        ))}
      </MessagesContainer>
      <InputContainer>
        <Input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          placeholder="Type a message..."
        />
        <Button onClick={handleSend}>Send</Button>
      </InputContainer>
    </ChatContainer>
  );
};

export default Chatbot;
