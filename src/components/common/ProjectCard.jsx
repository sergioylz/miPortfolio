// components/common/ProjectCard.js
import React from 'react';

export default function ProjectCard({ project }) {
    return (
        <div className="bg-white-1000 p-6 h-80 w-100 rounded-xl shadow-lg transition duration-300 ease-in-out hover:shadow-xl hover:translate-y-[-4px] transform">
            <a href={project.slug}>
                <img src={project.image} alt={project.title} className="w-auto h-auto mx-auto object-cover rounded-xl" />
            </a>
            <div className="p-4">
                <h3 className="text-lg text-black text-center font-semibold mb-2">{project.title}</h3>
            </div>
        </div>
    );
}