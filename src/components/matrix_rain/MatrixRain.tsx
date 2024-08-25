import React, { useRef, useEffect } from "react";

const MatrixRain: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const canvasRef2 = useRef<HTMLCanvasElement>(null);

  const charArr = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  const fontSize = 16;
  const fallingCharArr: Point[] = [];

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    const canvas2 = canvasRef2.current!;
    const ctx2 = canvas2.getContext("2d")!;

    const cw = window.innerWidth;
    const ch = window.innerHeight;
    const maxColums = cw / fontSize;

    canvas.width = canvas2.width = cw;
    canvas.height = canvas2.height = ch;

    for (let i = 0; i < maxColums; i++) {
      fallingCharArr.push(
        new Point(i * fontSize, randomFloat(-500, 0), fontSize, ch)
      );
    }

    const update = () => {
      ctx.fillStyle = "rgba(0,0,0,0.05)";
      ctx.fillRect(0, 0, cw, ch);

      ctx2.clearRect(0, 0, cw, ch);

      fallingCharArr.forEach((point) => point.draw(ctx, ctx2, charArr));

      requestAnimationFrame(update);
    };

    update();
  }, []);

  return (
    <>
      <canvas ref={canvasRef}></canvas>
      <canvas
        ref={canvasRef2}
        style={{ position: "absolute", top: 0, left: 0 }}
      ></canvas>
    </>
  );
};

class Point {
  x: number;
  y: number;
  fontSize: number;
  ch: number;
  value: string;
  speed: number;

  constructor(x: number, y: number, fontSize: number, ch: number) {
    this.x = x;
    this.y = y;
    this.fontSize = fontSize;
    this.ch = ch;
    this.value = "";
    this.speed = 0;
  }

  draw(
    ctx: CanvasRenderingContext2D,
    ctx2: CanvasRenderingContext2D,
    charArr: string[]
  ) {
    this.value = charArr[randomInt(0, charArr.length - 1)].toUpperCase();
    this.speed = randomFloat(1, 5);

    ctx2.fillStyle = "rgba(255,255,255,0.6)";
    ctx2.font = `${this.fontSize}px san-serif`;
    ctx2.fillText(this.value, this.x, this.y);

    ctx.fillStyle = "#3F9CFF";
    ctx.font = `${this.fontSize}px san-serif`;
    ctx.fillText(this.value, this.x, this.y);

    this.y += this.speed;
    if (this.y > this.ch) {
      this.y = randomFloat(-100, 0);
      this.speed = randomFloat(2, 5);
    }
  }
}

function randomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min) + min);
}

function randomFloat(min: number, max: number): number {
  return Math.random() * (max - min) + min;
}

export default MatrixRain;
