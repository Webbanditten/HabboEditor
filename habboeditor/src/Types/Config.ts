import FigureData from "./FigureData";

export interface Locale {
    boy: string
    girl: string
    randomize: string
    continue: string
    back: string 
}
export default interface Config {
    figure: string
    habboimager: string
    localization: string
    figuredata: string
    postfigure: string
    postgender: string
    posturl: string
    gender: string
    locale: Locale
    processedFiguredata?: FigureData
}