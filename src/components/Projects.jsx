import React from 'react';
import ProjectCard from './ProjectCard';
import projects from '../data/projects';

const Projects = () => {
  return (
    <section className="p-8 bg-gradient-to-b from-teal-400 to-gray-800 text-white">
      <h2 className="text-4xl font-bold text-center mb-10">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;