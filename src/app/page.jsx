// app/page.js

// Importa los componentes de tu Home Page
import ProjectGrid from '../components/layout/ProjectGrid'; 
import { projectData } from '../lib/data.jsx'; // Tus datos estáticos de proyectos

export default function Home() {
  return (
    <div className="home-container text-center">
      <header className="home-header text-center mb-8">
        <h1 className="text-5xl font-bold mb-4">👋 Bienvenido!! </h1>
        <p className="text-xl text-gray-600 mb-12"> Explora mis mini-proyectos. </p>
      </header>
      {/* Grid de Proyectos */}
      <ProjectGrid projects={projectData} />
    </div>
  );
}