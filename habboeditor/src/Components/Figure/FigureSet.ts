import FigurePart from "./FigurePart";

export default class FigureSet {
  public FigureParts: FigurePart[];
  public HiddenLayers: string[];
  public SetType: string;
  public Id: string;
  public Gender: string;
  public Club: boolean;
  public Colourable: boolean;
  public Selectable: boolean;

  public constructor(
    setType: string,
    id: string,
    gender: string,
    club: boolean,
    colourable: boolean,
    selectable: boolean
  ) {
    this.SetType = setType;
    this.Id = id;
    this.Gender = gender;
    this.Club = club;
    this.Colourable = colourable;
    this.Selectable = selectable;
    this.FigureParts = new Array<FigurePart>();
    this.HiddenLayers = new Array<string>();
  }
}
