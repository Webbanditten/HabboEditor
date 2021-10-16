export default class FigureSetType {
  public Set: string;
  public PaletteId: number;
  public IsMandatory: boolean;

  public constructor(set: string, paletteId: number, isMandatory: boolean) {
    this.Set = set;
    this.PaletteId = paletteId;
    this.IsMandatory = isMandatory;
  }
}
