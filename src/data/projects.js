import stepperImage from '../images/stepper.png';
import safeChatImage from '../images/safeChat.png';
import unrecognizedUserImage from '../images/NLP.png';
import facebookImage from '../images/facebook.png';
import bookStoreImage from '../images/bookStroe.jpeg';
import chatShieldImage from '../images/chatShield.jpeg';
import WebServerImage from '../images/tcp.png';

const projects = [
    {
      title: "Stepper",
      description: "Stepper is a generic workflow engine designed to allow non-technical users to define and execute various operational processes through a simple, uniform interface. It is built around the concept of reusable, independent units of logic called Steps, each performing a specific task (e.g., deleting a file, running a command). Steps can be connected via inputs and outputs—similar to how LEGO bricks connect—forming a Flow that represents a complete operational scenario. By combining different steps, users can build and run flexible workflows to automate complex processes efficiently.",
      image: stepperImage, // את יכולה לשים כל תמונה בתיקייה public/images
      githubLink: "https://github.com/AvivNatan/Stepper"
    },
    {
      title: "SafeChat",
      description: "Hackathon Project | QueenB & AppsFlyer - SafeChat is an interactive platform designed to promote online safety. Users can send messages in a chat-like interface and receive real-time feedback about potential safety risks. The system also provides a history of conversations to help users reflect and learn. Technologies: React, Node.js, MongoDB, Express, JavaScript.",
      image: safeChatImage,
      githubLink: "https://github.com/AvivNatan/BeSafeHackathon2025.git"
    },
    {
      title: "Facebook App",
      description: "This is a desktop Facebook application built with C# and the Facebook Graph API. The app provides enhanced user interaction with Facebook data through a Windows Forms interface. It features a user-friendly design pattern architecture that makes the code maintainable, extensible, and organized.",
      image: facebookImage,
      githubLink: "https://github.com/AvivNatan/Facebook-App-Design-Patterns.git"
    },
    {
      title: "Unrecognized User Requests",
      description: "As part of an NLP project, I developed a system for analyzing unrecognized user requests in virtual assistants. The system uses sentence embeddings (via sentence-transformers) and unsupervised clustering to group similar requests and surface new topics or intents. This approach improves detection of unhandled requests at scale by avoiding fixed cluster counts and tolerating outliers. Technologies used: Python, NLP, Hugging Face, unsupervised learning.",
      image: unrecognizedUserImage,
      githubLink: "https://github.com/AvivNatan/NLP-clustering-naming"
    },
    {
      title: "Book Store",
      description: "Books Server Project – A backend system for managing a book inventory, developed using Java, Spring Boot, and Hibernate ORM. The server supports full CRUD operations, filtering, and logging with Logback. It includes persistence with both PostgreSQL and MongoDB, and is fully containerized using Docker and docker-compose. The project demonstrates my ability to build scalable, modular backend applications using modern development tools.",
      image: bookStoreImage,
      githubLink: "https://github.com/AvivNatan/Book-Store.git"
    },
    {
      title: "Web Server",
      description: "The Time Server project is a robust network server implemented in C++14, utilizing the Winsock2 library for efficient socket communication. This server is designed to handle multiple client connections simultaneously, supporting various HTTP methods such as GET, POST, PUT, DELETE, HEAD, TRACE, and OPTIONS. It employs non-blocking I/O operations to ensure smooth and responsive performance, even under heavy load. Additionally, the server includes timeout management to close inactive connections, optimizing resource usage. This project showcases my skills in network programming, C++ development, and handling real-time data communication.",
      image: WebServerImage,
      githubLink: "https://github.com/AvivNatan/TCP-server-NonBlocking.git"
    },
    {
      title: "Chat Shield",
      description: "We’re currently developing a Chrome extension as part of our final year project in computer science. The extension monitors outgoing messages on WhatsApp Web and alerts users if they may have unintentionally shared sensitive or private information. The goal is to raise awareness and promote safer digital communication. So far, we’ve built the client-side logic in JavaScript, developed a Node.js server for message analysis, and integrated NLP models from HuggingFace. We're now working on improving detection using a hybrid approach that combines multiple models and fine-tunes them on real-world examples.",
      image: chatShieldImage,
      githubLink: "https://github.com/SaraBenita/ChatShieldProject.git"
    }
  ];
  
  export default projects;
  