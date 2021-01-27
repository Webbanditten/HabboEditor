import React, { useEffect, useState } from "react";
import Config from "../../Types/Config";
import FigureData from "../../Types/FigureData";
import Localization from "../../Types/Localization";
import Loading from "../Loading/Loading";
import Stage from "../Stage/Stage";

async function loadLocalization(config: Config): Promise<Config> {


    return fetch(config.localization).then(response => response.json()).then(data => {

        data.forEach((kv : Localization) => {
            switch (kv.name) {
                case "boy": config.locale.boy = kv.value;
                    break;
                case "girl": config.locale.girl = kv.value;
                    break;
                case "back": config.locale.back = kv.value;
                    break;
                case "continue": config.locale.continue = kv.value;
                    break;
                case "randomize": config.locale.randomize = kv.value;
            }
            
        });
        
        return config;
    });

}

async function loadFigureData(config: Config): Promise<Config> {
    return fetch(config.figuredata).then(response => response.json()).then(data => {
       config.processedFiguredata = data;
       return config;
    });
}

async function loadResources(config: Config): Promise<Config> {
    config = await loadLocalization(config);
    config = await loadFigureData(config);

    return config;
}


export default function HabboEditor() {
    
    const [cfgWithResources, setCfgWithResources] = useState<Config | null>(null);
    const [config, setConfig] = useState<Config | null>(null);

        
    useEffect(() => {
        
        function fetchData(cfg: Config) {
            loadResources(cfg).then((cfgWR: Config) => {
                setCfgWithResources(cfgWR);
                //findCurrentHabboClothes(cfg);
            });
        }
        if(config !== null && config.processedFiguredata === undefined) {
            fetchData(config);
        }

        
    }, [config]);

    
    var habboeditor = document.getElementById('habboeditor');

            
    if (habboeditor) {
        var figure = habboeditor.getAttribute("data-figure");
        var habboimager = habboeditor.getAttribute("data-habboimager");
        var localization = habboeditor.getAttribute("data-localization");
        var figuredata = habboeditor.getAttribute("data-figuredata");
        var postfigure = habboeditor.getAttribute("data-postfigure");
        var postgender = habboeditor.getAttribute("data-postgender");
        var posturl = habboeditor.getAttribute("data-posturl");
        var gender = habboeditor.getAttribute("data-gender");

        if (figure && habboimager && localization && figuredata && postfigure && postgender && posturl && gender) {
            const cfg: Config = {
                figure,
                habboimager,
                localization,
                figuredata,
                postfigure,
                postgender,
                posturl,
                gender,
                locale: {
                    continue: "Continue",
                    back: "Back",
                    boy: "Boy",
                    girl: "Girl",
                    randomize: "Randomize"
                }
            };

            if (cfg === null) {
                return <strong> Config is broken </strong>
            }
            
            if(config === null) {
                setConfig(cfg);
            }
            

            if(cfgWithResources === null) {
                return <Loading />
            } else {
                return <Stage config={cfgWithResources}/>;
            }

        }
    }

    
   
    return <strong>Could not find all data attributes. </strong >;
}
