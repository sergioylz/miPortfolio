'use client';
import UVCanvasBackground from "@/components/background/UVCanvasBackground";
import React from "react";
import { useState } from "react";


export default function page() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="bg">
            <UVCanvasBackground className="absolute inset-0 z-0" />
            {/* Header */}
            <header className="w-full bg-gray-800 text-white py-4 px-4 md:px-8 flex justify-between items-center rounded-xl relative">
                <div className="text-2xl font-bold">
                    Tailwind CSS
                </div>
                <nav className={`
                    // 1. ESTILOS MÓVILES (Aplicados cuando está abierto)
                    flex-col space-y-2 w-full absolute top-full left-0 right-0 z-10 bg-gray-700 p-4 rounded-xl
                    
                    // 2. ESTILOS Y POSICIÓN DE DESKTOP (Anulación de los estilos móviles)
                    md:flex              // Habilita Flexbox (Horizontal)
                    md:space-x-6         // Espacio entre links
                    md:relative          // Anula 'absolute', lo devuelve al flujo normal del header
                    md:flex-row          // Anula 'flex-col', lo vuelve horizontal (aunque es por defecto, es buena práctica)
                    md:w-auto            // Anula 'w-full', solo ocupa el espacio necesario
                    md:p-0               // Anula el padding vertical/horizontal grande del desplegable
                    md:bg-transparent    // Anula 'bg-gray-700'
                    md:space-y-0         // Anula 'space-y-2'
                    
                    // 3. VISIBILIDAD MÓVIL (El interruptor)
                    ${isMenuOpen ? 'flex' : 'hidden'} 
                    
                    transition duration-300
                `}>
                    <a href="#hero" className="hover:underline">Inicio</a>
                    <a href="#caracteristicas" className="hover:underline">Características</a>
                    <a href="#galeria" className="hover:underline">Galería</a>
                    <a href="#dashboard" className="hover:underline">Dashboard</a>
                    <a href="#testimonios" className="hover:underline">Testimonios</a>
                </nav>
                <button className="text-2xl block md:hidden" onClick={toggleMenu}>
                    &#9776;
                </button>
            </header>

            {/* Hero */}
            <section id="hero" className="max-w-7xl mx-auto p-4 md:p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-12 md:py-20">
                    <div className="order-1 md:order-2">
                        <div className="bg-gradient-to-tr from-indigo-200 to-purple-700 h-64 md:h-96 rounded-lg shadow-2xl flex items-center justify-center text-white text-xl p-4">
                            Imagen o Animación Representativa
                        </div>
                    </div>  

                    <div className="order-2 md:order-1">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">Bienvenido a mi Proyecto con Tailwind CSS</h1>
                        <p className="text-lg mb-6">Explora las características y funcionalidades que he implementado utilizando Tailwind CSS para crear una experiencia de usuario atractiva y responsiva.</p>
                        <button className="bg-indigo-500 hover:bg-indigo-900 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition duration-300">Botón 1</button>
                        <button className="ml-4 bg-gray-100 hover:bg-gray-400 text-gray-800 font-semibold py-3 px-6 rounded-lg shadow-lg transition duration-300">Botón 2</button>
                    </div> 
                </div>
            </section>

            {/* Características */}
            <section id="caracteristicas" className="max-w-7xl mx-auto p-4 md:p-8">
                <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl pb-8 md:text-5xl font-bold mb-4 text-center">Características</h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10">
                        <div className="bg-gradient-to-tr from-yellow-400 to-purple-700 h-32 p-6 flex flex-col justify-center items-center rounded-xl shadow-lg text-center font-bold text-white transition duration-300 ease-in-out hover:shadow-2xl hover:scale-[1.03] transform">
                            Característica 1
                        </div>
                        <div className="bg-gradient-to-tr from-green-400 to-purple-700 h-32 p-6 flex flex-col justify-center items-center rounded-xl shadow-lg text-center font-bold text-white transition duration-300 ease-in-out hover:shadow-2xl hover:scale-[1.03] transform">
                            Característica 2
                        </div>
                        <div className="bg-gradient-to-tr from-red-400 to-purple-700 h-32 p-6 flex flex-col justify-center items-center rounded-xl shadow-lg text-center font-bold text-white transition duration-300 ease-in-out hover:shadow-2xl hover:scale-[1.03] transform">
                            Característica 3
                        </div>
                        <div className="bg-gradient-to-tr from-blue-400 to-purple-700 h-32 p-6 flex flex-col justify-center items-center rounded-xl shadow-lg text-center font-bold text-white transition duration-300 ease-in-out hover:shadow-2xl hover:scale-[1.03] transform">
                            Característica 4
                        </div>
                    </div>
                </div>
            </section>

            {/* Galería de Productos */}
            <section id="galeria" className="max-w-7xl mx-auto p-4 md:p-8">
                <h1 className="text-4xl pb-8 md:text-5xl font-bold mb-4 text-center">Galería de Productos</h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-10">
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden transition duration-300 ease-in-out hover:shadow-2xl hover:scale-[1.03] transform lg:col-span-2 sm:col-span-2 p-4 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 items-center">
                            <div className="w-full md:w-1/3 h-64 bg-indigo-200 rounded-lg flex items-center justify-center text-indigo-800 text-center text-lg font-bold">
                                Imagen del Producto
                            </div>
                            <div className="w-full md:w-2/3 flex flex-col justify-between p-2">
                                <span className="text-sm font-semibold text-indigo-600 mb-2 uppercase">Destacado</span>
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">Nombre del Producto DESTACADO</h3>
                                <p className="text-gray-600 mb-4">Descripción breve de nuestro producto estrella. ¡No te lo pierdas!</p>
                                <div className="flex items-center justify-between mt-auto">
                                    <span className="text-3xl font-extrabold text-indigo-600">$199.99</span>
                                    <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-indigo-700 transition duration-150">
                                        Añadir al Carrito
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl shadow-lg overflow-hidden 
                                    transition duration-300 ease-in-out hover:shadow-xl hover:scale-[1.05] transform">
                            <div className="h-48 bg-gray-200 flex items-center justify-center text-gray-500 font-medium">
                                Imagen del Producto
                            </div>
                            <div className="p-5">
                                <h3 className="text-lg font-semibold text-gray-900 mb-1">Producto 1</h3>
                                <div className="flex items-center justify-between mt-2">
                                    <span className="text-xl font-bold text-gray-700">$29.99</span>
                                    <button className="bg-green-500 text-white px-4 py-2 text-sm rounded-lg hover:bg-green-600 transition">
                                        Añadir al Carrito
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl shadow-lg overflow-hidden 
                                    transition duration-300 ease-in-out hover:shadow-xl hover:scale-[1.05] transform">
                            <div className="h-48 bg-gray-200 flex items-center justify-center text-gray-500 font-medium">
                                Imagen del Producto
                            </div>
                            <div className="p-5">
                                <h3 className="text-lg font-semibold text-gray-900 mb-1">Producto 2</h3>
                                <div className="flex items-center justify-between mt-2">
                                    <span className="text-xl font-bold text-gray-700">$45.00</span>
                                    <button className="bg-green-500 text-white px-4 py-2 text-sm rounded-lg hover:bg-green-600 transition">
                                        Añadir al Carrito
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl shadow-lg overflow-hidden 
                                    transition duration-300 ease-in-out hover:shadow-xl hover:scale-[1.05] transform">
                            <div className="h-48 bg-gray-200 flex items-center justify-center text-gray-500 font-medium">
                                Imagen del Producto
                            </div>
                            <div className="p-5">
                                <h3 className="text-lg font-semibold text-gray-900 mb-1">Producto 3</h3>
                                <div className="flex items-center justify-between mt-2">
                                    <span className="text-xl font-bold text-gray-700">$12.50</span>
                                    <button className="bg-green-500 text-white px-4 py-2 text-sm rounded-lg hover:bg-green-600 transition">
                                        Añadir al Carrito
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl shadow-lg overflow-hidden 
                                    transition duration-300 ease-in-out hover:shadow-xl hover:scale-[1.05] transform">
                            <div className="h-48 bg-gray-200 flex items-center justify-center text-gray-500 font-medium">
                                Imagen del Producto
                            </div>
                            <div className="p-5">
                                <h3 className="text-lg font-semibold text-gray-900 mb-1">Producto 4</h3>
                                <div className="flex items-center justify-between mt-2">
                                    <span className="text-xl font-bold text-gray-700">$75.00</span>
                                    <button className="bg-green-500 text-white px-4 py-2 text-sm rounded-lg hover:bg-green-600 transition">
                                        Añadir al Carrito
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl shadow-lg overflow-hidden 
                                    transition duration-300 ease-in-out hover:shadow-xl hover:scale-[1.05] transform">
                            <div className="h-48 bg-gray-200 flex items-center justify-center text-gray-500 font-medium">
                                Imagen del Producto
                            </div>
                            <div className="p-5">
                                <h3 className="text-lg font-semibold text-gray-900 mb-1">Producto 5</h3>
                                <div className="flex items-center justify-between mt-2">
                                    <span className="text-xl font-bold text-gray-700">$99.99</span>
                                    <button className="bg-green-500 text-white px-4 py-2 text-sm rounded-lg hover:bg-green-600 transition">
                                        Añadir al Carrito
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden 
                                    transition duration-300 ease-in-out hover:shadow-xl hover:scale-[1.05] transform">
                            <div className="h-48 bg-gray-200 flex items-center justify-center text-gray-500 font-medium">
                                Imagen del Producto
                            </div>
                            <div className="p-5">
                                <h3 className="text-lg font-semibold text-gray-900 mb-1">Producto 6</h3>
                                <div className="flex items-center justify-between mt-2">
                                    <span className="text-xl font-bold text-gray-700">$109.99</span>
                                    <button className="bg-green-500 text-white px-4 py-2 text-sm rounded-lg hover:bg-green-600 transition">
                                        Añadir al Carrito
                                    </button>
                                </div>
                            </div>
                        </div>
                </div>
            </section>

            {/* Dashboard */}
            <section id="dashboard" className="max-w-7xl mx-auto p-4 md:p-8">
                <div className="max-w-7xl mx-auto px-4">
                    <h1 className="text-4xl pb-8 md:text-5xl font-bold mb-4 text-center">Dashboard</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="rounded-xl shadow-xl p-6 flex flex-col justify-between bg-gradient-to-br from-green-600 to-blue-600 text-white md:col-span-2 transition duration-300 ease-in-out hover:shadow-2xl hover:scale-[1.01] transform">
                            <div className="flex items-center justify-between mb-2">
                                <h3 className="text-lg font-medium opacity-90">👤 Usuarios Activos</h3>
                                <span className="text-2xl">🟢</span>
                            </div>
                            <p className="text-4xl font-extrabold">
                                125K
                            </p>
                            
                            <div className="flex justify-between items-center mt-3">
                                <span className="text-sm font-semibold text-green-300">
                                    <span className="inline-block mr-1">↑</span> +12%
                                </span>
                                <p className="text-xs opacity-80">últimos 30 días</p>
                            </div>
                        </div>
                        <div className="rounded-xl shadow-xl p-6 flex flex-col justify-between bg-gradient-to-br from-green-600 to-blue-600 text-white md:col-span-2 transition duration-300 ease-in-out hover:shadow-2xl hover:scale-[1.01] transform">
                            <div>
                                <div className="flex items-center justify-between mb-2">
                                    <h3 className="text-xl font-medium opacity-90">🚀 Crecimiento Anual Total</h3>
                                    <span className="text-3xl">⭐</span>
                                </div>
                                <p className="text-4xl font-extrabold mb-1">
                                    $8.5M
                                </p>
                            </div>
                            
                            <div className="flex justify-between items-center mt-4">
                                <span className="text-base font-semibold text-green-300">
                                    <span className="inline-block transform rotate-[-45deg] mr-1">↗</span> +24.8%
                                </span>
                                <p className="text-sm opacity-80">vs. año anterior</p>
                            </div>
                        </div>
                        <div className="rounded-xl shadow-xl p-6 flex flex-col justify-between bg-gradient-to-br from-green-600 to-blue-600 text-white md:col-span-2 transition duration-300 ease-in-out hover:shadow-2xl hover:scale-[1.01] transform">
                            <div className="flex items-center justify-between mb-2">
                                <h3 className="text-lg font-medium opacity-90">📈 Tasa de Conversión</h3>
                                <span className="text-2xl">🔴</span>
                            </div>
                            <p className="text-4xl font-extrabold">
                                3.4%
                            </p>
                            
                            <div className="flex justify-between items-center mt-3">
                                <span className="text-sm font-semibold text-red-300">
                                    <span className="inline-block mr-1">↓</span> -0.5%
                                </span>
                                <p className="text-xs opacity-80">última semana</p>
                            </div>
                        </div>
                        <div className="rounded-xl shadow-xl p-6 flex flex-col justify-between bg-gradient-to-br from-green-600 to-blue-600 text-white md:col-span-2 transition duration-300 ease-in-out hover:shadow-2xl hover:scale-[1.01] transform">
                            <div className="flex items-center justify-between mb-2">
                                <h3 className="text-lg font-medium opacity-90">✅ Tickets Cerrados</h3>
                                <span className="text-2xl">🌱</span>
                            </div>
                            <p className="text-4xl font-extrabold">
                                987
                            </p>
                            
                            <div className="flex justify-between items-center mt-3">
                                <span className="text-sm font-semibold text-green-300">
                                    <span className="inline-block mr-1">↑</span> +5%
                                </span>
                                <p className="text-xs opacity-80">promedio mensual</p>
                            </div>
                        </div>
                        <div className="rounded-xl shadow-xl p-6 flex flex-col justify-between bg-gradient-to-br from-green-600 to-blue-600 text-white md:col-span-2 transition duration-300 ease-in-out hover:shadow-2xl hover:scale-[1.01] transform">
                            <div className="flex items-center justify-between mb-2">
                                <h3 className="text-lg font-medium opacity-90">⏱️ Tiempo Respuesta</h3>
                                <span className="text-2xl">🟡</span>
                            </div>
                            <p className="text-4xl font-extrabold">
                                1.5h
                            </p>
                            
                            <div className="flex justify-between items-center mt-3">
                                <span className="text-sm font-semibold text-red-700">
                                    <span className="inline-block mr-1">→</span> 0%
                                </span>
                                <p className="text-xs opacity-80">se mantiene igual</p>
                            </div>
                        </div>
                        <div className="rounded-xl shadow-xl p-6 flex flex-col justify-between bg-gradient-to-br from-green-600 to-blue-600 text-white md:col-span-2 transition duration-300 ease-in-out hover:shadow-2xl hover:scale-[1.01] transform">
                            <div className="flex items-center justify-between mb-2">
                                <h3 className="text-lg font-medium opacity-90">💰 Costo Adquisición</h3>
                                <span className="text-2xl">💜</span>
                            </div>
                            <p className="text-4xl font-extrabold">
                                $15.20
                            </p>
                            
                            <div className="flex justify-between items-center mt-3">
                                <span className="text-sm font-semibold text-red-300">
                                    <span className="inline-block mr-1">↑</span> +3%
                                </span>
                                <p className="text-xs opacity-80">respecto al mes</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonios */}
            <section id="testimonios" className="py-10 bg-gradient-to-br from-gray-600 to-indigo-600 rounded-xl mx-4 md:mx-8 my-8 px-4 md:px-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-extrabold text-white text-center mb-10">
                        Lo que Dicen Nuestros Clientes
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
                        
                        <div className="bg-gray-50 p-6 rounded-xl shadow-lg transition duration-300 ease-in-out hover:shadow-xl hover:translate-y-[-4px] transform">                           
                            <div className="text-yellow-500 mb-4 text-xl">
                                ★★★★★
                            </div>           
                            <p className="text-gray-700 italic mb-6">
                                "El producto superó mis expectativas. La calidad es increíble y el soporte al cliente es rapidísimo. ¡Altamente recomendado!"
                            </p>
                            <div className="flex items-center">
                                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mr-3 text-white font-bold text-lg">
                                    JA
                                </div>
                                <div>
                                    <p className="font-semibold text-gray-900">Javier Alonso</p>
                                    <p className="text-sm text-gray-500">CEO, Innovatech</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-50 p-6 rounded-xl shadow-lg transition duration-300 ease-in-out hover:shadow-xl hover:translate-y-[-4px] transform">                           
                            <div className="text-yellow-500 mb-4 text-xl">
                                ★★★★★
                            </div>
                            <p className="text-gray-700 italic mb-6">
                                "Una experiencia de compra perfecta. La interfaz es intuitiva y la entrega fue justo a tiempo. Seguiré comprando aquí."
                            </p>
                            <div className="flex items-center">
                                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mr-3 text-white font-bold text-lg">
                                    LD
                                </div>
                                <div>
                                    <p className="font-semibold text-gray-900">Laura Díaz</p>
                                    <p className="text-sm text-gray-500">Diseñadora Freelance</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-50 p-6 rounded-xl shadow-lg transition duration-300 ease-in-out hover:shadow-xl hover:translate-y-[-4px] transform">                           
                            <div className="text-yellow-500 mb-4 text-xl">
                                ★★★★★
                            </div>         
                            <p className="text-gray-700 italic mb-6">
                                "La mejor inversión que he hecho este año. El nivel de detalle y funcionalidad es de primera clase. ¡Totalmente recomendable!"
                            </p>
                            <div className="flex items-center">
                                <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mr-3 text-white font-bold text-lg">
                                    MC
                                </div>
                                <div>
                                    <p className="font-semibold text-gray-900">Manuel Castro</p>
                                    <p className="text-sm text-gray-500">Gerente de Marketing</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="w-full bg-gray-800 text-white py-4 px-4 md:px-8 flex justify-between items-center rounded-xl relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-10 border-b border-gray-700">
                        
                        <div className="space-y-4">
                            <h3 className="text-2xl font-bold text-indigo-400">Mi Empresa</h3>
                            <p className="text-gray-400 text-sm">
                                Ofrecemos soluciones innovadoras para transformar tu negocio digitalmente. Comprometidos con la excelencia y el soporte al cliente.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
                            <ul className="space-y-3">
                                <li><a href="#inicio" className="text-gray-400 hover:text-white transition">Inicio</a></li>
                                <li><a href="#caracteristicas" className="text-gray-400 hover:text-white transition">Características</a></li>
                                <li><a href="#galeria" className="text-gray-400 hover:text-white transition">Productos</a></li>
                                <li><a href="#contacto" className="text-gray-400 hover:text-white transition">Contacto</a></li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold mb-4">Suscríbete al Newsletter</h3>
                            <p className="text-gray-400 mb-4 text-sm">
                                Recibe las últimas noticias y ofertas directamente en tu bandeja de entrada.
                            </p>
                            <form className="flex flex-col space-y-3">
                                <input type="email" placeholder="Tu email" required 
                                    className="p-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"/>
                                <button type="submit" 
                                        className="bg-indigo-600 text-white p-3 rounded-lg font-semibold hover:bg-indigo-700 transition duration-150">
                                    Suscribirse
                                </button>
                            </form>
                        </div>
                        
                    </div>

                    <div className="py-4 text-center text-sm text-gray-500 col-span-full"> 
                        &copy; 2025 Mi Empresa. Todos los derechos reservados.
                    </div>
                    
                </div>
            </footer>
        </div>
    );
}