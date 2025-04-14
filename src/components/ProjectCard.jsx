const ProjectCard = ({ title, description, image, githubLink }) => {
    return (
      <a
        href={githubLink}
        target="_blank"
        rel="noopener noreferrer"
        className="block transform transition duration-300 hover:scale-105 hover:shadow-xl rounded-2xl overflow-hidden"
      >
        <div className="bg-gray-800 p-4 rounded-2xl h-full flex flex-col">
          <img src={image} alt={title} className="w-full h-48 object-cover rounded-lg mb-4" />
          <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3> {/* שינינו ל-text-white */}
          <p className="text-gray-300">{description}</p> {/* שינינו ל-text-gray-300 */}
        </div>
      </a>
    );
};

export default ProjectCard;