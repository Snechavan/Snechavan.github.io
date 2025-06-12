'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaReact, FaNodeJs, FaGitAlt, FaTerminal, FaDatabase, FaServer, FaDocker, FaAws, FaPython } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiNextdotjs, SiMongodb, SiPostgresql, SiRedis, SiJavascript, SiVuedotjs, SiAngular } from 'react-icons/si';

interface FloatingElement3D {
  icon: JSX.Element;
  x: number;
  y: number;
  z: number;
  rotationX: number;
  rotationY: number;
  rotationZ: number;
  scale: number;
  opacity: number;
}

export default function FloatingElements3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  const elementsRef = useRef<FloatingElement3D[]>([]);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const elements: FloatingElement3D[] = [
      {
        icon: <FaCode className="text-4xl" />,
        x: Math.random() * container.offsetWidth,
        y: Math.random() * container.offsetHeight,
        z: Math.random() * 100,
        rotationX: Math.random() * 360,
        rotationY: Math.random() * 360,
        rotationZ: Math.random() * 360,
        scale: 0.8 + Math.random() * 0.4,
        opacity: 0.3 + Math.random() * 0.3,
      },
      {
        icon: <FaReact className="text-4xl" />,
        x: Math.random() * container.offsetWidth,
        y: Math.random() * container.offsetHeight,
        z: Math.random() * 100,
        rotationX: Math.random() * 360,
        rotationY: Math.random() * 360,
        rotationZ: Math.random() * 360,
        scale: 0.8 + Math.random() * 0.4,
        opacity: 0.3 + Math.random() * 0.3,
      },
      {
        icon: <FaNodeJs className="text-4xl" />,
        x: Math.random() * container.offsetWidth,
        y: Math.random() * container.offsetHeight,
        z: Math.random() * 100,
        rotationX: Math.random() * 360,
        rotationY: Math.random() * 360,
        rotationZ: Math.random() * 360,
        scale: 0.8 + Math.random() * 0.4,
        opacity: 0.3 + Math.random() * 0.3,
      },
      {
        icon: <FaGitAlt className="text-4xl" />,
        x: Math.random() * container.offsetWidth,
        y: Math.random() * container.offsetHeight,
        z: Math.random() * 100,
        rotationX: Math.random() * 360,
        rotationY: Math.random() * 360,
        rotationZ: Math.random() * 360,
        scale: 0.8 + Math.random() * 0.4,
        opacity: 0.3 + Math.random() * 0.3,
      },
      {
        icon: <FaTerminal className="text-4xl" />,
        x: Math.random() * container.offsetWidth,
        y: Math.random() * container.offsetHeight,
        z: Math.random() * 100,
        rotationX: Math.random() * 360,
        rotationY: Math.random() * 360,
        rotationZ: Math.random() * 360,
        scale: 0.8 + Math.random() * 0.4,
        opacity: 0.3 + Math.random() * 0.3,
      },
      {
        icon: <SiTypescript className="text-4xl" />,
        x: Math.random() * container.offsetWidth,
        y: Math.random() * container.offsetHeight,
        z: Math.random() * 100,
        rotationX: Math.random() * 360,
        rotationY: Math.random() * 360,
        rotationZ: Math.random() * 360,
        scale: 0.8 + Math.random() * 0.4,
        opacity: 0.3 + Math.random() * 0.3,
      },
      {
        icon: <SiTailwindcss className="text-4xl" />,
        x: Math.random() * container.offsetWidth,
        y: Math.random() * container.offsetHeight,
        z: Math.random() * 100,
        rotationX: Math.random() * 360,
        rotationY: Math.random() * 360,
        rotationZ: Math.random() * 360,
        scale: 0.8 + Math.random() * 0.4,
        opacity: 0.3 + Math.random() * 0.3,
      },
      {
        icon: <SiNextdotjs className="text-4xl" />,
        x: Math.random() * container.offsetWidth,
        y: Math.random() * container.offsetHeight,
        z: Math.random() * 100,
        rotationX: Math.random() * 360,
        rotationY: Math.random() * 360,
        rotationZ: Math.random() * 360,
        scale: 0.8 + Math.random() * 0.4,
        opacity: 0.3 + Math.random() * 0.3,
      },
      {
        icon: <FaDatabase className="text-4xl" />,
        x: Math.random() * container.offsetWidth,
        y: Math.random() * container.offsetHeight,
        z: Math.random() * 100,
        rotationX: Math.random() * 360,
        rotationY: Math.random() * 360,
        rotationZ: Math.random() * 360,
        scale: 0.8 + Math.random() * 0.4,
        opacity: 0.3 + Math.random() * 0.3,
      },
      {
        icon: <SiMongodb className="text-4xl" />,
        x: Math.random() * container.offsetWidth,
        y: Math.random() * container.offsetHeight,
        z: Math.random() * 100,
        rotationX: Math.random() * 360,
        rotationY: Math.random() * 360,
        rotationZ: Math.random() * 360,
        scale: 0.8 + Math.random() * 0.4,
        opacity: 0.3 + Math.random() * 0.3,
      },
      {
        icon: <SiPostgresql className="text-4xl" />,
        x: Math.random() * container.offsetWidth,
        y: Math.random() * container.offsetHeight,
        z: Math.random() * 100,
        rotationX: Math.random() * 360,
        rotationY: Math.random() * 360,
        rotationZ: Math.random() * 360,
        scale: 0.8 + Math.random() * 0.4,
        opacity: 0.3 + Math.random() * 0.3,
      },
      {
        icon: <FaDocker className="text-4xl" />,
        x: Math.random() * container.offsetWidth,
        y: Math.random() * container.offsetHeight,
        z: Math.random() * 100,
        rotationX: Math.random() * 360,
        rotationY: Math.random() * 360,
        rotationZ: Math.random() * 360,
        scale: 0.8 + Math.random() * 0.4,
        opacity: 0.3 + Math.random() * 0.3,
      },
      {
        icon: <FaAws className="text-4xl" />,
        x: Math.random() * container.offsetWidth,
        y: Math.random() * container.offsetHeight,
        z: Math.random() * 100,
        rotationX: Math.random() * 360,
        rotationY: Math.random() * 360,
        rotationZ: Math.random() * 360,
        scale: 0.8 + Math.random() * 0.4,
        opacity: 0.3 + Math.random() * 0.3,
      },
      {
        icon: <FaPython className="text-4xl" />,
        x: Math.random() * container.offsetWidth,
        y: Math.random() * container.offsetHeight,
        z: Math.random() * 100,
        rotationX: Math.random() * 360,
        rotationY: Math.random() * 360,
        rotationZ: Math.random() * 360,
        scale: 0.8 + Math.random() * 0.4,
        opacity: 0.3 + Math.random() * 0.3,
      },
      {
        icon: <SiJavascript className="text-4xl" />,
        x: Math.random() * container.offsetWidth,
        y: Math.random() * container.offsetHeight,
        z: Math.random() * 100,
        rotationX: Math.random() * 360,
        rotationY: Math.random() * 360,
        rotationZ: Math.random() * 360,
        scale: 0.8 + Math.random() * 0.4,
        opacity: 0.3 + Math.random() * 0.3,
      },
      {
        icon: <SiVuedotjs className="text-4xl" />,
        x: Math.random() * container.offsetWidth,
        y: Math.random() * container.offsetHeight,
        z: Math.random() * 100,
        rotationX: Math.random() * 360,
        rotationY: Math.random() * 360,
        rotationZ: Math.random() * 360,
        scale: 0.8 + Math.random() * 0.4,
        opacity: 0.3 + Math.random() * 0.3,
      },
      {
        icon: <SiAngular className="text-4xl" />,
        x: Math.random() * container.offsetWidth,
        y: Math.random() * container.offsetHeight,
        z: Math.random() * 100,
        rotationX: Math.random() * 360,
        rotationY: Math.random() * 360,
        rotationZ: Math.random() * 360,
        scale: 0.8 + Math.random() * 0.4,
        opacity: 0.3 + Math.random() * 0.3,
      },
      {
        icon: <SiRedis className="text-4xl" />,
        x: Math.random() * container.offsetWidth,
        y: Math.random() * container.offsetHeight,
        z: Math.random() * 100,
        rotationX: Math.random() * 360,
        rotationY: Math.random() * 360,
        rotationZ: Math.random() * 360,
        scale: 0.8 + Math.random() * 0.4,
        opacity: 0.3 + Math.random() * 0.3,
      },
    ];

    elementsRef.current = elements;

    const animate = () => {
      elementsRef.current = elementsRef.current.map((element) => ({
        ...element,
        x: element.x + (Math.random() - 0.5) * 2,
        y: element.y + (Math.random() - 0.5) * 2,
        z: element.z + (Math.random() - 0.5) * 2,
        rotationX: element.rotationX + (Math.random() - 0.5) * 2,
        rotationY: element.rotationY + (Math.random() - 0.5) * 2,
        rotationZ: element.rotationZ + (Math.random() - 0.5) * 2,
      }));

      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none overflow-hidden z-0"
      style={{ perspective: '1000px' }}
    >
      {elementsRef.current.map((element, index) => (
    <motion.div
          key={index}
          className="absolute text-blue-500 filter drop-shadow-lg"
      animate={{
            x: element.x,
            y: element.y,
            z: element.z,
            rotateX: element.rotationX,
            rotateY: element.rotationY,
            rotateZ: element.rotationZ,
            scale: element.scale * 1.5,
            opacity: element.opacity * 3,
      }}
      transition={{
            duration: 0.5,
            ease: 'linear',
          }}
        >
          <div className="relative">
            <div className="absolute inset-0 blur-md bg-blue-500/30 rounded-full" />
            <div className="relative">
              {element.icon}
            </div>
        </div>
        </motion.div>
      ))}
    </div>
  );
} 