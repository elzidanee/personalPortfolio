"use client";

import React, { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseRadius: number;
  color: string;
  alpha: number;
}

export const ParticlesBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const colors = ["#00e5c3", "#38bdf8", "#818cf8", "#5b7fff"];
    const particleCount = Math.min(Math.floor((width * height) / 14000), 95);
    const maxConnectionDistance = 110;
    const mouseRadius = 140;

    const mouse = {
      x: -1000,
      y: -1000,
      active: false,
    };

    // Initialize particles
    const particles: Particle[] = [];
    for (let i = 0; i < particleCount; i++) {
      const radius = Math.random() * 1.8 + 1.2;
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.65,
        vy: (Math.random() - 0.5) * 0.65,
        radius,
        baseRadius: radius,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: Math.random() * 0.5 + 0.35,
      });
    }

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handlePointerMove = (e: PointerEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
    };

    const handlePointerLeave = () => {
      mouse.active = false;
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("pointermove", handlePointerMove);
    document.addEventListener("mouseleave", handlePointerLeave);

    // Animation Loop
    let isRunning = true;
    const handleVisibilityChange = () => {
      isRunning = !document.hidden;
      if (isRunning) loop();
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);

    const isLightMode = () =>
      document.body.getAttribute("data-theme") === "light";

    const loop = () => {
      if (!isRunning) return;

      ctx.clearRect(0, 0, width, height);
      const light = isLightMode();

      // Update & Draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Move
        p.x += p.vx;
        p.y += p.vy;

        // Bounce on boundaries
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // Mouse interaction (gentle push & proximity glow)
        if (mouse.active) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < mouseRadius) {
            const force = (1 - dist / mouseRadius) * 2.2;
            const angle = Math.atan2(dy, dx);
            p.x -= Math.cos(angle) * force;
            p.y -= Math.sin(angle) * force;
            p.radius = p.baseRadius * 1.6;

            // Draw laser connection to cursor
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = light
              ? `rgba(14, 165, 233, ${(1 - dist / mouseRadius) * 0.25})`
              : `rgba(0, 229, 195, ${(1 - dist / mouseRadius) * 0.35})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          } else {
            p.radius = p.baseRadius;
          }
        }

        // Draw particle node
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = light
          ? `rgba(59, 130, 246, ${p.alpha * 0.6})`
          : p.color;
        ctx.shadowBlur = light ? 0 : 8;
        ctx.shadowColor = p.color;
        ctx.fill();
        ctx.shadowBlur = 0;

        // Connect nearby particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y);

          if (dist < maxConnectionDistance) {
            const alpha = (1 - dist / maxConnectionDistance) * 0.22;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = light
              ? `rgba(100, 116, 139, ${alpha * 0.8})`
              : `rgba(0, 229, 195, ${alpha})`;
            ctx.lineWidth = 0.65;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(loop);
    };

    loop();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("pointermove", handlePointerMove);
      document.removeEventListener("mouseleave", handlePointerLeave);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="reactbits-particles"
      style={{ zIndex: -1 }}
      className="fixed inset-0 w-full h-full pointer-events-none select-none opacity-75"
    />
  );
};
