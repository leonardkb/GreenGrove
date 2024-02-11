import React from "react";

const ChatMessage = ({ isUser, message, name, imageUrl }) => (
  <div className={`flex mb-4 ${isUser ? "flex-row-reverse" : "flex-row"}`}>
    <img
      src={imageUrl || (isUser ? "https://example.com/user-profile-image.jpg" : "https://example.com/framer-profile-image.jpg")}
      alt={name}
      className="w-10 h-10 object-cover rounded-full mr-2"
    />
    <div
      className={`max-w-md rounded-lg p-4 ${isUser ? "bg-green-500 text-white" : "bg-gray-200 text-black"}`}
    >
      <p className="text-sm font-semibold mb-1">{name}</p>
      <p className="text-base">{message}</p>
    </div>
  </div>
);

const FramerExperiencesChat = () => {
  const framerExperiences = [
    {
      name: "John Doe",
      imageUrl: "https://example.com/framer-image-1.jpg",
      message: "Green Grove has transformed my farming practices. I've seen increased yields and better sustainability.",
    },
    {
      name: "Jane Smith",
      imageUrl: "https://example.com/framer-image-2.jpg",
      message: "The support from Green Grove's experts has been invaluable. I'm grateful for their assistance in every step.",
    },
    // Add more framer experiences as needed
  ];

  return (
    <div className="mt-8">
      <h2 className="text-3xl font-bold mb-4">Farmers' Experiences</h2>
      <div>
        <ChatMessage isUser={false} name="Green Grove" message="What do you think about Green Grove?" />
        {framerExperiences.map((experience, index) => (
          <ChatMessage key={index} isUser={true} {...experience} />
        ))}
      </div>
    </div>
  );
};

export default FramerExperiencesChat;
