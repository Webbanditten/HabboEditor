export default interface FigureData {
    c: string;
    g: Gender[];
}

export interface Gender {
    i: string;
    t: Type[];
}

export interface Type {
    i: I;
    s: Sprite[];
}

export enum I {
    Bd = "bd",
    Ch = "ch",
    Ey = "ey",
    Fc = "fc",
    HD = "hd",
    Hr = "hr",
    Lg = "lg",
    Lh = "lh",
    Ls = "ls",
    Rh = "rh",
    Rs = "rs",
    Sh = "sh",
}

export interface Sprite {
    i:  string;
    ps: Part;
    cs: string[];
}

export interface Part {
    t: I;
    value: string;
}
