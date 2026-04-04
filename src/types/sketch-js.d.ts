declare module 'sketch-js' {
  interface SketchInstance {
    touches: Array<{
      ox: number;
      oy: number;
      x: number;
      y: number;
    }>;
    lineCap: string;
    lineJoin: string;
    fillStyle: string;
    strokeStyle: string;
    lineWidth: number;
    beginPath(): void;
    moveTo(x: number, y: number): void;
    lineTo(x: number, y: number): void;
    stroke(): void;
    destroy(): void;
  }

  interface SketchOptions {
    container: HTMLElement | null;
    autoclear: boolean;
    retina: string;
    click?: (this: SketchInstance) => void;
    touchmove?: (this: SketchInstance) => void;
    touchend?: (this: SketchInstance) => void;
    mouseover?: (this: SketchInstance) => void;
    touchstart?: (this: SketchInstance) => void;
  }

  interface Sketch {
    create: (options: SketchOptions) => SketchInstance;
  }

  const sketch: Sketch;
  export default sketch;
} 