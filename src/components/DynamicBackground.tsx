
import { useEffect, useRef } from 'react';

const DynamicBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const mousePos = useRef({ x: 0, y: 0 });
  const particles = useRef<Array<{
    x: number;
    y: number;
    vx: number;
    vy: number;
    size: number;
    opacity: number;
    baseOpacity: number;
  }>>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    // Initialize fewer particles for cleaner look
    const initParticles = () => {
      particles.current = [];
      for (let i = 0; i < 30; i++) {
        const baseOpacity = Math.random() * 0.2 + 0.05;
        particles.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          size: Math.random() * 1.5 + 0.5,
          opacity: baseOpacity,
          baseOpacity: baseOpacity
        });
      }
    };

    const animate = () => {
      // Cleaner background with subtle fade
      ctx.fillStyle = 'rgba(0, 0, 0, 0.03)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.current.forEach((particle, index) => {
        // Update particle position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Boundary check with smooth bounce
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.vx *= -0.8;
          particle.x = Math.max(0, Math.min(canvas.width, particle.x));
        }
        if (particle.y < 0 || particle.y > canvas.height) {
          particle.vy *= -0.8;
          particle.y = Math.max(0, Math.min(canvas.height, particle.y));
        }

        // Enhanced mouse interaction
        const dx = mousePos.current.x - particle.x;
        const dy = mousePos.current.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 200) {
          const force = (200 - distance) / 200;
          const attractionForce = force * 0.05;
          
          // Stronger attraction to cursor
          particle.vx += (dx / distance) * attractionForce;
          particle.vy += (dy / distance) * attractionForce;
          
          // Dynamic opacity and size based on proximity
          particle.opacity = Math.min(0.9, particle.baseOpacity + force * 0.4);
          const dynamicSize = particle.size * (1 + force * 2);
          
          // Draw enhanced particle near cursor
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, dynamicSize, 0, Math.PI * 2);
          
          // Gradient effect for particles near cursor
          const gradient = ctx.createRadialGradient(
            particle.x, particle.y, 0,
            particle.x, particle.y, dynamicSize * 2
          );
          gradient.addColorStop(0, `rgba(239, 68, 68, ${particle.opacity})`);
          gradient.addColorStop(1, `rgba(239, 68, 68, 0)`);
          
          ctx.fillStyle = gradient;
          ctx.fill();
        } else {
          // Fade back to base opacity
          particle.opacity = Math.max(particle.baseOpacity, particle.opacity - 0.02);
          
          // Draw normal particle
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(239, 68, 68, ${particle.opacity})`;
          ctx.fill();
        }

        // Velocity dampening for smoother movement
        particle.vx *= 0.98;
        particle.vy *= 0.98;

        // Enhanced connections only for close particles
        particles.current.forEach((otherParticle, otherIndex) => {
          if (index !== otherIndex) {
            const dx2 = particle.x - otherParticle.x;
            const dy2 = particle.y - otherParticle.y;
            const distance2 = Math.sqrt(dx2 * dx2 + dy2 * dy2);

            if (distance2 < 80) {
              const lineOpacity = 0.15 * (1 - distance2 / 80);
              
              ctx.beginPath();
              ctx.moveTo(particle.x, particle.y);
              ctx.lineTo(otherParticle.x, otherParticle.y);
              ctx.strokeStyle = `rgba(239, 68, 68, ${lineOpacity})`;
              ctx.lineWidth = 0.5;
              ctx.stroke();
            }
          }
        });
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    initParticles();
    animate();

    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ background: 'linear-gradient(135deg, #000000 0%, #0a0a0a 50%, #000000 100%)' }}
    />
  );
};

export default DynamicBackground;
