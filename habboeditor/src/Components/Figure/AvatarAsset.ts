import FigurePart from "./FigurePart";
import FigureSet from "./FigureSet";

export default class AvatarAsset
    {
        public  Name: string;
        public  X: number;
        public  Y: number;
        public  ImageX: number;
        public  ImageY: number;
        public  FileName: string;
        public  Part: FigurePart;
        public  Set: FigureSet;
        public  Parts: string[];
        public  RenderOrder: number;
        public  IsDrinkCanvas: boolean;

        public constructor( isSmall: boolean,  action:string,  name: string,  fileName: string,  X: number,  Y: number,  part: FigurePart,  set: FigureSet,  canvasW: number,  canvasH:number, parts:string[] )
        {
            this.Name = name;
            this.X = X;
            this.Y = Y;
            this.FileName = fileName;
            this.Part = part;
            this.Set = set;
            this.Parts = parts;
            this.RenderOrder = this.Part.OrderId;
            this.IsDrinkCanvas = false;

            if (action === "lay")
            {
                this.ImageY = Y + (canvasW / 2) + (isSmall ? -5 : -20);
                this.ImageX = X + (canvasH / 2) - (isSmall ? -11 : -10);
            }
            else
            {
                this.ImageX = X + (canvasW / 2) + (isSmall ? 5 : 10);
                this.ImageY = Y + (canvasH / 2) - (isSmall ? 11 : 20);
            }
        }

    }