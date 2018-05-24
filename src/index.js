import {getDataFromFile} from './file-parser'
import {conf} from './config_templates/c3.config.js'

export function generate(url, selector, callback, chart_type='', axises = {}, additional_configs={}) {
    getDataFromFile(url).then((resp) => {
        modifyConfigs(selector, resp, chart_type, [axises.x, axises.y], additional_configs);
        console.log(conf);
        callback(conf);
    }, errHandle);
}

let errHandle = (err) => {return (err)};

function modifyConfigs(bindto='', arr=[], chart_type='line', keys=[], more={}){
    delete arr.columns;
    conf.data.json = arr;
    conf.data.x = keys[0];
    conf.data.keys.value = keys;
    conf.bindto = '#' + bindto;
    conf.data.type = chart_type;
}


