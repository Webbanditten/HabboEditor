export default class OldFigurePart {
  public Sprite: string;
  public Type: string;
  public Index: number;
  public OrderId: number;
  public Value: string;

  public constructor(
    sprite: string,
    type: string,
    index: number,
    value: string
  ) {
    this.Sprite = sprite;
    this.Type = type;
    this.Index = index;
    this.Value = value;
    this.OrderId = this.GetOrder();
  }

  private GetOrder(): number {
    switch (this.Type) {
      case "sh":
        return 5;
      case "lg":
        return 6;
      case "ch":
        return 7;
      case "wa":
        return 8;
      case "ca":
        return 9;
      case "fa":
        return 27;
      case "ea":
        return 28;
      case "ha":
        return 29;
      case "he":
        return 29; //20;
      case "cc":
        return 21;
      case "cp":
        return 6;
      case "hd":
        return 22;
      case "bd":
        return 1;
      case "fc":
        return 23;
      case "hr":
        return 24;
      case "lh":
        return 5;
      case "ls":
        return 6;
      case "rh":
        return 10;
      case "rs":
        return 11;
      case "ey":
        return 24;
      case "li":
        return 0;
      case "hrb":
        return 26;
      case "ri":
        return 9;
      case "lc":
        return 23;
      case "rc":
        return 24;
      case "fx":
        return 100;
    }

    return -1;
  }
}
