import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import HackerRoom from "../components/HackerRoom";
import CanvasLoader from "../components/CanvasLoader";
import { useControls } from "leva";
import { useMediaQuery } from "react-responsive";
import { calculateSizes } from "../constants";
import Target from "../components/Target";

const Hero = () => {
    const isSmall = useMediaQuery({maxWidth:440})
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({minWidth:768,maxWidth:1024})

  const sizes = calculateSizes(isSmall,isMobile,isTablet);

  return (
    <section className="min-h-screen w-full flex flex-col relative">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans ">
          Hi, i am Akhil<span className="waving-hand">🖐️</span>
        </p>
        <p className="hero_tag text-gray_gradient">
          Building Products and Brands
        </p>
      </div>
      <div className="w-full h-full absolute  inset-0">
        <Canvas className="w-full h-full">
          <OrbitControls enablePan enableRotate enableZoom={false} />
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 20]} />
            <HackerRoom
              scale={sizes.deskScale}
              position={sizes.deskPosition}
              rotation={[-100, -Math.PI, 0]}
            />
            <group>
                <Target position={sizes.targetPosition} />
            </group>
            <ambientLight intensity={1} />
            <directionalLight intensity={1} position={[10, 10, 10]} />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default Hero;
