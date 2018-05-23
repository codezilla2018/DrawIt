import {getDataFromFile} from './file-parser'
import {conf} from './config_templates/c3.config.js'

export function generate(url, selector, callback, axises = {}, additional_configs={}) {
    
    getDataFromFile(url).then((resp) => {
        modifyConfigs(selector, resp, [axises.x, axises.y], additional_configs);
        callback(conf);
    }, errHandle);
    
    return new Promise((resolve, reject)=>{
        resolve(conf);
    }) 

}

let errHandle = (err) => {return (err)};

function modifyConfigs(bindto='', arr=[], keys=[], more={}){
    delete arr.columns;
    conf.data.json = arr;
    conf.data.keys.value = keys;
    conf.bindto = '#' + bindto;


}


