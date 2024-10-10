import React, { Suspense, useState } from "react";
import { myProjects } from "../constants";
import { Canvas } from "@react-three/fiber";
import { Center, OrbitControls } from "@react-three/drei";
import CanvasLoader from "../components/CanvasLoader";
import DemoComputer from "../components/DemoComputer";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Projects = () => {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
  gsap.registerPlugin(ScrollTrigger);

    useGSAP(()=>{
        gsap.from(".head-text", {  
            y: 100,
            opacity:0,  
            duration: 2,  
            scrollTrigger: {  
              trigger: ".head-text",  
              start: "top 100%",  
              end: "bottom 100%",  
            //   markers: true,  
              scrub: 3, 
              ease:"power3.inout" 
            }
          })
        gsap.from("#project", {  
            y: 100,
            x:-100,
            opacity:0,  
            duration: 1,  
            scrollTrigger: {  
              trigger: "#project",  
              start: "top 100%",  
              end: "bottom 100%",  
            //   markers: true,  
              scrub: 3
            }
          })
        
          gsap.from("#globe", {  
            y: 100,  
            x:100,
            duration: 2,  
            opacity:0,
            scrollTrigger: {  
              trigger: "#globe",  
              start: "top 100%",  
              end: "bottom 100%",  
            //   markers: true,  
              scrub: 5,
            }
          })
          gsap.from("#paths", {  
            y: 100,  
            scale:3,
            duration: 2,  
            opacity:0,
            delay:3,
            stagger:1,
            scrollTrigger: {  
              trigger: "#globe",  
              start: "top 100%",  
              end: "bottom 100%",  
            //   markers: true,  
              scrub: 5,
            }
          });
    })

  const currentProject = myProjects[selectedProjectIndex];
  const projectCount = myProjects.length;

  const handleNavigation = (direction) => {
    setSelectedProjectIndex((prevIndex) => {
      if (direction === "previous") {
        return prevIndex === 0 ? projectCount - 1 : prevIndex - 1;
      } else {
        return prevIndex === projectCount - 1 ? 0 : prevIndex + 1;
      }
    });
  };

  return (
    <section id="work" className="c-space my-20 overflow-hidden">
      <p className="head-text">My Work</p>
      <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full">
        <div id="project" className="flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200">
          <div className="absolute top-0 right-0 ">
            <img
              src={currentProject.spotlight}
              alt="spotlight"
              className="w-full h-96 object-cover rounded-xl"
            />
          </div>
          <div
            className="p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg"
            style={currentProject.logoStyle}
          >
            <img
              src={currentProject.logo}
              alt="logo"
              className="w-10 h-10 shadow-sm"
            />
          </div>
          <div className="flex flex-col gap-5 text-white-600 my-5">
            <p className="text-white text-2xl font-semibold">
              {currentProject.title}
            </p>
            <p className="animated-text">{currentProject.desc}</p>
            <p className="animated-text">{currentProject.subdesc}</p>
          </div>
          <div className="flex items-center justify-center flex-wrap gap-5">
            <div className="flex items-center gap-5 ">
              {currentProject.tags.map((tag, index) => (
                <div id="paths" key={index} className="tech-logo">
                  <img  src={tag.path} alt={tag.name} />
                </div>
              ))}
            </div>
            <a
              className="flex items-center gap-2 cursor-pointor text-white-600"
              href={currentProject.href}
              target="_blank"
              rel="noreferrer"
            >
              <p>Check Live Site</p>
              <img src="/assets/arrow-up.png" className="w-3 h-3" alt="arrow" />
            </a>
          </div>
          <div className="flex justify-between items-center mt-7">
            <button
              className="arrow-btn"
              onClick={() => handleNavigation("previous")}
            >
              <img
                src="/assets/left-arrow.png"
                alt="left-arrow"
                className="w-4 h-4"
              />
            </button>
            <button
              className="arrow-btn"
              onClick={() => handleNavigation("next")}
            >
              <img
                src="/assets/right-arrow.png"
                alt="right-arrow"
                className="w-4 h-4"
              />
            </button>
          </div>
        </div>
        <div id="globe" className="border border-black-300 rounded-lg bg-black-200 h-96  md:h-full">
          <Canvas>
            <ambientLight intensity={Math.PI * 2} />
            <directionalLight position={[10, 10, 5]} />
            <Center>
              <Suspense fallback={<CanvasLoader />}>
                <group scale={2.2} position={[-0, -3, 0]} rotation={[0, 0, 0]}>
                  <DemoComputer texture={currentProject.texture} />
                </group>
              </Suspense>
            </Center>
            <OrbitControls maxPolarAngle={Math.PI / 2} enableZoom={false} rotateSpeed={0.2} />
          </Canvas>
        </div>
      </div>
    </section>
  );
};

export default Projects;
