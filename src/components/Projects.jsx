import React from 'react';
import ProjectCard from './ProjectCard'; // קלף פרויקט
import projects from '../data/projects'; // מערך פרויקטים (אתה יכול לשים את המידע הזה בקובץ נפרד)

const Projects = () => {
    return (
      <section className="p-8">
        <h2 className="text-3xl font-semibold mb-6">הפרויקטים שלי</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
      </section>
    )
  }
  
  export default Projects
  