"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

import { useSelector } from "react-redux";
import AuthInitializer from "../Redux/sliceAuthorizer";
import { usePathname } from "next/navigation";

const Fireworks = () => {
    const [open, setOpen] = useState(false);
    const [Isopen, setIsOpen] = useState(false);
    const path = usePathname();
    const pathname = usePathname();
    const cartItems = useSelector((state: any) => state.cart.items); // Get items from Redux state

  const targetDate = new Date("2025-04-01T00:00:00"); // Opening date
  const [timeRemaining, setTimeRemaining] = useState("Calculating...");

  useEffect(() => {
    const updateCounter = () => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeRemaining("We are live!");
        clearInterval(interval);
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeRemaining(`${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds`);
    };

    const interval = setInterval(updateCounter, 1000);
    updateCounter(); // Initial call

    return () => clearInterval(interval);
  }, [targetDate]);

  useEffect(() => {
    const canvas = document.getElementById("fireworks");
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    class Firework {
      constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.explosionParticles = [];
        for (let i = 0; i < 50; i++) {
          this.explosionParticles.push(new Particle(this.x, this.y, this.color));
        }
      }
      draw() {
        this.explosionParticles.forEach((particle) => particle.update());
      }
    }

    class Particle {
      constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.angle = Math.random() * 2 * Math.PI;
        this.speed = Math.random() * 4 + 1;
        this.radius = Math.random() * 2 + 1;
        this.life = 100;
        this.decay = Math.random() * 0.01 + 0.005;
      }
      update() {
        this.x += Math.cos(this.angle) * this.speed;
        this.y += Math.sin(this.angle) * this.speed;
        this.radius -= this.decay;
        if (this.radius > 0) {
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
          ctx.fillStyle = this.color;
          ctx.fill();
        }
      }
    }

    const fireworks = [];
    const createFirework = () => {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const colors = ["#ff0044", "#44ff00", "#0044ff", "#ffcc00", "#ff00cc"];
      const color = colors[Math.floor(Math.random() * colors.length)];
      fireworks.push(new Firework(x, y, color));
    };

    const animateFireworks = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      fireworks.forEach((firework, index) => {
        firework.draw();
        if (firework.explosionParticles.every((p) => p.radius <= 0)) {
          fireworks.splice(index, 1);
        }
      });
      requestAnimationFrame(animateFireworks);
    };

    const fireworkInterval = setInterval(createFirework, 500);
    animateFireworks();

    return () => clearInterval(fireworkInterval);
  }, []);

  return (
    <div className="flex flex-col justify-center items-center p-4 uppercase text-center text-gray-100 bg-secondary min-h-96 md:min-h-screen">
      <canvas id="fireworks" className="fixed top-0 left-0 w-full h-full" style={{pointerEvents: "none" }}></canvas>
      <div id="date" className="scroll-mb-4 text-2xl font-bold text-primary md:text-5xl">
        Opening Date: 01 April 2025
      </div>
      <h1 className="text-3xl m-4">Coming Soon</h1>
      <div id="counter" style={{ fontSize: "1rem" }}>{timeRemaining}</div>
      <Link
        href={`https://wa.me/+256705746131?text=${encodeURIComponent("Hello! I'm interested in your services.")}`}
          className='bg-primary font-bold font-body tracking-wide  text-sm my-20 w-[80%] md:w-[20%] rounded-full mb-3 text-center hover:bg-red-800 text-white p-3 '
          >
            Try Day Pass!
      </Link>
    </div>
  );
};

export default Fireworks;
