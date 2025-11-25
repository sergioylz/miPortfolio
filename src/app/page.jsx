// app/page.js
'use client';

import React from "react";
import { projectData } from "@/lib/data";

import UVCanvasBackground from "@/components/background/UVCanvasBackground";
import Carousel from "@/components/common/Carousel";
import ProjectCard from "@/components/common/ProjectCard";

export default function Home() {

  return (
    <div className='min-h-screen relative text-white'>
      <UVCanvasBackground className="absolute inset-0 z-0" />
      {/*<Carousel className="relative z-10" />*/}
      <ProjectCard className="relative z-10" project={projectData[3]} />
    </div>
  );
}