// app/page.js
'use client';

import React from "react";
import { projectData } from "@/lib/data";

import UVCanvasBackground from "@/components/background/UVCanvasBackground";
import Carousel from "@/components/common/Carousel";
import ProjectCard from "@/components/common/ProjectCard";

export default function Home() {

  return (
    <div className='flex flex-wrap justify-center items-center min-h-screen relative gap-6 p-4 bg-gradient-to-b from-white/10 via-white/5 to-white/10'>
      <UVCanvasBackground className="absolute inset-0 z-0" />
      {/*<Carousel className="relative z-10" />*/}
      {projectData.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  );
}