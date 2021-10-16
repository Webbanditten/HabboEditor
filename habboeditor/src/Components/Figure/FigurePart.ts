export default class FigurePart
{
    public Id: string;
    public Type: string;
    public Colorable: boolean;
    public Index: number;
    public OrderId: number;
    public HexColor: string;

    public constructor(id: string, type: string, colorable: boolean, index: number, hexColor: string)
    {
        this.Id = id;
        this.Type = type;
        this.Colorable = colorable;
        this.Index = index;
        this.OrderId = this.GetOrder();
        this.HexColor = hexColor;

    }

    private GetOrder()
    {
        switch (this.Type)
        {
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
                return 29;//20;
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
                return 7;
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