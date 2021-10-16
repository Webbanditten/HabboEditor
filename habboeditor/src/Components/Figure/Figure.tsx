/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useRef } from "react";
import { ItemModel } from "../Stage/Stage";



interface FigureProps {
    habboImagerUrl: string
    items: ItemModel[]
    direction: number
}

export function GenerateFigureString(items:ItemModel[]): string {
    let figure: string = "";
    items.forEach((item: ItemModel) => {
        figure += `${item.currentSprite}`;
        if(item.currentColorIndex && item.currentColorIndex > 9) {
            figure += `${item.currentColorIndex}`;
        } else {
            figure += `${('0' + item.currentColorIndex?.toString().slice(-2))}`;
        }
    });
    return figure;
}


interface CanvasProps {
  width: number;
  height: number;
}

const Canvas = ({ width, height }: CanvasProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
      if (canvasRef.current) {
          const canvas = canvasRef.current;
          const context = canvas.getContext('2d');  
          if(context !== null) {
            let base_image = new Image();
            base_image.src = 'static/images/mix.png';
            base_image.onload = function(){
              context.drawImage(base_image, 0, 0);
            }
          }
          
      }       
  },[]);

  return <canvas ref={canvasRef} height={height} width={width} />;
};


export default function Figure(props: FigureProps) {
  let Figure: string;
  let IsSmall: boolean;
  let BodyDirection: number;
  let headDirection: number;
  let FiguredataReader: Array<any>;
  let Action: string; // stand
  let Gesture: string;
  let arryItem : number;
  let Frame: number;
  let CarryDrink: number;

  let BodyCanvas: HTMLCanvasElement;
  let FaceCanvas: HTMLCanvasElement;
  let DrinkCanvas: HTMLCanvasElement;

  let CANVAS_HEIGHT = 110;
  let CANVAS_WIDTH = 64;
  let renderEntireFigure: boolean;
  let IsOldFigure: boolean;
  let Size: string;


  return <Canvas height={100} width={100}></Canvas>;

}