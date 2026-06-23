import { useEffect, useRef } from 'react';

export default function CursorParticles() {
    const containerRef = useRef(null);
    const canvasRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        const sectionEl = container.parentElement; // the <section> this is mounted inside
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        let width, height;
        function resize() {
            const rect = container.getBoundingClientRect();
            width = canvas.width = rect.width;
            height = canvas.height = rect.height;
        }
        resize();

        const resizeObserver = new ResizeObserver(resize);
        resizeObserver.observe(container);

        const mouse = { x: width / 2, y: height / 2, active: false };

        function handleMouseMove(e) {
            const rect = container.getBoundingClientRect();
            mouse.x = e.clientX - rect.left;
            mouse.y = e.clientY - rect.top;
            mouse.active = true;
        }
        function handleMouseLeave() {
            mouse.active = false;
        }
        sectionEl.addEventListener('mousemove', handleMouseMove);
        sectionEl.addEventListener('mouseleave', handleMouseLeave);

        const colors = ['#4a4a4a', '#5e5e5e', '#737373', '#8c8c8c', '#a3a3a3'];

        class Particle {
            constructor(x, y) {
                this.x = x;
                this.y = y;
                this.baseX = x;
                this.baseY = y;
                this.size = Math.random() * 0.8 + 1.1;
                this.angle = Math.random() * Math.PI * 2;
                this.radius = Math.random() * 3.5 + 1.5;
                this.speed = (Math.random() - 0.5) * 0.008;
                this.vx = (Math.random() - 0.5) * 0.3;
                this.vy = (Math.random() - 0.5) * 0.3;
                this.life = 1;
                this.decay = Math.random() * 0.006 + 0.004;
                this.color = colors[Math.floor(Math.random() * colors.length)];
            }

            update() {
                this.angle += this.speed;
                const orbitX = Math.cos(this.angle) * this.radius;
                const orbitY = Math.sin(this.angle) * this.radius * 0.65;
                const targetX = this.baseX + orbitX;
                const targetY = this.baseY + orbitY;

                this.vx += (targetX - this.x) * 0.009;
                this.vy += (targetY - this.y) * 0.009;

                const dx = this.x - mouse.x;
                const dy = this.y - mouse.y;
                const dist = Math.hypot(dx, dy);
                if (mouse.active && dist < 420 && dist > 8) {
                    const force = ((420 - dist) / 420) * 1.6;
                    this.vx += (dx / dist) * force;
                    this.vy += (dy / dist) * force;
                }

                this.x += this.vx;
                this.y += this.vy;

                this.vx *= 0.955;
                this.vy *= 0.955;
                this.life -= this.decay;
            }

            draw() {
                ctx.globalAlpha = Math.max(this.life * 0.92, 0.12);
                ctx.fillStyle = this.color;
                ctx.shadowBlur = 5;
                ctx.shadowColor = this.color;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        let particles = [];
        const maxParticles = 320;

        function initParticles() {
            particles = [];
            const centerX = width / 2;
            const centerY = height / 2;
            const spread = Math.min(width, height) * 0.55;
            for (let i = 0; i < maxParticles; i++) {
                const angle = Math.random() * Math.PI * 2;
                const radius = 90 + Math.random() * spread;
                const x = centerX + Math.cos(angle) * radius;
                const y = centerY + Math.sin(angle) * (radius * 0.72);
                particles.push(new Particle(x, y));
            }
        }

        function spawnAroundMouse() {
            if (!mouse.active) return;
            // spawn 2 per frame, distributed evenly around a wide ring
            for (let i = 0; i < 2; i++) {
                const angle = Math.random() * Math.PI * 2;
                const minRadius = 160;
                const maxRadius = 420; // wider spread than before
                const radius = minRadius + Math.random() * (maxRadius - minRadius);
                const x = mouse.x + Math.cos(angle) * radius;
                const y = mouse.y + Math.sin(angle) * radius;
                particles.push(new Particle(x, y));
            }
        }

        let animationId;
        function animate() {
            ctx.clearRect(0, 0, width, height);

            spawnAroundMouse();

            for (let i = particles.length - 1; i >= 0; i--) {
                const p = particles[i];
                p.update();
                p.draw();
                if (p.life <= 0) {
                    particles.splice(i, 1);
                }
            }

            if (particles.length > maxParticles * 1.35) {
                particles.splice(0, 15);
            }

            ctx.globalAlpha = 1;
            animationId = requestAnimationFrame(animate);
        }

        initParticles();
        animate();

        return () => {
            resizeObserver.disconnect();
            sectionEl.removeEventListener('mousemove', handleMouseMove);
            sectionEl.removeEventListener('mouseleave', handleMouseLeave);
            cancelAnimationFrame(animationId);
        };
    }, []);

    return (
        <div ref={containerRef} className="cursor-particles-wrap">
            <canvas ref={canvasRef} className="cursor-particles-canvas" />
        </div>
    );
}