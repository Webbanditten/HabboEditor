import OldFigurePart from "./OldFigurePart";

export default class FigureSprite {
  public FigureParts: OldFigurePart[];
  public SetType: string;
  public Id: string;
  public Gender: string;

  public constructor(
    setType: string,
    id: string,
    gender: string,
    parts: OldFigurePart[]
  ) {
    this.SetType = setType;
    this.Id = id;
    this.Gender = gender;
    this.FigureParts = parts;
  }
}
