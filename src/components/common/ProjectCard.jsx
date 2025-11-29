// components/common/ProjectCard.js
import React from 'react';

export default function ProjectCard({ project }) {
    return (
        // Contenedor de la Tarjeta
        // p-6 es el padding de la tarjeta, que separa el contenido del borde.
        <div className="bg-white/40 p-6 w-80 max-w-sm rounded-xl shadow-lg transition duration-300 ease-in-out hover:shadow-xl hover:scale-[1.03] transform">
            
            {/* 1. Bloque de la Imagen */}
            {/* Usamos 'aspect-video' para la proporción y 'rounded-lg' para las esquinas */}
            <div className="block aspect-video overflow-hidden rounded-lg">
                <a href={project.slug} className="block w-full h-full">
                    <img 
                        src={project.image} 
                        alt={project.title} 
                        // La imagen ocupa 100% del espacio, sin recortar (object-contain)
                        className="w-full h-full object-contain mx-auto" 
                    />
                </a>
            </div>
            
            {/* 2. Bloque del Título */}
            {/* El título se coloca inmediatamente debajo de la imagen, dentro del padding del contenedor principal */}
            <div className="pt-4 pb-0"> {/* pt-4 añade un espacio entre la imagen y el texto */}
                <h3 className="text-base text-black text-center font-semibold">{project.title}</h3>
            </div>
            
        </div>
    );
}