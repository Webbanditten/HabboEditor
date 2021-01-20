import React from "react";
import Config from "../../Types/Config";
import Stage from "../Stage/Stage";
import styles from "./HabboEditor.module.css";

function loadLocalization(config: Config) {
    fetch(config.localization)
    .then(response => response.json()).then(data => console.log(data))
}

function loadResources(config: Config) {
    loadLocalization(config);
}



export default function HabboEditor() {

    var habboeditor = document.getElementById('habboeditor');
    if(habboeditor) {
        var figure = habboeditor.getAttribute("data-figure");
        var habboimager = habboeditor.getAttribute("data-habboimager");
        var localization = habboeditor.getAttribute("data-localization");
        var figuredata = habboeditor.getAttribute("data-figuredata");
        var postfigure = habboeditor.getAttribute("data-postfigure");
        var postgender = habboeditor.getAttribute("data-postgender");
        var posturl = habboeditor.getAttribute("data-posturl");
        var gender = habboeditor.getAttribute("data-gender");

        if(figure && habboimager && localization && figuredata && postfigure && postgender && posturl && gender) {
            const config: Config = {
                figure,
                habboimager,
                localization,
                figuredata,
                postfigure,
                postgender,
                posturl,
                gender
            }

            loadResources(config);

            return <Stage />;
        }
    }
   
    return <strong>Could not find all data attributes. </strong>;
}