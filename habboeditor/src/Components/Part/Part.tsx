import classNames from "classnames";
import { useState } from "react";
import { ItemModel } from "../Stage/Stage";
import styles from './Part.module.css';

interface PartProps {
    habboImagerUrl: string
    item: ItemModel
    direction: number
    setEditorModel: (items: ItemModel[]) => void
    editorModel: ItemModel[]
}





export default function Part(props: PartProps) {
    const [colorPage, setColorPage] = useState<number>(0);
    const pages: number = (props.item.currentSpriteIndex) ? Math.floor(props.item.sprites[props.item.currentSpriteIndex].colors.length / 16) : 0;
    let headonly: boolean = false;

    if (props.item.type === "hd") {
        headonly = true;
    }


    function onColorClick(color: string) {
        let copy = [...props.editorModel];

        copy[props.editorModel.indexOf(props.item)].currentColorIndex = findIndexOfColor(color)+1;
        copy[props.editorModel.indexOf(props.item)].currentColor = color;
        
        props.setEditorModel(copy);
    }


    function nextSprite() {
        let spriteIndex = (props.item.currentSpriteIndex) ? props.item.currentSpriteIndex : 0;
        if(props.item.sprites.length-1 === spriteIndex) {
            spriteIndex = 0;
        } else {
            spriteIndex += 1;
        }

        let copy = [...props.editorModel];

        copy[props.editorModel.indexOf(props.item)].currentSpriteIndex = spriteIndex;
        copy[props.editorModel.indexOf(props.item)].currentSprite = props.item.sprites[spriteIndex].sprite;
        copy[props.editorModel.indexOf(props.item)].currentColorIndex = 1;
        copy[props.editorModel.indexOf(props.item)].currentColor = props.item.sprites[spriteIndex].colors[0];

        console.log(spriteIndex)
        props.setEditorModel(copy);
    }

    function prevSprite() {
        let spriteIndex = (props.item.currentSpriteIndex) ? props.item.currentSpriteIndex : 0;
        if(props.item.currentSpriteIndex === 0) {
            spriteIndex = props.item.sprites.length-1;
        } else {
            spriteIndex -= 1;
        }

        let copy = [...props.editorModel];

        console.log(props.item.sprites[spriteIndex].sprite)

        copy[props.editorModel.indexOf(props.item)].currentSpriteIndex = spriteIndex;
        copy[props.editorModel.indexOf(props.item)].currentSprite = props.item.sprites[spriteIndex].sprite;
        copy[props.editorModel.indexOf(props.item)].currentColorIndex = 1;
        copy[props.editorModel.indexOf(props.item)].currentColor = props.item.sprites[spriteIndex].colors[0];
        console.log(copy);
        console.log(spriteIndex)
        props.setEditorModel(copy);
    }


    function nextColorPage() {
        if(colorPage === pages) {
            setColorPage(0);
        } else {
            setColorPage(colorPage+1);
        }
    }

    function prevColorPage() {
        if(colorPage === 0) {
            setColorPage(pages);
        } else {
            setColorPage(colorPage-1);
        }
    }
    function findIndexOfColor(color:string):number {
        if(props.item.currentSpriteIndex) {
            return props.item.sprites[props.item.currentSpriteIndex].colors.indexOf(color);
        }
        return 0;
    }

    if (props.item.currentColorIndex !== undefined && props.item.currentColor !== undefined && props.item.currentSpriteIndex !== undefined && props.item.currentSprite !== undefined) {
        const colorIndexWithZero = (props.item.currentColorIndex > 9) ? props.item.currentColorIndex : ('0' + props.item.currentColorIndex?.toString().slice(-2));
        return (
            <div className={styles.part_container}>
                <div className={styles.part_selector}>
                    <div className={classNames(styles.control, styles.control_prev)}>
                        <button onClick={prevSprite}>Prev</button>
                    </div>
                    <div className={styles.part}>
                        <div className={styles.part_img_container}>
                            <img src={`${props.habboImagerUrl}?figure=${props.item.currentSprite}${colorIndexWithZero}&action=std&direction=${props.direction}&gesture=std&head_direction=${props.direction}&head=${headonly}`} alt="habbo" draggable={false} />
                        </div>
                   </div>
                    <div className={classNames(styles.control, styles.control_next)}>
                        <button onClick={nextSprite}>Next</button>
                    </div>
                </div>
                <div className={styles.part_color_selector}>
                    {pages > 0 && <div className={classNames(styles.color_control, styles.color_prev)}>
                        <button onClick={prevColorPage}>Prev</button>
                    </div>}

                    <ul>
                        {props.item.sprites[props.item.currentSpriteIndex].colors.slice(16*colorPage, 16*(colorPage+1)).map((color, index) => {
                            
                            return (<li key={index} onClick={() => onColorClick(color)} className={classNames(styles.part_color, { [styles.part_color_active]: color === props.item.currentColor })}><span ><i style={{ backgroundColor: `#${color}` }}></i></span></li>)
                        })}
                    </ul>
                    {pages > 0 && <div className={classNames(styles.color_control, styles.color_next)}>
                        <button onClick={nextColorPage}>Next</button>
                    </div>}
                </div>
            </div>
        );
    }

    return <strong>Model parsed to part.tsx is broken</strong>

}