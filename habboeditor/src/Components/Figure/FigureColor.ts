export default class FigureColor
{
    public ColourId: string;
    public Index: string;
    public IsClubRequired: boolean;
    public IsSelectable: boolean;
    public HexColor: string;

    public constructor(colourId: string, index: string, isClubRequired: boolean, isSelectable: boolean, HexColor: string)
    {
        this.ColourId = colourId;
        this.Index = index;
        this.IsClubRequired = isClubRequired;
        this.IsSelectable = isSelectable;
        this.HexColor = HexColor;
    }
}
