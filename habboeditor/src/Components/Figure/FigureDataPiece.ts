import FigureSprite from "./FigureSprite";
import OldFigureColor from "./OldFigureColor";

export default class FigureDataPiece {
  public Sprite: FigureSprite;
  public Colors: OldFigureColor[];
  public Gender: string;

  public constructor(
    sprite: FigureSprite,
    colors: OldFigureColor[],
    gender: string
  ) {
    this.Sprite = sprite;
    this.Colors = colors;
    this.Gender = gender;
  }
}
