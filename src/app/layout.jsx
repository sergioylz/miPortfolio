import "./globals.css";

export const metadata = {
  title: 'Mi Portafolio',
  description: 'Colección de mini-proyectos interactivos creados con Next.js y React.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      {/* Puedes añadir una clase si usas Tailwind para definir el fondo, fuente, etc. */}
      <body>
        {/* Aquí puedes añadir tu <Header /> y <Footer /> si son estáticos */}
        
        <main className="min-h-screen p-8">
          {children} 
        </main>
        
      </body>
    </html>
  );
}
