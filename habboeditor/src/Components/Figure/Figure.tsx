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


export default function Figure(props: FigureProps) {
   
    const figure = GenerateFigureString(props.items);
    return (<img src={`${props.habboImagerUrl}?figure=${figure}&action=std&direction=${props.direction}&gesture=std&head_direction=${props.direction}&size=l`} alt="habbo" draggable={false} />);
}