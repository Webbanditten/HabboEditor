import React, { useEffect, useState } from 'react';
import Config from '../../Types/Config';
import Figure from '../Figure/Figure';
import styles from './Stage.module.css';
import classNames from "classnames";
import Part from '../Part/Part';

interface StageProps {
    config: Config
}

enum TurnDirection {
    left,
    right
}

interface Sprite {
    sprite: number;
    colors: string[],
}

export interface ItemModel {
    currentSpriteIndex?: number
    type: string
    currentSprite?: number
    currentColor?: string
    currentColorIndex?: number
    sprites: Sprite[]
}

function getSelectedColorIndex(item: ItemModel): number {
    item.sprites.forEach((sprite) => {
        if(sprite.sprite === item.currentSprite) {
            sprite.colors.forEach(color => {
                if(color === item.currentColor) {
                    return sprite.colors.indexOf(item.currentColor);
                }
            });
        }
    })
    return 0;
}



function buildEditorModel(config: Config): ItemModel[] {
    var editorModel: ItemModel[] = [];
    console.log("---------------- BUILDING MODEL ---------------")
    const currentSpritesWithColor = config.figure.match(/.{1,5}/g);
    console.log(currentSpritesWithColor)
    config.processedFiguredata?.g.forEach((gender) => {
        if (gender.i === config.gender) {

            gender.t.forEach((type) => {
                const typeName = type.i;
                const tmpModel: ItemModel = {
                    type: typeName,
                    sprites: type.s.map((v) => { return { sprite: parseInt(v.i), colors: v.cs } }),
                };

                currentSpritesWithColor?.forEach((currentSpriteWithColor) => {
                    const currentSprite = parseInt(currentSpriteWithColor.substring(0, 3));
                    const currentColor: number = parseInt(currentSpriteWithColor.substring(4, 5));
                    // Lets find the current selected sprite and color 
                    tmpModel.sprites.forEach((sprite, spriteindex) => {

                        if (sprite.sprite === currentSprite) {
                            tmpModel.currentSprite = sprite.sprite;
                            tmpModel.currentSpriteIndex = spriteindex;
                            tmpModel.currentColor = sprite.colors[currentColor-1];
                            tmpModel.currentColorIndex = currentColor;
                        }
                    });

                    
                })
                editorModel.push(tmpModel);
            });
        }
    });
    return editorModel;
}

export default function Stage(props: StageProps) {
    const [direction, setDirection] = useState<number>(4);
    const [gender, setGender] = useState<string>(props.config.gender);
    const [editorModel, setEditorModel] = useState<ItemModel[]>();

    useEffect(() => {
        if(!editorModel) {
            setEditorModel(buildEditorModel(props.config));
        }
    }, [editorModel, props.config])

    function updateModel(items: ItemModel[]) {
        console.log(items);
        console.log(editorModel)
        setEditorModel(items);
    }

    const modifyDirection = (turnDirection: TurnDirection) => {
        if (turnDirection === TurnDirection.left) {
            if (direction === 7) {
                setDirection(0);
            } else {
                setDirection(direction + 1);
            }
        } else {
            if (direction === 0) {
                setDirection(7);
            } else {
                setDirection(direction - 1);
            }
        }
    }
    if(!editorModel) {
        return <strong>what</strong>
    }
    return (<>
        <div className={styles.stage}>
            <div className={styles.gender}>
                <div className={styles.gender_option}>
                    <label className={styles.gender_label} id="male" label-for="male">{props.config.locale.boy}</label>
                    <input className={styles.gender_radio} value="M" onChange={() => setGender("M")} checked={(gender === "M")} type="radio" name="male" id="male" />
                </div>
                <div className={styles.gender_option}>
                    <label className={styles.gender_label} id="male">{props.config.locale.girl}</label>
                    <input className={styles.gender_radio} value="F" onChange={() => setGender("F")} checked={(gender === "F")} type="radio" name="male" id="male" />
                </div>
            </div>
            <div className={styles.editor}>
                {editorModel.map((v, index) => {
                    return <Part key={index} editorModel={editorModel} setEditorModel={updateModel} direction={2} item={v} habboImagerUrl={props.config.habboimager} />
                })}
            </div>

            

            <div className={styles.figure}>
                <Figure items={editorModel} direction={direction} habboImagerUrl={props.config.habboimager} />
                <div className={styles.figureControl}>
                    <button className={classNames(styles.control_button, styles.turn_left)} onClick={() => modifyDirection(TurnDirection.left)}></button>
                    <button className={classNames(styles.control_button, styles.turn_right)} onClick={() => modifyDirection(TurnDirection.right)}></button>
                </div>
            </div>

        </div>

    </>);
}