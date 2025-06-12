'use client';

import { useEffect, useRef } from 'react';
import { useThemeMode } from './ThemeModeContext';

export default function InteractiveEffects() {
  const { isPainterMode } = useThemeMode();
  const isCoderMode = !isPainterMode;
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const isVisible = useRef(true);
  const lastMousePos = useRef({ x: 0, y: 0 });
  const trail = useRef<Array<{ x: number; y: number; size: number }>>([]);

  // Debug theme mode
  console.log('Theme mode:', isPainterMode ? 'Painter' : 'Coder');

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    console.log('Canvas initialized');

    // Handle visibility changes
    const handleVisibilityChange = () => {
      isVisible.current = !document.hidden;
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Check for touch devices
    const isTouchDevice = 'ontouchstart' in window;
    if (isTouchDevice) return;

    const coderSymbols = [
      '</>', '{}','let', 'if',
      'var', 'int',  'return', 'for', 'while',
       'void', 'class', 'new',  'try', 'catch'
    ];

    const particles: Particle[] = [];
    let animationFrameId: number;

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
      angle: number;
      symbol?: string;
      life: number;
      maxLife: number;

      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.angle = Math.random() * Math.PI * 2;
        this.life = 1;
        this.maxLife = Math.random() * 0.5 + 0.5;

        if (isCoderMode) {
          this.size = Math.random() * 1.2 + 1.0;
          const hues = [200, 220, 240, 260];
          const hue = hues[Math.floor(Math.random() * hues.length)];
          this.color = `hsla(${hue}, 50%, ${Math.random() * 10 + 50}%, ${this.life})`;
          this.speedX = Math.cos(this.angle) * 0.8;
          this.speedY = Math.sin(this.angle) * 0.8;
          this.symbol = coderSymbols[Math.floor(Math.random() * coderSymbols.length)];
        } else {
          this.size = Math.random() * 5 + 3;
          this.color = `hsla(${Math.random() * 60}, 100%, 75%, ${this.life})`;
          this.speedX = Math.cos(this.angle) * (Math.random() * 0.8 + 0.4);
          this.speedY = Math.sin(this.angle) * (Math.random() * 0.8 + 0.4);
        }
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.life -= 0.01;
        this.size *= 0.98;
        this.color = this.color.replace(/[\d.]+\)$/, `${this.life})`);
      }

      draw() {
        if (!ctx) return;
        ctx.save();

        if (isCoderMode && this.symbol) {
          ctx.font = `${this.size * 8}px monospace`;
          ctx.fillStyle = this.color;
          ctx.shadowColor = this.color;
          ctx.shadowBlur = 2;
          ctx.globalAlpha = 0.3;
          ctx.fillText(this.symbol, this.x, this.y);
        } else {
          ctx.fillStyle = this.color;
          ctx.shadowColor = this.color;
          ctx.shadowBlur = 20;
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.restore();
      }
    }

    const handleMouseMove = (e: MouseEvent) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      
      // Update trail
      trail.current.push({ x: mouseX, y: mouseY, size: 5 });
      if (trail.current.length > 20) trail.current.shift();

      // Add particles
      const count = isCoderMode ? 1 : 2;
      for (let i = 0; i < count; i++) {
        particles.push(new Particle(mouseX, mouseY));
      }

      lastMousePos.current = { x: mouseX, y: mouseY };
    };

    const drawTrail = () => {
      if (!ctx || trail.current.length < 2) return;

      ctx.beginPath();
      ctx.moveTo(trail.current[0].x, trail.current[0].y);

      for (let i = 1; i < trail.current.length; i++) {
        const point = trail.current[i];
        ctx.lineTo(point.x, point.y);
      }

      ctx.strokeStyle = isCoderMode ? 'rgba(100, 200, 255, 0.3)' : 'rgba(255, 200, 100, 0.3)';
      ctx.lineWidth = 2;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      ctx.stroke();
    };

    const animate = () => {
      if (!ctx || !canvas || !isVisible.current) {
        animationFrameId = requestAnimationFrame(animate);
        return;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw trail
      //drawTrail();

      // Update and draw particles
      for (let i = particles.length - 1; i >= 0; i--) {
        particles[i].update();
        particles[i].draw();

        if (particles[i].life <= 0 || particles[i].size < 0.3) {
          particles.splice(i, 1);
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      console.log('Canvas resized:', canvas.width, canvas.height);
    };

    // Initial setup
    handleResize();
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);
    
    // Start animation
    console.log('Starting animation');
    animate();

    // Cleanup
    return () => {
      console.log('Cleaning up InteractiveEffects');
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [isPainterMode, isCoderMode]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[100]"
      style={{ 
        opacity: 0.9,
        width: '100vw',
        height: '100vh',
        position: 'fixed',
        top: 0,
        left: 0,
      }}
    />
  );
}
