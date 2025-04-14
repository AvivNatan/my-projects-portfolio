const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-800 to-gray-900 text-white py-8">
      <div className="max-w-4xl mx-auto text-center rounded-lg bg-gray-800 bg-opacity-50 p-6 shadow-lg">
        <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
        <ul className="space-y-4 text-lg">
          <li>
            <span role="img" aria-label="email">📧</span> Email: 
            <a href="mailto:Aviv193193@gmail.com" className="text-yellow-300 hover:underline ml-2">
              Aviv193193@gmail.com
            </a>
          </li>
          <li>
            <span role="img" aria-label="phone">📞</span> Phone: 
            <a href="tel:054-6367258" className="text-yellow-300 hover:underline ml-2">
              054-6367258
            </a>
          </li>
          <li>
            <span role="img" aria-label="linkedin">💼</span> LinkedIn: 
            <a href="https://www.linkedin.com/in/aviv-natan-962990286/" target="_blank" rel="noopener noreferrer" className="text-yellow-300 hover:underline ml-2">
              linkedin.com/in/avivnatan
            </a>
          </li>
          <li>
            <span role="img" aria-label="github">🐙</span> GitHub: 
            <a href="https://github.com/AvivNatan" target="_blank" rel="noopener noreferrer" className="text-yellow-300 hover:underline ml-2">
              github.com/avivnatan
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;