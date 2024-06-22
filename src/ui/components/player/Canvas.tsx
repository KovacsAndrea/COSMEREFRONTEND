import { useRef, useState, useEffect } from "react";
import { Sprite } from "./Sprite.tsx";


const Canvas: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const [context, setContext] = useState<CanvasRenderingContext2D | null>(null);
    const [player, setPlayer] = useState<Sprite | null>(null);
    const [enemy, setEnemy] = useState<Sprite | null>(null);
  
    const resizeCanvas = () => {
      const canvas = canvasRef.current;
      if (canvas) {
        const context = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
  
        if (context) {
          setContext(context);
          context.fillStyle = 'transparent';
          context.fillRect(0, 0, canvas.width, canvas.height);
        }
      }
    };
  
    useEffect(() => {
      resizeCanvas();
      window.addEventListener('resize', resizeCanvas);
  
      return () => {
        window.removeEventListener('resize', resizeCanvas);
      };
    }, []);
  
    useEffect(() => {
      if (context) {
        const player = new Sprite({ x: 0, y: 0 }, { x: 1, y: 1 }, context);
        const enemy = new Sprite({ x: 400, y: 100 }, { x: -1, y: -1 }, context);
        setPlayer(player);
        setEnemy(enemy);
      }
    }, [context]);
  
    useEffect(() => {
      const animate = () => {
        if (player && enemy) {
          player.update();
          enemy.update();
        }
        requestAnimationFrame(animate);
      };
      animate();
    }, [player, enemy]);
  
    return <canvas ref={canvasRef} />;
  };
  
  export default Canvas;